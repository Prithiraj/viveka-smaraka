import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./phase2.css";
import "./phase3.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Viveka Smaraka — Mysuru",
    template: "%s · Viveka Smaraka",
  },
  description:
    "A living cultural youth centre in Mysuru connecting the historic legacy of Swami Vivekananda with contemporary learning, character, culture, and service.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
