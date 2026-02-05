import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Zap, Shield, Check, Sparkles, TextCursorInput, BookOpen, Clock, Users, Lock, ChevronRight, Star, MessageSquare, LayoutGrid } from "lucide-react";

// Enhanced UI Mockup Components
function ClauseLibraryMockup() {
  return (
    <div className="bg-white shadow-elevated border border-[#e8e8e8] rounded-lg overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-[#9a9a9a]">Klauselbibliothek</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="p-2.5 rounded border border-[#e8e8e8] hover:border-[#d0d0d0] transition-colors cursor-pointer">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">Grundschuld</span>
          </div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-full mb-1"></div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-2/3"></div>
        </div>
        <div className="p-2.5 bg-[#fafafa] border border-[#e8e8e8] rounded">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">Auflassung</span>
            <Check className="w-3 h-3 text-[#c9a66b]" />
          </div>
          <p className="text-[9px] text-[#6b6b6b] leading-relaxed font-serif">
            Die Beteiligten sind sich darüber einig, dass das Eigentum am Grundbesitz auf den Käufer übergehen soll...
          </p>
        </div>
        <div className="p-2.5 rounded border border-[#e8e8e8] hover:border-[#d0d0d0] transition-colors cursor-pointer">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">Belastungsvollmacht</span>
          </div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-3/4 mb-1"></div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

function VersionTabsMockup() {
  return (
    <div className="glass-panel p-1.5 flex gap-0.5 items-center rounded-lg">
      <div className="px-3 py-1.5 bg-[#1a1a1a] text-white text-[10px] font-medium rounded-md">Entwurf</div>
      <div className="px-3 py-1.5 text-[#6b6b6b] text-[10px] font-medium hover:text-[#1a1a1a] cursor-pointer transition-colors rounded-md">Vergleich</div>
      <div className="px-3 py-1.5 text-[#6b6b6b] text-[10px] font-medium hover:text-[#1a1a1a] cursor-pointer transition-colors rounded-md">Final</div>
    </div>
  );
}

function AIAssistantMockup() {
  return (
    <div className="glass-panel p-3 flex flex-col gap-2 max-w-[200px] rounded-xl shadow-soft">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-[#c9a66b]/10 flex items-center justify-center text-[#c9a66b] rounded-lg">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold text-[#1a1a1a]">KI-Assistent</span>
          <span className="text-[9px] text-[#9a9a9a]">Generiert in 2.3s</span>
        </div>
      </div>
      <div className="text-[9px] text-[#6b6b6b] leading-relaxed border-l-2 border-[#c9a66b]/30 pl-2">
        "Kaufpreiszahlung wurde an die Fälligkeitsvoraussetzungen angepasst."
      </div>
      <button className="w-full bg-[#1a1a1a] text-white text-[9px] font-medium py-1.5 rounded-md hover:bg-[#2d2d2d] transition-colors">
        Übernehmen
      </button>
    </div>
  );
}

function FloatingCardMockup({ title, content, delay = 0 }: { title: string; content: string; delay?: number }) {
  return (
    <div
      className="bg-white/90 backdrop-blur-sm border border-[#e8e8e8] p-3 rounded-lg shadow-soft"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#c9a66b]"></div>
        <span className="text-[10px] font-medium text-[#1a1a1a]">{title}</span>
      </div>
      <div className="text-[9px] text-[#6b6b6b]">{content}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="group bg-white p-6 border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-soft transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center bg-[#fafafa] border border-[#e8e8e8] rounded-lg mb-4 group-hover:bg-[#f5f5f5] transition-colors">
        <Icon className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">{title}</h3>
        <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[#6b6b6b]">
      <Icon className="w-4 h-4" strokeWidth={1.5} />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-1 tracking-tight">{number}</div>
      <div className="text-xs text-[#6b6b6b]">{label}</div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center rounded-full mb-4 font-serif text-lg">
        {number}
      </div>
      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8]">
                  Jetzt verfügbar — Made in Germany
                </span>
              </div>
              <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#1a1a1a] mb-6 tracking-tight">
                Kaufverträge in Minuten.
                <span className="italic text-[#6b6b6b] block mt-2">Nicht in Stunden.</span>
              </h1>
              <p className="text-base md:text-lg text-[#6b6b6b] mb-8 max-w-md leading-relaxed">
                Senury unterstützt Notare und ihre Teams bei der Erstellung strukturierter Kaufvertragsentwürfe. Mit KI-gestütztem Drafting, intelligenter Klauselverwaltung und lückenloser Dokumentation – natürlich §203 StGB-konform.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white text-sm font-medium h-12 px-6 rounded-full transition-all">
                  Kostenlose Demo vereinbaren
                </Button>
                <Link href="/sicherheit" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] h-12 px-2 transition-colors">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Sicherheits-Whitepaper</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Content - Floating Mockups */}
            <div className="relative h-[450px] lg:h-[550px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-[#c9a66b]/10 to-transparent rounded-full blur-3xl"></div>

              <div className="relative w-full max-w-sm">
                {/* Main Mockup */}
                <div className="relative z-10">
                  <ClauseLibraryMockup />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-20">
                  <VersionTabsMockup />
                </div>

                <div className="absolute -bottom-6 -right-8 z-20">
                  <AIAssistantMockup />
                </div>

                <div className="absolute top-1/4 -left-12 z-20">
                  <FloatingCardMockup
                    title="Status"
                    content="Entwurf v2.1 generiert"
                    delay={100}
                  />
                </div>

                <div className="absolute bottom-1/4 -right-16 z-20">
                  <FloatingCardMockup
                    title="Prüfung"
                    content="Alle Klauseln validiert"
                    delay={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <TrustBadge icon={Shield} label="§203 StGB-konform" />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Lock} label="DSGVO-konform" />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Check} label="ISO 27001" />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Star} label="Made in Germany" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="75%" label="weniger Zeit für Entwürfe" />
            <StatCard number="30 Min" label="statt 4 Stunden" />
            <StatCard number="100%" label="DSGVO-konform" />
            <StatCard number="§203" label="StGB-konform" />
          </div>
        </div>
      </section>

      {/* Problem Section - Pain Point */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Das Problem</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Täglich 4+ Stunden für Entwürfe?
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                Der nächste Kaufvertrag wartet – und wieder beginnt die mühsame Arbeit: Stammdaten abtippen,
                Paragraphen prüfen, Klauseln kopieren, Formatierungen korrigieren. Stunden vergehen,
                bevor der erste Entwurf steht.
              </p>
              <ul className="space-y-4">
                {[
                  "Repetitive Tipp-Arbeit statt inhaltlicher Prüfung",
                  "Zeitdruck bei begrenzten Kapazitäten",
                  "Hoher Compliance-Druck durch §203 StGB",
                  "Risiko von Übertragungsfehlern"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9a9a9a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#faf8f7] p-8 border border-[#e8e8e8]">
              <div className="bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[#9a9a9a]" />
                  <span className="font-medium text-[#1a1a1a]">Zeitaufwand pro Kaufvertrag</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">Datenerfassung</span>
                      <span className="text-[#1a1a1a] font-medium">45 Min</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">Entwurfsarbeit</span>
                      <span className="text-[#1a1a1a] font-medium">2.5 Std</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">Korrekturen</span>
                      <span className="text-[#1a1a1a] font-medium">1 Std</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[40%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8e8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b6b6b]">Gesamt</span>
                    <span className="text-xl font-serif font-medium text-[#1a1a1a]">~4 Std</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 border border-[#e8e8e8] shadow-soft">
              <div className="bg-[#fafafa] p-6 border border-[#e8e8e8]">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-[#c9a66b]" />
                  <span className="font-medium text-[#1a1a1a]">Mit Senury</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">Datenerfassung</span>
                      <span className="text-[#1a1a1a] font-medium">15 Min</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[20%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">KI-Entwurf</span>
                      <span className="text-[#1a1a1a] font-medium">5 Min</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[10%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">Ihre Prüfung</span>
                      <span className="text-[#1a1a1a] font-medium">10 Min</span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8e8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b6b6b]">Gesamt</span>
                    <span className="text-xl font-serif font-medium text-[#c9a66b]">~30 Min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">Die Lösung</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Senury reduziert das auf 30 Minuten
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                Senury übernimmt die repetitive Arbeit. Sie behalten die volle Kontrolle über Inhalt und Qualität.
                Die KI generiert den Entwurf, Sie prüfen und finalisieren.
              </p>
              <ul className="space-y-4">
                {[
                  "Strukturierte Datenerfassung mit Validierung",
                  "KI-gestützte Entwurfserstellung in Minuten",
                  "Intelligente Klausel-Vorschläge",
                  "Lückenlose Dokumentation für Compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Funktionen</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Alles, was Sie brauchen
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Eine komplette Lösung für die effiziente Erstellung von Kaufverträgen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]">
            <FeatureCard
              icon={TextCursorInput}
              title="Intelligente Erfassung"
              description="Strukturierte Datenerfassung mit automatischen Plausibilitätsprüfungen. Keine Informationen gehen verloren."
            />
            <FeatureCard
              icon={FileText}
              title="KI-gestütztes Drafting"
              description="Basierend auf Ihren Vorlagen und bewährten Klauseln entsteht der erste Entwurf in Minuten."
            />
            <FeatureCard
              icon={Shield}
              title="Lückenlose Dokumentation"
              description="Automatische Versionierung und Audit-Trails. Compliance-ready für §203 StGB und DSGVO."
            />
            <FeatureCard
              icon={BookOpen}
              title="Klauselverwaltung"
              description="Verwalten Sie Ihre bewährten Klauseln zentral. Kontextbewusste Vorschläge inklusive."
            />
            <FeatureCard
              icon={Users}
              title="Team-Kollaboration"
              description="Arbeiten Sie gemeinsam an Entwürfen. Kommentare und Änderungen in Echtzeit."
            />
            <FeatureCard
              icon={LayoutGrid}
              title="Nahtlose Integration"
              description="Word- und Outlook-Add-ins für Ihren gewohnten Workflow. Importieren Sie Ihre Vorlagen."
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Ablauf</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              So funktioniert Senury
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-xl mx-auto">
              Vom Mandantengespräch bis zur Siegelung – in drei klaren Schritten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-[#e8e8e8]"></div>

            <ProcessStep
              number="1"
              title="Daten erfassen"
              description="Erfassen Sie Parteien, Objektdaten und Vertragskonditionen in strukturierten Formularen."
            />
            <ProcessStep
              number="2"
              title="Entwurf generieren"
              description="Senury erstellt den ersten Entwurf basierend auf Ihren Vorlagen und Klauseln."
            />
            <ProcessStep
              number="3"
              title="Prüfen & finalisieren"
              description="Sie prüfen, korrigieren und finalisieren. Export als DOCX oder PDF/A."
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-none">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c9a66b] text-[#c9a66b]" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-8 leading-relaxed">
                  "Senury hat unseren Workflow fundamental verändert. Was früher Stunden gedauert hat,
                  erledigen wir jetzt in unter einer Stunde – bei gleichbleibender Qualität und voller Kontrolle."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e5e5e5] rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#6b6b6b]">N</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-[#1a1a1a]">Notar aus Bayern</div>
                    <div className="text-sm text-[#6b6b6b]">Pilot-Kunde seit 2024</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm text-[#9a9a9a] uppercase tracking-widest">Integriert mit Ihren Tools</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <FileText className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">Microsoft Word</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <MessageSquare className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">Microsoft Outlook</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <LayoutGrid className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">XNotar</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Zeit sparen. Qualität sichern.
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8 max-w-xl mx-auto">
            Vereinbaren Sie eine unverbindliche Demo und erfahren Sie, wie Senury Ihr Notariat unterstützt.
            Ohne Verpflichtung, mit echten Beispielen aus Ihrem Alltag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 px-8 text-sm rounded-full">
              Kostenlose Demo vereinbaren
            </Button>
            <Button variant="outline" className="border-[#d0d0d0] text-[#1a1a1a] hover:bg-[#fafafa] h-12 px-8 text-sm rounded-full">
              Preise ansehen
            </Button>
          </div>
          <p className="text-xs text-[#9a9a9a] mt-6">
            30-tägige Testphase · Keine Kreditkarte erforderlich · Persönliche Onboarding-Begleitung
          </p>
        </div>
      </section>
    </div>
  );
}
