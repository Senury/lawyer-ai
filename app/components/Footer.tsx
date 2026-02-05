import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: [
    { href: "/produkt", label: "Funktionen" },
    { href: "/preis", label: "Preise" },
    { href: "/ablauf", label: "Ablauf" },
  ],
  company: [
    { href: "/sicherheit", label: "Sicherheit" },
    { href: "/faq", label: "FAQ" },
    { href: "#", label: "Kontakt" },
  ],
  legal: [
    { href: "#", label: "Impressum" },
    { href: "#", label: "Datenschutz" },
    { href: "#", label: "AGB" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#faf8f7] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-medium tracking-tight text-[#1a1a1a]">Senury</span>
            </Link>
            <p className="mt-4 text-sm text-[#6b6b6b] leading-relaxed">
              KI-gestützte Software für Notare. Effizient, sicher und unterstützend.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b]">Made in Germany</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              Produkt
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#e8e8e8]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9a9a9a]">
            © {new Date().getFullYear()} Senury. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-[#9a9a9a]">
            Mit Sorgfalt für den deutschen Notarstand entwickelt.
          </p>
        </div>
      </div>
    </footer>
  );
}
