import type { Metadata } from "next";
import KontaktPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Kontakt | Wir helfen Ihnen gerne",
  description:
    "Kontaktieren Sie Senury für Fragen zur Notariatssoftware, Preise oder Terminvereinbarung. Wir sind für Sie da.",
  keywords: [
    "Senury Kontakt",
    "Notariatssoftware Anfrage",
    "KI Notar Kontakt",
    "Demo vereinbaren",
  ],
  alternates: {
    canonical: "/kontakt/",
  },
  openGraph: {
    title: "Senury Kontakt | Wir helfen Ihnen gerne",
    description:
      "Kontaktieren Sie uns für Fragen zur Notariatssoftware, Preise oder Terminvereinbarung.",
    url: "https://senury.com/kontakt/",
    images: ["/favicon.png"],
  },
};

// LocalBusiness Schema Component
function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Senury",
    "description": "KI-gestützte Notariatssoftware für die effiziente Erstellung von Kaufverträgen und Urkunden.",
    "url": "https://senury.com",
    "email": "hello@senury.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressLocality": "Hamburg"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5511",
      "longitude": "9.9937"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Bank transfer, Invoice"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

export default function KontaktPage() {
  return (
    <>
      <LocalBusinessSchema />
      <KontaktPageClient />
    </>
  );
}
