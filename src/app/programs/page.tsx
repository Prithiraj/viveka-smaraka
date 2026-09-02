import type { Metadata } from "next";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { programmes } from "@/content/site";

export const metadata: Metadata = { title: "Programs", description: "Youth development pathways at Viveka Smaraka." };

export default function ProgramsPage() {
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
