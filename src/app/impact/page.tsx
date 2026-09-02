import type { Metadata } from "next";
import { EditorialPage } from "@/components/ui/EditorialPage";

export const metadata: Metadata = { title: "Impact", description: "How Viveka Smaraka will communicate verified outcomes and stories." };

export default function ImpactPage() {
  return <EditorialPage eyebrow="Impact" title="Measure what moves people forward." intro="Impact should be evidence, not decoration. This foundation deliberately ships without invented counters while creating the structure for verified institutional metrics." sections={[
    { title: "Youth reached", body: "Track distinct participants, programme completion, repeat engagement, and relevant outcomes rather than only aggregate attendance." },
    { title: "Institutions engaged", body: "Schools, colleges, community organisations, and partners can be represented with dates, programmes, and geography once verified." },
    { title: "Stories with context", body: "Testimonials should connect an individual experience to a specific programme or intervention, with consent and editorial review." },
    { title: "Reports", body: "Annual reports and programme summaries can provide durable evidence for donors, CSR partners, educators, and the public." },
  ]} cta={{ label: "Support the mission", href: "/support" }} />;
}
