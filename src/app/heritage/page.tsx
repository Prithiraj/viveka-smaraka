import type { Metadata } from "next";
import { HeritageJourney } from "@/components/experience/HeritageJourney";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contentRepository } from "@/lib/content";

export const metadata: Metadata = {
  title: "Heritage",
  description: "An immersive journey through Vivekananda's Mysuru chapter and the path from 1892 to Viveka Smaraka today.",
};

export default async function HeritagePage() {
  const moments = await contentRepository.getHeritageMoments();

  return (
    <main id="main-content" className="heritage-page heritage-page--immersive">
      <section className="listing-hero shell heritage-intro">
        <SectionLabel>Heritage</SectionLabel>
        <h1>1892<br /><em>An idea gathers movement.</em></h1>
        <p>
          Follow a single thread from Vivekananda&apos;s Mysuru chapter through preservation, institution-building,
          and the opening of Viveka Smaraka as a living centre. Selected archival media already appears where provenance
          is documented; additional material should enter only after rights and historical captions are reviewed.
        </p>
      </section>
      <HeritageJourney moments={moments} />
      <section className="heritage-coda shell">
        <span>1892 → 2026 → Forward</span>
        <h2>The story now moves through the people who use this place.</h2>
        <p>
          The content-provider boundary allows future reviewed photographs, documents, people, and places to enter these chapters
          without making the visual experience the only way to access the history.
        </p>
      </section>
    </main>
  );
}
