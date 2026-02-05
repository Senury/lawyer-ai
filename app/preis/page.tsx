"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, HelpCircle, Shield, Clock, Scale, ArrowRight, Star, Lock, Server } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Pilot",
    priceMonthly: "499",
    priceYearly: "449",
    description: "Ideal für kleine Notariate, die Senury testen möchten",
    features: [
      "Bis zu 50 Vorgänge/Monat",
      "5 benutzerdefinierte Vorlagen",
      "E-Mail Support (24h Antwortzeit)",
      "Standard-Klauselbibliothek",
      "Export: DOCX & PDF",
      "§203 StGB-konforme Infrastruktur"
    ],
    cta: "Anfragen",
    popular: false
  },
  {
    name: "Professional",
    priceMonthly: "899",
    priceYearly: "809",
    description: "Das optimale Paket für etablierte Notariate",
    features: [
      "Bis zu 200 Vorgänge/Monat",
      "20 benutzerdefinierte Vorlagen",
      "Priorisierter Support (4h Antwortzeit)",
      "Erweiterte Klauselbibliothek",
      "Word & Outlook Add-Ins",
      "Team-Kollaboration",
      "Versionsvergleich & Audit-Log",
      "Persönliches Onboarding"
    ],
    cta: "Anfragen",
    popular: true
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    description: "Maßgeschneiderte Lösungen für große Kanzleien",
    features: [
      "Unbegrenzte Vorgänge",
      "Unbegrenzte Vorlagen",
      "Dedizierter Account Manager",
      "API-Zugang für Integrationen",
      "Custom Onboarding & Schulung",
      "SLA-Garantie (99,9% Uptime)",
      "24/7 Prioritäts-Support",
      "On-Premise Hosting möglich"
    ],
    cta: "Kontaktieren",
    popular: false
  }
];

const faqs = [
  {
    question: "Wie schnell ist der ROI bei Senury?",
    answer: "Die meisten Kunden berichten von Zeitersparnissen von 30-50% bei der Entwurfserstellung. Bei durchschnittlich 20 Kaufverträgen pro Monat amortisiert sich die Investition typischerweise innerhalb von 3 Monaten."
  },
  {
    question: "Kann ich später das Paket wechseln?",
    answer: "Ja, Sie können jederzeit zwischen den Paketen upgraden oder downgraden. Änderungen werden zum nächsten Abrechnungszyklus wirksam."
  },
  {
    question: "Wie lange läuft der Vertrag?",
    answer: "Alle Pakete haben eine Mindestlaufzeit von 12 Monaten mit anschließender automatischer Verlängerung. Kündigungsfrist: 3 Monate zum Vertragsende."
  },
  {
    question: "Was passiert bei Überschreitung des Vorgangslimits?",
    answer: "Sie erhalten eine Benachrichtigung bei 80% und 95% Ihres Limits. Zusätzliche Vorgänge können einzeln gebucht werden oder Sie upgraden Ihr Paket."
  }
];

const trustItems = [
  {
    icon: Shield,
    question: "Ist meine Daten sicher?",
    answer: "Alle Daten werden ausschließlich in ISO 27001-zertifizierten deutschen Rechenzentren gespeichert. Ende-zu-Ende Verschlüsselung inklusive. AVV auf Wunsch sofort verfügbar."
  },
  {
    icon: Clock,
    question: "Wie lange dauert die Einführung?",
    answer: "Die meisten Kunden sind nach 2-4 Wochen produktiv. Wir begleiten Sie persönlich durch das Onboarding, importieren Ihre Vorlagen und schulen Ihr Team."
  },
  {
    icon: Scale,
    question: "Kann ich kündigen?",
    answer: "Selbstverständlich. Mit einer Kündigungsfrist von 3 Monaten zum Vertragsende. Ihre Daten können jederzeit im Standardformat exportiert werden. Keine versteckten Klauseln."
  },
  {
    icon: HelpCircle,
    question: "Gibt es eine Testphase?",
    answer: "Ja, alle Pakete können 30 Tage kostenlos getestet werden. Keine Kreditkarte erforderlich. Persönliche Onboarding-Begleitung inklusive."
  }
];

const featureComparison = [
  { feature: "Vorgänge/Monat", pilot: "50", professional: "200", enterprise: "Unbegrenzt" },
  { feature: "Benutzerdefinierte Vorlagen", pilot: "5", professional: "20", enterprise: "Unbegrenzt" },
  { feature: "Word Add-In", pilot: false, professional: true, enterprise: true },
  { feature: "Outlook Add-In", pilot: false, professional: true, enterprise: true },
  { feature: "Team-Kollaboration", pilot: false, professional: true, enterprise: true },
  { feature: "Versionsvergleich", pilot: false, professional: true, enterprise: true },
  { feature: "Audit-Log", pilot: false, professional: true, enterprise: true },
  { feature: "API-Zugang", pilot: false, professional: false, enterprise: true },
  { feature: "On-Premise Hosting", pilot: false, professional: false, enterprise: true },
  { feature: "Support-Antwortzeit", pilot: "24h", professional: "4h", enterprise: "24/7" },
];

