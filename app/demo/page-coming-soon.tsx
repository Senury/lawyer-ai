"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DemoComingSoon() {
  const t = useTranslations("demo");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a1a1a" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full text-xs font-medium mb-8">
              <Clock className="w-3.5 h-3.5" />
              Demnächst verfügbar
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Persönliche Demo
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-8 max-w-2xl mx-auto leading-relaxed">
              Wir arbeiten intensiv an der Demo-Funktion.
              Bald können Sie hier direkt einen Termin für eine persönliche
              Produktvorführung vereinbaren.
            </p>

            {/* CTA to contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 px-8 rounded-full"
              >
                <Link href="/kontakt/">
                  <Mail className="w-4 h-4 mr-2" />
                  Kontaktieren Sie uns
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center mb-4 rounded-lg">
                  <Sparkles className="w-5 h-5 text-[#c9a66b]" />
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">
                  Was erwartet Sie
                </h3>
                <p className="text-sm text-[#6b6b6b]">
                  Eine persönliche 30-minütige Führung durch Senury,
                  angepasst auf Ihre spezifischen Anforderungen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center mb-4 rounded-lg">
                  <Clock className="w-5 h-5 text-[#c9a66b]" />
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">
                  Flexible Termine
                </h3>
                <p className="text-sm text-[#6b6b6b]">
                  Wählen Sie einen Zeitpunkt, der in Ihren Kalender passt.
                  Morgens, mittags oder abends – ganz wie es Ihnen passt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center mb-4 rounded-lg">
                  <Mail className="w-5 h-5 text-[#c9a66b]" />
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">
                  Fragen vorab?
                </h3>
                <p className="text-sm text-[#6b6b6b]">
                  Schreiben Sie uns jederzeit an{" "}
                  <a
                    href="mailto:contact@senury.com"
                    className="text-[#c9a66b] hover:underline"
                  >
                    contact@senury.com
                  </a>
                  . Wir antworten schnellstmöglich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Haben Sie Fragen zu Senury?
          </h2>
          <p className="text-[#9a9a9a] mb-8 max-w-xl mx-auto">
            Auch ohne Demo-Termin stehen wir Ihnen gerne für Fragen zur Verfügung.
            Schreiben Sie uns einfach.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full h-12 px-8"
          >
            <Link href="/kontakt/">
              Zum Kontaktformular
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
