import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

interface EditorialSection {
  title: string;
  body: string;
}

export function EditorialPage({
  eyebrow,
  title,
  intro,
  sections,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: EditorialSection[];
  cta?: { label: string; href: string };
}) {
  return (
    <main id="main-content" className="editorial-page">
      <section className="editorial-hero shell">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="editorial-sections shell">
        {sections.map((section, index) => (
          <article key={section.title} className="editorial-section">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </section>
      {cta ? (
        <section className="editorial-cta shell">
          <Link className="button button--warm" href={cta.href}>{cta.label}</Link>
        </section>
      ) : null}
    </main>
  );
}
