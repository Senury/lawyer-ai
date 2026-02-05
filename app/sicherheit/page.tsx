import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, FileCheck, Download, CheckCircle, Server, Fingerprint, FileText, Globe, Clock, Award } from "lucide-react";

const stats = [
  { number: "256", label: "Bit AES-Verschlüsselung" },
  { number: "99.9%", label: "Uptime-Garantie" },
  { number: "3", label: "Redundante Standorte" },
  { number: "DE", label: "Exklusiv Deutschland" }
];

const complianceCards = [
  {
    icon: Shield,
    title: "§203 StGB",
    subtitle: "Berufsgeheimnis-konform",
    description: "Senury ist speziell für den §203-StGB-Kontext konzipiert. Alle Mitarbeiter unterliegen strengen Vertraulichkeitsvereinbarungen. Prozesse sind auf Verschwiegenheit ausgerichtet."
  },
  {
    icon: Server,
    title: "DSGVO & Hosting",
    subtitle: "Deutsche Rechenzentren",
    description: "Alle Daten werden ausschließlich in ISO 27001-zertifizierten deutschen Rechenzentren gespeichert. Auftragsverarbeitungsverträge (AVV) stehen jederzeit zur Verfügung."
  },
  {
    icon: FileCheck,
    title: "ISO 27001",
    subtitle: "Internationale Standards",
    description: "Unsere Infrastruktur und Prozesse sind an den ISO 27001 Standard angelehnt. Jährliche Audits und Penetrationstests durch unabhängige Experten."
  }
];

const technicalDetails = [
  {
    icon: Lock,
    title: "End-to-End Verschlüsselung",
    description: "Alle Daten werden mit AES-256 verschlüsselt – sowohl im Transit (TLS 1.3) als auch im Ruhezustand. Ihre Mandantendaten sind jederzeit geschützt."
  },
  {
    icon: Fingerprint,
    title: "RBAC & 2-Faktor-Authentifizierung",
    description: "Rollenbasierte Zugriffssteuerung mit granularen Berechtigungen. Zusätzlich verpflichtendes 2FA für alle Accounts – keine Ausnahmen."
  },
  {
    icon: Eye,
    title: "Audit-Logs & Versionierung",
    description: "Lückenlose Protokollierung aller Systemzugriffe und Datenänderungen. Nachvollziehbarkeit auf Knopfdruck für Compliance-Prüfungen."
  },
  {
    icon: Database,
    title: "Geo-Redundanz",
    description: "Ihre Daten werden in Echtzeit an mehreren geografisch getrennten Standorten in Deutschland gespiegelt. Maximale Verfügbarkeit, keine Datenverluste."
  }
];

const downloadItems = [
  { name: "Technische und organisatorische Maßnahmen (TOMs)", size: "PDF, 1.2 MB", desc: "Detaillierte Beschreibung aller Sicherheitsmaßnahmen" },
  { name: "Auftragsverarbeitungsvertrag (AVV)", size: "PDF, 0.8 MB", desc: "Standard-AVV für Ihre Unterlagen" },
  { name: "Sicherheits-Whitepaper", size: "PDF, 2.4 MB", desc: "Umfassende Dokumentation unserer Security-Architektur" }
];

const certifications = [
  {
    icon: Shield,
    title: "§203 StGB",
    description: "Berufsgeheimnis-konform"
  },
  {
    icon: Lock,
    title: "DSGVO",
    description: "EU-Datenschutzverordnung"
  },
  {
    icon: FileCheck,
    title: "ISO 27001",
    description: "Informationssicherheit"
  },
  {
    icon: Server,
    title: "BSI",
    description: "Grundschutz-orientiert"
  }
];

