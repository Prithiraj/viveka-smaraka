import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { heritageMoments } from "@/content/site";

export const metadata: Metadata = { title: "Heritage", description: "The Vivekananda-in-Mysuru story and the path from 1892 to Viveka Smaraka today." };

export default function HeritagePage() {
  return (
    <main id="main-content" className="heritage-page">
      <section className="listing-hero shell">
        <SectionLabel>Heritage</SectionLabel>
        <h1>1892<br /><em>A journey through Mysuru.</em></h1>
        <p>This first digital layer establishes a concise historical spine. The next heritage phase will add reviewed archival media, named sources, places, people, and deeper reading.</p>
      </section>
      <section className="heritage-long shell">
        {heritageMoments.map((moment, index) => (
          <article className="heritage-long__item" key={moment.year}>
            <div className="heritage-long__year">{moment.year}</div>
            <div className="heritage-long__line" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div>
              <h2>{moment.title}</h2>
              <p>{moment.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
