import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Persönliche Produktvorführung",
  description:
    "Vereinbaren Sie eine persönliche Demo von Senury. Lassen Sie sich unsere KI-gestützte Notariatssoftware in einem 30-minütigen Videoanruf vorstellen.",
  keywords: [
    "Senury Demo",
    "Notariatssoftware Demo",
    "KI Notar Demo",
    "Produktvorführung",
    "Software Test",
  ],
  alternates: {
    canonical: "/demo/",
  },
  openGraph: {
    title: "Senury Demo | Persönliche Produktvorführung",
    description:
      "Vereinbaren Sie eine persönliche Demo. Lassen Sie sich Senury in einem 30-minütigen Videoanruf vorstellen.",
    url: "https://senury.com/demo/",
    images: ["/favicon.png"],
  },
};

import DemoPageClient from "./page.client";
import DemoComingSoon from "./page-coming-soon";

export default function DemoPage() {
  const isEnabled = process.env.ENABLE_DEMO_REQUEST === "true";

  if (!isEnabled) {
    return <DemoComingSoon />;
  }

  return <DemoPageClient />;
}
