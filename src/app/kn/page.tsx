import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Kannada edition status",
  description: "Editorial status of the reviewed Kannada edition of Viveka Smaraka's digital experience.",
  robots: { index: false, follow: true },
};

export default function KannadaEditionPage() {
  return (
    <main id="main-content" className="locale-status-page">
      <section className="shell locale-status-hero">
        <SectionLabel>Language edition</SectionLabel>
        <p className="locale-status-hero__state">Editorial review in progress</p>
        <h1 lang="kn">ಕನ್ನಡ ಆವೃತ್ತಿ</h1>
        <p className="locale-status-hero__lead">
          Kannada is being prepared as a reviewed institutional edition, not an automatic translation. Historical terminology, programme language, visitor information, names, captions, and calls to action should all be approved before the localized routes are made public.
        </p>
      </section>

      <section className="shell locale-status-grid">
        <article>
          <span>01</span>
          <h2>Route foundation</h2>
          <p>This page establishes a stable Kannada entry point while the full localized route tree is prepared.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Editorial governance</h2>
          <p>Approved translations will be versioned alongside the source content so English changes cannot silently invalidate Kannada copy.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Launch condition</h2>
          <p>The navigation will switch from “in preparation” to a live Kannada edition only when the core visitor, programme, event, heritage, and support journeys are reviewed.</p>
        </article>
      </section>

      <section className="locale-status-next">
        <div className="shell">
          <span>Current public edition</span>
          <h2>Continue in English for complete content.</h2>
          <Link className="button button--warm" href="/">English edition</Link>
        </div>
      </section>
    </main>
  );
}
