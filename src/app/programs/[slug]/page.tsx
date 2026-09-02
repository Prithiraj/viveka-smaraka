import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InterestPanel } from "@/components/forms/InterestPanel";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contentRepository } from "@/lib/content";
import { programmeJsonLd } from "@/lib/seo/schema";
import { statusLabel } from "@/lib/status";

export async function generateStaticParams() {
  const programmes = await contentRepository.getProgrammes();
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = await contentRepository.getProgrammeBySlug(slug);
  if (!programme) return { title: "Programme" };
  return {
    title: programme.title,
    description: programme.summary,
    alternates: { canonical: `/programs/${programme.slug}` },
  };
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = await contentRepository.getProgrammeBySlug(slug);
  if (!programme) notFound();

  return (
    <main id="main-content" className="programme-detail">
      <JsonLd id={`course-${programme.slug}`} data={programmeJsonLd(programme)} />
      <section className="programme-detail__hero shell">
        <div>
          <SectionLabel>Programme pathway</SectionLabel>
          <p className="programme-detail__eyebrow">{programme.eyebrow}</p>
          <h1>{programme.title}</h1>
        </div>
        <div className="programme-detail__summary">
          <span className="programme-detail__status">{statusLabel[programme.status]}</span>
          <p>{programme.promise}</p>
          <div className="programme-detail__chips">
            {programme.themes.map((theme) => <span key={theme}>{theme}</span>)}
          </div>
        </div>
      </section>

      <section className="programme-detail__body shell">
        <div className="programme-detail__index">
          <span>Audience</span>
          <strong>{programme.audience}</strong>
          <span>Availability</span>
          <strong>{statusLabel[programme.status]}</strong>
        </div>

        <div className="programme-detail__content">
          <section>
            <span className="programme-detail__number">01</span>
            <h2>What this pathway develops</h2>
            <p>{programme.summary}</p>
            <ul className="programme-outcomes">
              {programme.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
          </section>

          <section>
            <span className="programme-detail__number">02</span>
            <h2>How learning is approached</h2>
            <div className="programme-approach">
              {programme.approach.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="programme-detail__availability">
            <span className="programme-detail__number">03</span>
            <h2>Operating details</h2>
            <p>{programme.availabilityNote}</p>
            <p className="programme-detail__guardrail">
              This page intentionally does not display placeholder dates, fees, seat counts, or timings as if they were live information.
            </p>
          </section>
        </div>
      </section>

      <InterestPanel
        kind="programme"
        contextSlug={programme.slug}
        contextTitle={programme.title}
        eyebrow="Programme interest"
        title="Be ready when the verified batch details arrive."
      />

      <section className="programme-detail__next">
        <div className="shell">
          <span>Continue exploring</span>
          <h2>Find the pathway that meets you where you are.</h2>
          <div>
            <Link className="button button--warm" href="/programs">All programs <ArrowIcon /></Link>
            <Link className="button button--ghost" href="/visit">Plan your visit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