export default function SicherheitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              Sicherheit
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Sicherheit auf Notariats-Niveau
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              Ihre Mandantendaten verdienen höchsten Schutz. Senury wurde von Grund auf mit Blick auf
              §203 StGB, DSGVO und ISO 27001 entwickelt. Made in Germany, hosted in Germany.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-1 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs text-[#6b6b6b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center mx-auto mb-3 rounded-lg">
                  <cert.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div className="font-medium text-[#1a1a1a]">{cert.title}</div>
                <div className="text-xs text-[#6b6b6b]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Cards */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              Compliance
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Compliance für den Notarberuf
            </h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              Entwickelt für die strengen Anforderungen des deutschen Notarstands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceCards.map((card) => (
              <Card key={card.title} className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center mb-6 rounded-lg">
                    <card.icon className="w-7 h-7 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-1">{card.title}</h3>
                  <p className="text-sm text-[#c9a66b] font-medium mb-4">{card.subtitle}</p>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              Technik
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Technische Sicherheitsdetails
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Sicherheit ist kein Feature – sie ist das Fundament unserer Architektur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalDetails.map((item) => (
              <Card key={item.title} className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">{item.title}</h3>
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Location */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                Hosting
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Ihre Daten bleiben in Deutschland
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-6">
                Alle Senury-Server stehen in ISO 27001-zertifizierten deutschen Rechenzentren.
                Wir arbeiten ausschließlich mit deutschen Cloud-Providern zusammen.
                Keine Datenweitergabe an Dritte, keine Verarbeitung außerhalb der EU.
              </p>
              <ul className="space-y-3">
                {[
                  "Exklusiv deutsche Server-Standorte",
                  "ISO 27001-zertifizierte Rechenzentren",
                  "Keine Datenweitergabe an Dritte",
                  "Geo-Redundanz innerhalb Deutschlands"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <CheckCircle className="w-5 h-5 text-[#c9a66b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] rounded-xl shadow-soft">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#fafafa] p-4 border border-[#e8e8e8] text-center rounded-lg">
                  <Globe className="w-6 h-6 text-[#c9a66b] mx-auto mb-2" />
                  <div className="text-2xl font-serif font-medium text-[#1a1a1a] mb-1">DE</div>
                  <div className="text-xs text-[#6b6b6b]">Exklusiv Deutschland</div>
                </div>
                <div className="bg-[#fafafa] p-4 border border-[#e8e8e8] text-center rounded-lg">
                  <Clock className="w-6 h-6 text-[#c9a66b] mx-auto mb-2" />
                  <div className="text-2xl font-serif font-medium text-[#1a1a1a] mb-1">99.9%</div>
                  <div className="text-xs text-[#6b6b6b]">Uptime-Garantie</div>
                </div>
                <div className="bg-[#fafafa] p-4 border border-[#e8e8e8] text-center rounded-lg">
                  <Lock className="w-6 h-6 text-[#c9a66b] mx-auto mb-2" />
                  <div className="text-2xl font-serif font-medium text-[#1a1a1a] mb-1">256</div>
                  <div className="text-xs text-[#6b6b6b]">Bit AES-Verschlüsselung</div>
                </div>
                <div className="bg-[#fafafa] p-4 border border-[#e8e8e8] text-center rounded-lg">
                  <Server className="w-6 h-6 text-[#c9a66b] mx-auto mb-2" />
                  <div className="text-2xl font-serif font-medium text-[#1a1a1a] mb-1">3</div>
                  <div className="text-xs text-[#6b6b6b]">Redundante Standorte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              Downloads
            </span>
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              Dokumente zum Download
            </h2>
            <p className="text-[#6b6b6b]">
              Alle Unterlagen für Ihre Compliance-Prüfung und IT-Sicherheit.
            </p>
          </div>

          <div className="space-y-4">
            {downloadItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#fafafa] border border-[#e8e8e8] hover:border-[#9a9a9a] transition-colors rounded-lg gap-4"
              >
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#1a1a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1a1a1a] font-medium block">{item.name}</span>
                    <span className="text-xs text-[#6b6b6b]">{item.desc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-8 md:ml-0">
                  <span className="text-sm text-[#9a9a9a]">{item.size}</span>
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-8 rounded-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            Vertrauen durch Transparenz
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            Haben Sie spezifische Sicherheitsanforderungen oder Compliance-Fragen?
            Unser Team berät Sie gerne in einem persönlichen Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors">
              Sicherheitsberatung anfragen
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base rounded-full">
              Technische Dokumentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
