import type { Metadata } from "next";
import { HeritageJourney } from "@/components/experience/HeritageJourney";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Heritage",
  description: "An immersive journey through Vivekananda's Mysuru chapter and the path from 1892 to Viveka Smaraka today.",
};

export default function HeritagePage() {
  return (
    <main id="main-content" className="heritage-page heritage-page--immersive">
      <section className="listing-hero shell heritage-intro">
        <SectionLabel>Heritage</SectionLabel>
        <h1>1892<br /><em>An idea gathers movement.</em></h1>
        <p>
          Follow a single thread from Vivekananda&apos;s Mysuru chapter through preservation, institution-building,
          and the opening of Viveka Smaraka as a living centre. Archival media will be layered into this structure
          only after image rights and historical captions are reviewed.
        </p>
      </section>
      <HeritageJourney />
      <section className="heritage-coda shell">
        <span>1892 → 2026 → Forward</span>
        <h2>The story now moves through the people who use this place.</h2>
        <p>
          The next heritage layer will connect reviewed photographs, documents, people, and places to these chapters
          without making the visual experience the only way to access the history.
        </p>
      </section>
    </main>
  );
}
