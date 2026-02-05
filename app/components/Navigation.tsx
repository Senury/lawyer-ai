"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/produkt", label: "Produkt" },
  { href: "/preis", label: "Preis" },
  { href: "/sicherheit", label: "Sicherheit" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/faq", label: "FAQ" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#e8e8e8]/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium tracking-tight text-[#1a1a1a]">
              Senury
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-normal transition-all duration-200 rounded-full",
                    isActive
                      ? "text-[#1a1a1a] bg-[#f5f5f5]"
                      : "text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-full px-6 transition-all duration-200"
            >
              Demo anfordern
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#1a1a1a]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-l border-[#e8e8e8]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-normal transition-colors px-4 py-2 rounded-full",
                        isActive
                          ? "text-[#1a1a1a] bg-[#f5f5f5]"
                          : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <hr className="border-[#e8e8e8]" />
                <Button className="w-full bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-full">
                  Demo anfordern
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
