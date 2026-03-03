import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return null;
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // 3 appointment requests per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim();
}

interface DatePreference {
  priority: number;
  date: string;
  time: string;
}

function createAppointmentRequestEmail(data: {
  name: string;
  email: string;
  phone: string | null;
  notaryName: string;
  position: string | null;
  message: string | null;
  preferences: DatePreference[];
  submittedAt: Date;
}): { html: string; text: string } {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #fdfcfb; padding: 30px; border: 1px solid #e8e8e8; border-top: none; }
    .preference { background: white; border: 1px solid #e8e8e8; border-radius: 8px; padding: 15px; margin-bottom: 10px; }
    .priority { display: inline-block; width: 28px; height: 28px; background: #c9a66b; color: white; border-radius: 50%; text-align: center; line-height: 28px; font-weight: bold; margin-right: 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: 600; color: #6b6b6b; font-size: 14px; }
    .value { color: #1a1a1a; }
    .footer { text-align: center; padding: 20px; color: #6b6b6b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Neue Demo-Terminanfrage</h1>
    </div>
    <div class="content">
      <h2 style="margin-top: 0; color: #1a1a1a;">Terminvorschläge</h2>
      ${data.preferences
        .map(
          (pref) => `
      <div class="preference">
        <span class="priority">${pref.priority}</span>
        <strong>${formatDate(pref.date)}</strong> um <strong>${pref.time} Uhr</strong>
      </div>
      `
        )
        .join("")}

      <h2 style="margin-top: 30px; color: #1a1a1a;">Kontaktdaten</h2>
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${
        data.phone
          ? `
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${data.phone}</div>
      </div>
      `
          : ""
      }
      <div class="field">
        <div class="label">Notariat</div>
        <div class="value">${data.notaryName}</div>
      </div>
      ${
        data.position
          ? `
      <div class="field">
        <div class="label">Position</div>
        <div class="value">${data.position}</div>
      </div>
      `
          : ""
      }
      ${
        data.message
          ? `
      <div class="field">
        <div class="label">Nachricht</div>
        <div class="value">${data.message}</div>
      </div>
      `
          : ""
      }

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8e8e8; font-size: 14px; color: #6b6b6b;">
        Eingereicht am ${data.submittedAt.toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} um ${data.submittedAt.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  })} Uhr
      </div>
    </div>
    <div class="footer">
      Senury Demo-Terminanfrage
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const text = `
Neue Demo-Terminanfrage

TERMINVORSCHLÄGE
${data.preferences
  .map(
    (pref) =>
      `${pref.priority}. Wahl: ${formatDate(pref.date)} um ${pref.time} Uhr`
  )
  .join("\n")}

KONTAKTDATEN
Name: ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
Notariat: ${data.notaryName}
${data.position ? `Position: ${data.position}` : ""}
${data.message ? `\nNachricht:\n${data.message}` : ""}

---
Eingereicht am ${data.submittedAt.toLocaleDateString("de-DE")} um ${data.submittedAt.toLocaleTimeString("de-DE")} Uhr
  `;

  return { html, text };
}

function createAppointmentConfirmationEmail(data: {
  name: string;
  preferences: DatePreference[];
}): { html: string; text: string } {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #fdfcfb; padding: 30px; border: 1px solid #e8e8e8; border-top: none; }
    .preference { background: white; border: 1px solid #e8e8e8; border-radius: 8px; padding: 12px; margin-bottom: 8px; font-size: 14px; }
    .priority { display: inline-block; width: 24px; height: 24px; background: #1a1a1a; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 8px; }
    .footer { text-align: center; padding: 20px; color: #6b6b6b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Vielen Dank für Ihre Anfrage</h1>
    </div>
    <div class="content">
      <p style="margin-top: 0;">Hallo ${data.name},</p>
      <p>vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Terminanfrage erhalten und werden Ihre Terminvorschläge prüfen.</p>

      <h3 style="color: #1a1a1a; margin-bottom: 15px;">Ihre Terminvorschläge:</h3>
      ${data.preferences
        .map(
          (pref) => `
      <div class="preference">
        <span class="priority">${pref.priority}</span>
        ${formatDate(pref.date)} • ${pref.time} Uhr
      </div>
      `
        )
        .join("")}

      <p style="margin-top: 25px;">Wir melden uns <strong>innerhalb von 24 Stunden</strong> mit einer Terminbestätigung bei Ihnen. Sie erhalten dann auch den Zugangslink für die Videokonferenz.</p>

      <p>Bei Fragen erreichen Sie uns jederzeit unter <a href="mailto:contact@senury.com" style="color: #c9a66b;">contact@senury.com</a>.</p>

      <p style="margin-bottom: 0;">Mit freundlichen Grüßen,<br>Ihr Senury Team</p>
    </div>
    <div class="footer">
      Senury – KI-gestützte Notariatssoftware
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const text = `
Vielen Dank für Ihre Anfrage

Hallo ${data.name},

vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Terminanfrage erhalten und werden Ihre Terminvorschläge prüfen.

IHRE TERMINVORSCHLÄGE:
${data.preferences
  .map((pref) => `${pref.priority}. ${formatDate(pref.date)} • ${pref.time} Uhr`)
  .join("\n")}

Wir melden uns innerhalb von 24 Stunden mit einer Terminbestätigung bei Ihnen. Sie erhalten dann auch den Zugangslink für die Videokonferenz.

Bei Fragen erreichen Sie uns jederzeit unter contact@senury.com.

Mit freundlichen Grüßen,
Ihr Senury Team

---
Senury – KI-gestützte Notariatssoftware
  `;

  return { html, text };
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const { name, email, phone, notaryName, position, message, preferences } = body;

    // Validate required fields
    if (!name || !email || !notaryName || !preferences || !Array.isArray(preferences) || preferences.length !== 3) {
      return NextResponse.json(
        { error: "Name, E-Mail, Notariat und 3 Terminvorschläge sind erforderlich" },
        { status: 400 }
      );
    }

    // Validate preferences
    for (const pref of preferences) {
      if (!pref.date || !pref.time || !pref.priority) {
        return NextResponse.json(
          { error: "Jeder Terminvorschlag muss Datum, Uhrzeit und Priorität enthalten" },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültiges E-Mail-Format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : null;
    const sanitizedNotaryName = sanitizeInput(notaryName);
    const sanitizedPosition = position ? sanitizeInput(position) : null;
    const sanitizedMessage = message ? sanitizeInput(message) : null;

    // Check Resend configuration
    const resendClient = getResend();
    if (!resendClient) {
      return NextResponse.json(
        { error: "E-Mail-Service nicht konfiguriert. Bitte setzen Sie RESEND_API_KEY." },
        { status: 500 }
      );
    }

    // Generate admin notification email
    const { html, text } = createAppointmentRequestEmail({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      notaryName: sanitizedNotaryName,
      position: sanitizedPosition,
      message: sanitizedMessage,
      preferences,
      submittedAt: new Date(),
    });

    // Configure recipient via env var
    const recipient = process.env.EMAIL_RECIPIENT || "contact@senury.com";
    const bcc = process.env.EMAIL_BCC;

    // Send notification to admin
    const { data, error } = await resendClient.emails.send({
      from: "Senury <demo@senury.com>",
      to: [recipient],
      ...(bcc ? { bcc: [bcc] } : {}),
      replyTo: sanitizedEmail,
      subject: `Neue Demo-Terminanfrage von ${sanitizedName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden" },
        { status: 500 }
      );
    }

    // Send confirmation to user (non-blocking)
    try {
      const { html: confirmHtml, text: confirmText } = createAppointmentConfirmationEmail({
        name: sanitizedName,
        preferences,
      });

      await resendClient.emails.send({
        from: "Senury <demo@senury.com>",
        to: [sanitizedEmail],
        subject: "Ihre Demo-Terminanfrage bei Senury",
        html: confirmHtml,
        text: confirmText,
      });
    } catch (confirmError) {
      // Log but don't fail the request if confirmation fails
      console.error("Confirmation email error:", confirmError);
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
