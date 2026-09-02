import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./phase2.css";
import "./phase3.css";
import "./phase4.css";
import "./phase5.css";
import "./phase6.css";
import "./phase7.css";
import "./phase8.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { contentRepository } from "@/lib/content";
import { organizationJsonLd } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Viveka Smaraka — Mysuru",
    template: "%s · Viveka Smaraka",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Viveka Smaraka — Mysuru",
    description: siteConfig.description,
  },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [searchRecords, visitorContact] = await Promise.all([
    contentRepository.getSearchRecords(),
    contentRepository.getVisitorContact(),
  ]);

  return (
    <html lang="en">
      <body>
        <JsonLd id="viveka-smaraka-organization" data={organizationJsonLd(visitorContact)} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader searchRecords={searchRecords} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
