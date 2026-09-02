import type { Metadata } from "next";
import { EditorialPage } from "@/components/ui/EditorialPage";

export const metadata: Metadata = { title: "About", description: "Mission and institutional purpose of Viveka Smaraka." };

export default function AboutPage() {
  return <EditorialPage eyebrow="About" title="A historic place built for contemporary purpose." intro="Viveka Smaraka is framed here as a living cultural youth institution: a place where heritage becomes a platform for character, learning, skill, contemplation, and service." sections={[
    { title: "Mission", body: "Translate enduring ideas about human development into practical experiences for students, youth, visitors, educators, and the wider public." },
    { title: "Living memorial", body: "The institution should be understood through what happens inside it today, not only through the story of how the building came to exist." },
    { title: "Governance & transparency", body: "The production information architecture should publish clear organisational, legal, leadership, audit, donor, privacy, and contact information in one coherent place." },
  ]} cta={{ label: "Explore programs", href: "/programs" }} />;
}