export default function PreisPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              Transparente Preise
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Preise für jedes Notariat
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              Keine versteckten Kosten, keine Überraschungen. Wählen Sie das Paket, das zu Ihrem Volumen passt.
              Alle Preise zzgl. MwSt.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle & Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-[#1a1a1a] font-medium" : "text-[#6b6b6b]"}`}>
              Monatlich
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-[#e8e8e8] rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-[#1a1a1a] font-medium" : "text-[#6b6b6b]"}`}>
              Jährlich
            </span>
            <span className="pill-badge bg-[#c9a66b]/10 text-[#c9a66b] text-[10px]">
              10% sparen
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`bg-white ${tier.popular ? "border-[#1a1a1a] border-2 shadow-elevated" : "border-[#e8e8e8]"} relative rounded-xl overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-xs font-medium px-4 py-1 rounded-b-lg">
                    Beliebteste Wahl
                  </div>
                )}
                <CardContent className="p-8 pt-10">
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-2">{tier.name}</h3>
                  <p className="text-sm text-[#6b6b6b] mb-6">{tier.description}</p>

                  <div className="mb-6">
                    {tier.priceMonthly === null ? (
                      <span className="text-4xl font-serif font-medium text-[#1a1a1a]">Auf Anfrage</span>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-serif font-medium text-[#1a1a1a]">
                          €{isYearly ? tier.priceYearly : tier.priceMonthly}
                        </span>
                        <span className="text-[#9a9a9a] ml-2">/Monat</span>
                      </div>
                    )}
                    {isYearly && tier.priceYearly && (
                      <p className="text-xs text-[#6b6b6b] mt-1">
                        Bei jährlicher Zahlung
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#3d3d3d]">
                        <Check className="w-4 h-4 text-[#c9a66b] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 rounded-full transition-colors ${
                      tier.popular
                        ? "bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white"
                        : "bg-white border border-[#e8e8e8] text-[#1a1a1a] hover:bg-[#fafafa]"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Shield className="w-4 h-4" />
              <span className="text-xs">§203 StGB-konform</span>
            </div>
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Lock className="w-4 h-4" />
              <span className="text-xs">DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Server className="w-4 h-4" />
              <span className="text-xs">Hosting in Deutschland</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              Funktionsübersicht
            </h2>
            <p className="text-[#6b6b6b]">
              Alle Funktionen im direkten Vergleich
            </p>
          </div>

          <div className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[#fafafa] border-b border-[#e8e8e8] text-sm font-medium text-[#1a1a1a]">
              <div>Funktion</div>
              <div className="text-center">Pilot</div>
              <div className="text-center">Professional</div>
              <div className="text-center">Enterprise</div>
            </div>

            {featureComparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-4 p-4 border-b border-[#e8e8e8] last:border-0 text-sm">
                <div className="text-[#1a1a1a]">{row.feature}</div>
                <div className="text-center text-[#6b6b6b]">
                  {typeof row.pilot === "boolean" ? (
                    row.pilot ? (
                      <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                    ) : (
                      <span className="text-[#e5e5e5]">—</span>
                    )
                  ) : (
                    row.pilot
                  )}
                </div>
                <div className="text-center text-[#6b6b6b]">
                  {typeof row.professional === "boolean" ? (
                    row.professional ? (
                      <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                    ) : (
                      <span className="text-[#e5e5e5]">—</span>
                    )
                  ) : (
                    row.professional
                  )}
                </div>
                <div className="text-center text-[#6b6b6b]">
                  {typeof row.enterprise === "boolean" ? (
                    row.enterprise ? (
                      <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                    ) : (
                      <span className="text-[#e5e5e5]">—</span>
                    )
                  ) : (
                    row.enterprise
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">FAQ</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a]">
              Häufig gestellte Fragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#e8e8e8]">
                <AccordionTrigger className="text-left text-[#1a1a1a] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b6b6b] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Vertrauen</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Warum Notare Senury vertrauen
            </h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              Sicherheit, Transparenz und Kontrolle stehen bei uns an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {trustItems.map((item, i) => (
              <Card key={i} className="bg-white border-[#e8e8e8] rounded-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1a1a1a] mb-2">{item.question}</h3>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            Noch unsicher?
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie eine unverbindliche Demo. Wir zeigen Ihnen Senury anhand echter Beispiele
            aus Ihrem Notariat – und beantworten alle Ihre Fragen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors">
              Kostenlose Demo vereinbaren
            </Button>
            <Link href="/faq" className="group flex items-center gap-2 text-[#9a9a9a] hover:text-white transition-colors">
              <span>Weitere Fragen?</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
