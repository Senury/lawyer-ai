"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Scale, Shield, FileText, Download, Clock, Database, HelpCircle, Search, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", label: "Alle" },
  { id: "preis", label: "Preise" },
  { id: "sicherheit", label: "Sicherheit" },
  { id: "technik", label: "Technik" },
  { id: "produkt", label: "Produkt" }
];

const faqs = [
  {
    id: "notar",
    category: "produkt",
    icon: Scale,
    question: "Ersetzt Senury den Notar?",
    answer: "Nein. Senury ist ein unterstützendes Werkzeug für Notare und deren Mitarbeitende. Die Software übernimmt repetitive Aufgaben bei der Entwurfserstellung, die inhaltliche Prüfung und die Verantwortung für die Richtigkeit bleibt stets beim Notar. Alle KI-generierten Inhalte müssen vor Verwendung sorgfältig geprüft werden."
  },
  {
    id: "203",
    category: "sicherheit",
    icon: Shield,
    question: "Ist die Software konform mit §203 StGB?",
    answer: "Ja. Senury wurde speziell für den §203-StGB-Kontext entwickelt. Alle Mitarbeiter unterliegen strengen Vertraulichkeitsvereinbarungen. Die Daten werden ausschließlich in ISO 27001-zertifizierten deutschen Rechenzentren verarbeitet. Wir stellen Auftragsverarbeitungsverträge (AVV) zur Verfügung und unterstützen bei der Einhaltung aller relevanten Compliance-Anforderungen."
  },
  {
    id: "vorlagen",
    category: "produkt",
    icon: FileText,
    question: "Können wir unsere eigenen Vorlagen nutzen?",
    answer: "Absolut. Senury ist darauf ausgelegt, Ihre bestehenden Word-Vorlagen zu importieren und zu verstehen. Die Software erkennt automatisch Strukturen, Platzhalter und Klauseln. Sie können beliebig viele eigene Vorlagen hinterlegen und nach Bedarf auswählen. Der Import-Service ist im Standard-Paket inklusive."
  },
  {
    id: "export",
    category: "technik",
    icon: Download,
    question: "Welche Exportformate werden unterstützt?",
    answer: "Senury unterstützt DOCX (Microsoft Word) als primäres Exportformat für weitere Bearbeitung. Zusätzlich können Dokumente als PDF/A für die Archivierung exportiert werden. Für die Integration in bestehende Notariatssysteme stehen XML-Schnittstellen für gängige Systeme wie TriNotar, NOVO und XNotar zur Verfügung."
  },
  {
    id: "pilot",
    category: "preis",
    icon: Clock,
    question: "Wie lange dauert die Pilotphase?",
    answer: "Wir empfehlen eine Pilotphase von 4-8 Wochen, um Senury in Ihrem Arbeitsalltag testen zu können. In dieser Zeit unterstützen wir Sie bei der Einrichtung Ihrer Vorlagen und Workflows. Der Vertrag kann mit einer Kündigungsfrist von 3 Monaten zum Vertragsende beendet werden."
  },
  {
    id: "daten",
    category: "sicherheit",
    icon: Database,
    question: "Wo werden die Daten gespeichert?",
    answer: "Alle Daten werden ausschließlich in ISO 27001-zertifizierten deutschen Rechenzentren gespeichert. Wir arbeiten mit deutschen Cloud-Anbietern zusammen, die die höchsten Sicherheitsstandards erfüllen. Geo-Redundanz sorgt für maximale Verfügbarkeit. Für Enterprise-Kunden ist auch On-Premise-Hosting möglich."
  },
  {
    id: "preiswechsel",
    category: "preis",
    icon: Scale,
    question: "Kann ich später das Paket wechseln?",
    answer: "Ja, Sie können jederzeit zwischen den Paketen upgraden oder downgraden. Änderungen werden zum nächsten Abrechnungszyklus wirksam. Bei einem Upgrade können Sie sofort die neuen Funktionen nutzen."
  },
  {
    id: "integration",
    category: "technik",
    icon: FileText,
    question: "Funktioniert Senury mit XNotar?",
    answer: "Ja, Senury bietet eine direkte Integration mit XNotar. Nach der Beurkundung können relevante Daten automatisch an XNotar übergeben werden. Zusätzlich unterstützen wir Exportformate, die mit den meisten Notariatssystemen kompatibel sind."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              FAQ
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Häufig gestellte Fragen
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              Antworten auf die wichtigsten Fragen zu Senury, Sicherheit und Implementierung.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9a9a]" />
            <input
              type="text"
              placeholder="Fragen durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-[#fafafa] border border-[#e8e8e8] rounded-full text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#fafafa] text-[#6b6b6b] hover:bg-[#f5f5f5]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24 bg-[#faf8f7]">
        <div className="max-w-3xl mx-auto px-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-[#9a9a9a] mx-auto mb-4" />
              <p className="text-[#6b6b6b]">Keine Fragen gefunden.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="text-left text-[#1a1a1a] hover:no-underline py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                        <faq.icon className="w-5 h-5 text-[#1a1a1a]" />
                      </div>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] pb-6 px-6 pl-16">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* Contact CTA Box */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <HelpCircle className="w-16 h-16 text-[#6b6b6b] mx-auto mb-6" />
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-white mb-4">
                Noch Fragen?
              </h2>
              <p className="text-[#9a9a9a] text-lg mb-8 max-w-xl mx-auto">
                Unser Team steht Ihnen für alle Fragen zur Verfügung. Vereinbaren Sie einen unverbindlichen Termin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Kontakt aufnehmen
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base rounded-full transition-colors">
                  Demo anfordern
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
