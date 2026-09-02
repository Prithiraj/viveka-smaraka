import type { Metadata } from "next";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contentRepository } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description: "Youth development pathways at Viveka Smaraka.",
};

export default async function ProgramsPage() {
  const programmes = await contentRepository.getProgrammes();

  return (
    <main id="main-content" className="listing-page">
      <section className="listing-hero shell">
        <SectionLabel>Programs</SectionLabel>
        <h1>Learn deeply.<br /><em>Live deliberately.</em></h1>
        <p>Programme architecture built around attention, character, communication, career readiness, culture, and service. Verified schedules will replace the current programme models as the operating calendar is connected.</p>
      </section>
      <section className="shell programme-grid programme-grid--listing">
        {programmes.map((programme) => <ProgrammeCard key={programme.slug} programme={programme} />)}
      </section>
    </main>
  );
}
