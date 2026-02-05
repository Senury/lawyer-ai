import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Search, FolderOpen, FileSpreadsheet, Mail, AlertTriangle, Clock, Shield, Zap, Lock, Sparkles, MessageSquare, GitCompare, BookOpen, Scale, Star, Gift } from "lucide-react";

// Enhanced UI Mockup Components
function WorkspaceMockup() {
  return (
    <div className="bg-white shadow-elevated border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-[#9a9a9a]">Senury Workspace</span>
        </div>
      </div>
      <div className="flex h-64">
        <div className="w-14 bg-[#fafafa] border-r border-[#e8e8e8] flex flex-col items-center py-4 gap-4">
          <FolderOpen className="w-5 h-5 text-[#9a9a9a]" />
          <FileText className="w-5 h-5 text-[#1a1a1a]" />
          <Search className="w-5 h-5 text-[#9a9a9a]" />
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[#1a1a1a]">Kaufvertrag_Entwurf_v2</span>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-[#c9a66b]/10 text-[#c9a66b] text-[10px] rounded-full font-medium">Aktuell</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-[#f5f5f5] rounded w-full"></div>
            <div className="h-3 bg-[#f5f5f5] rounded w-11/12"></div>
            <div className="h-3 bg-[#f5f5f5] rounded w-4/5"></div>
            <div className="h-3 bg-[#e5e5e5] rounded w-full"></div>
            <div className="h-3 bg-[#f5f5f5] rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VorgangListMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center justify-between">
        <span className="text-xs font-medium text-[#1a1a1a]">Vorgänge</span>
        <span className="text-[10px] text-[#9a9a9a]">12 aktive</span>
      </div>
      <div className="p-3 space-y-2">
        {[
          { name: "KV-2024-084", status: "Entwurf", color: "bg-[#c9a66b]" },
          { name: "KV-2024-083", status: "Prüfung", color: "bg-[#6b6b6b]" },
          { name: "KV-2024-082", status: "Final", color: "bg-[#1a1a1a]" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-[#fafafa] rounded-lg">
            <span className="text-xs text-[#1a1a1a] font-medium">{item.name}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full text-white ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitViewMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3">
        <span className="text-xs font-medium text-[#1a1a1a]">Editor</span>
      </div>
      <div className="flex h-56">
        <div className="w-1/3 bg-[#fafafa] border-r border-[#e8e8e8] p-3">
          <div className="text-[10px] text-[#9a9a9a] mb-2">Daten</div>
          <div className="space-y-2">
            <div className="h-6 bg-white border border-[#e8e8e8] rounded flex items-center px-2">
              <span className="text-[9px] text-[#6b6b6b]">Kaufpreis: 450.000 €</span>
            </div>
            <div className="h-6 bg-white border border-[#e8e8e8] rounded flex items-center px-2">
              <span className="text-[9px] text-[#6b6b6b]">Grundstück: 850m²</span>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-3">
          <div className="text-[10px] text-[#9a9a9a] mb-2">Vorschau</div>
          <div className="space-y-1.5">
            <div className="h-2 bg-[#f5f5f5] rounded w-full"></div>
            <div className="h-2 bg-[#f5f5f5] rounded w-5/6"></div>
            <div className="h-2 bg-[#f5f5f5] rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIChatMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">KI-Assistent</span>
      </div>
      <div className="p-3 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
            <span className="text-[8px] text-white">U</span>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg p-2 max-w-[80%]">
            <span className="text-[10px] text-[#1a1a1a]">Wie lautet die Standardklausel für Auflassung?</span>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-[#c9a66b]/10 rounded-lg p-2 max-w-[80%]">
            <span className="text-[10px] text-[#1a1a1a]">Die Auflassung erfolgt unter der aufschiebenden Bedingung...</span>
          </div>
          <div className="w-6 h-6 bg-[#c9a66b]/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-[#c9a66b]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VersionCompareMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center justify-between">
        <span className="text-xs font-medium text-[#1a1a1a]">Versionsvergleich</span>
        <GitCompare className="w-4 h-4 text-[#9a9a9a]" />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-100">
          <span className="text-[10px] text-red-600 line-through">450.000 €</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-100">
          <span className="text-[10px] text-green-600">475.000 €</span>
          <span className="text-[9px] text-[#9a9a9a]">— Kaufpreis angepasst</span>
        </div>
      </div>
    </div>
  );
}

function FormMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3">
        <span className="text-xs font-medium text-[#1a1a1a]">Datenerfassung</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Kaufpreis</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">€ 450.000,00</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Grundstücksgröße</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">850 m²</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-[#c9a66b]/10 rounded border border-[#c9a66b]/20">
          <Check className="w-4 h-4 text-[#c9a66b]" />
          <span className="text-[10px] text-[#1a1a1a]">Alle Pflichtfelder ausgefüllt</span>
        </div>
      </div>
    </div>
  );
}

function FeatureDetailCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="group bg-white p-6 border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-soft transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center bg-[#fafafa] border border-[#e8e8e8] rounded-lg mb-4 group-hover:bg-[#f5f5f5] transition-colors">
        <Icon className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ProduktPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              Die Komplettlösung für Ihr Notariat
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Effizienz trifft auf Kontrolle
            </h1>
            <p className="text-lg text-[#6b6b6b] mb-8">
              Senury vereint alle Werkzeuge, die Sie für effiziente Notariatsarbeit brauchen:
              Von Kaufverträgen über Recherche bis zum exportierten Entwurf.
              Alles an einem Ort, alles §203 StGB-konform.
            </p>
            <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-14 px-8 text-base rounded-full transition-colors">
              Demo anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <WorkspaceMockup />
          </div>
          <p className="text-center text-sm text-[#9a9a9a] mt-6">
            Der Senury Workspace: Alle Funktionen übersichtlich an einem Ort
          </p>
        </div>
      </section>

      {/* Feature 1: Vorgangsverwaltung - Text Left, Mockup Right */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Vorgangsverwaltung</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Behalten Sie den Überblick
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                Verwalten Sie alle laufenden Kaufverträge und Akten an einem Ort. Status-Tracking,
                Fristenüberwachung und intelligente Filter helfen Ihnen, nichts zu verpassen.
              </p>
              <ul className="space-y-3">
                {[
                  "Intuitive Listenansicht aller Vorgänge",
                  "Status-Tracking von Entwurf bis Finalisierung",
                  "Automatische Fristenüberwachung",
                  "Intelligente Filter und Suche"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] shadow-soft rounded-xl">
              <VorgangListMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: KI-Drafting - Mockup Left, Text Right */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#faf8f7] p-8 border border-[#e8e8e8] rounded-xl">
              <div className="space-y-4">
                <SplitViewMockup />
                <div className="grid grid-cols-2 gap-4">
                  <AIChatMockup />
                  <VersionCompareMockup />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">KI-gestütztes Drafting</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Entwürfe in Minuten, nicht Stunden
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                Die KI erstellt den ersten Entwurf basierend auf Ihren Vorlagen und den erfassten Daten.
                Sie behalten die volle Kontrolle und können alle Änderungen nachvollziehen.
              </p>
              <ul className="space-y-3">
                {[
                  "Template-basierte Generierung",
                  "Kontextbewusste Klausel-Vorschläge",
                  "Versionsvergleich mit visueller Diff-Ansicht",
                  "Nachvollziehbare Änderungsverfolgung"
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

      {/* Feature 3: Recherche - Text Left, Mockup Right */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">KI-Recherche</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Chat-basierte Rechtsrecherche
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                Stellen Sie Fragen zu Klauseln und Vorschriften. Erhalten Sie präzise, fundierte Antworten
                aus erstklassigen juristischen Datenquellen – mit Quellenangaben direkt in Ihrem Workflow.
              </p>
              <ul className="space-y-3">
                {[
                  "Chat-Interface für natürliche Fragen",
                  "Fundierte Antworten aus juristischen Datenquellen",
                  "Quellenangaben zu Gesetzen und Vorschriften",
                  "Kontextbewusst: Integration in den Editor"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] shadow-soft rounded-xl">
              <AIChatMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Intake - Mockup Left, Text Right */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#faf8f7] p-8 border border-[#e8e8e8] rounded-xl">
              <FormMockup />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">Datenerfassung</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Strukturiert von Anfang an
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                Keine verlorenen Informationen mehr. Senury führt Sie systematisch durch die Datenerfassung
                und prüft automatisch auf Vollständigkeit.
              </p>
              <ul className="space-y-3">
                {[
                  "Strukturierte Formulare mit Pflichtfeldprüfung",
                  "Automatische Plausibilitätsprüfungen",
                  "Sicherer Dokumenten-Upload",
                  "Smarte Formularvervollständigung"
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

      {/* Feature Detail Grid */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Details</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Alles, was Sie brauchen
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Eine komplette Übersicht aller Funktionen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]">
            <FeatureDetailCard
              icon={FolderOpen}
              title="Vorgangsverwaltung"
              description="Behalten Sie den Überblick über alle laufenden Kaufverträge mit Status-Tracking und Fristenüberwachung."
            />
            <FeatureDetailCard
              icon={FileText}
              title="KI-Drafting"
              description="Erstellen Sie erste Entwürfe in Minuten statt Stunden, basierend auf Ihren Vorlagen."
            />
            <FeatureDetailCard
              icon={BookOpen}
              title="Klauselbibliothek"
              description="Verwalten Sie Ihre bewährten Klauseln zentral und erhalten Sie kontextbewusste Vorschläge."
            />
            <FeatureDetailCard
              icon={Search}
              title="Integrierte Recherche"
              description="Stellen Sie Fragen zu Klauseln und Vorschriften mit kontextuellen Antworten."
            />
            <FeatureDetailCard
              icon={Shield}
              title="Compliance & Sicherheit"
              description="§203 StGB-konform, DSGVO-konform, mit lückenloser Dokumentation."
            />
            <FeatureDetailCard
              icon={Zap}
              title="Integrationen"
              description="Word- und Outlook-Add-ins für Ihren gewohnten Workflow."
            />
            <FeatureDetailCard
              icon={GitCompare}
              title="Kontrolle"
              description="Perspektivisch: Minutenschnelle Analyse großer Dokumentenmengen. (In Entwicklung)"
            />
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-24 lg:py-32 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Urkunden</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Kaufverträge und mehr
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Kaufverträge bleiben unser Hauptfokus – aber Senury unterstützt auch bei weiteren urkundlichen Beurkundungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Kaufverträge",
                status: "Vollständig",
                description: "Grundstücke, Wohnungseigentum, bebaute/unbebaute Grundstücke"
              },
              {
                icon: Gift,
                title: "Schenkungen",
                status: "Verfügbar",
                description: "Schenkungsverträge mit Vorlagen und Klauseln"
              },
              {
                icon: Scale,
                title: "Übertragungen",
                status: "Verfügbar",
                description: "Grundstücksübertragungen und Erbbaurechte"
              },
              {
                icon: Star,
                title: "Weitere",
                status: "In Planung",
                description: "Erbfolge-, Teilungsverträge, Gesellschaftsverträge"
              }
            ].map((doc, i) => (
              <Card key={i} className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-4">
                    <doc.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-lg font-medium text-[#1a1a1a]">{doc.title}</h3>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    doc.status === "Vollständig"
                      ? "bg-[#c9a66b]/10 text-[#c9a66b]"
                      : doc.status === "Verfügbar"
                      ? "bg-[#6b6b6b]/10 text-[#6b6b6b]"
                      : "bg-[#e5e5e5] text-[#9a9a9a]"
                  }`}>
                    {doc.status}
                  </span>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed mt-3">{doc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Sicherheit</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Sicherheit auf Notariats-Niveau
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Entwickelt für den §203 StGB-Kontext. Ihre Mandantendaten verdienen höchsten Schutz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "End-to-End Verschlüsselung",
                description: "Alle Daten werden mit AES-256 verschlüsselt – sowohl im Transit (TLS 1.3) als auch im Ruhezustand."
              },
              {
                icon: Shield,
                title: "§203 StGB-konform",
                description: "Speziell für den Berufsgeheimnis-Kontext entwickelt. Vertraulichkeitsvereinbarungen, geschultes Personal."
              },
              {
                icon: Clock,
                title: "Deutsche Server",
                description: "ISO 27001-zertifizierte Rechenzentren in Deutschland. Keine Datenweitergabe an Dritte."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-[#faf8f7] border-[#e8e8e8] rounded-none">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                    <feature.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">{feature.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">Integrationen</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Nahtlose Integration in Ihre Arbeitsumgebung
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Senury fügt sich in Ihren bestehenden Workflow ein – ohne disruptives Umlernen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-[#e8e8e8] rounded-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                  <FileText className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">Word Add-In</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  Nutzen Sie Senury direkt in Microsoft Word. Importieren und exportieren Sie Dokumente nahtlos.
                  Arbeiten Sie in der gewohnten Umgebung – mit Unterstützung von Senury im Hintergrund.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e8e8e8] rounded-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                  <Mail className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">Outlook Add-In</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  Erstellen Sie Vorgänge direkt aus E-Mails. Automatische Übernahme von Absenderdaten und Anhängen.
                  Nie wieder Informationen manuell übertragen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#faf8f7] border border-[#e8e8e8] p-6 flex gap-4 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-[#6b6b6b] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-[#1a1a1a] mb-2">Wichtiger Hinweis</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Senury ist ein unterstützendes Werkzeug für Notare und deren Mitarbeitende. Die Software ersetzt nicht die sorgfältige Prüfung durch qualifizierte Rechtsanwender. Alle KI-generierten Inhalte müssen vor Verwendung auf ihre Richtigkeit und Angemessenheit überprüft werden. Die inhaltliche Verantwortung liegt stets beim Notar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            Bereit für effizientere Entwürfe?
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie eine persönliche Demo und erleben Sie Senury in Aktion.
            Mit echten Beispielen aus Ihrem Notariat.
          </p>
          <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors">
            Kostenlose Demo vereinbaren
          </Button>
          <p className="text-xs text-[#6b6b6b] mt-6">
            Keine Verpflichtung · Persönliche Beratung · 30-tägige Testphase
          </p>
        </div>
      </section>
    </div>
  );
}
