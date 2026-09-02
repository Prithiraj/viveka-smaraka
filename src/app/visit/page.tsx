import type { Metadata } from "next";
import { EditorialPage } from "@/components/ui/EditorialPage";

export const metadata: Metadata = { title: "Visit", description: "Plan a visit to Viveka Smaraka in Mysuru." };

export default function VisitPage() {
  return <EditorialPage eyebrow="Visit" title="Make the journey part of the experience." intro="This page intentionally avoids inventing opening hours, admission details, or operating policies. Those details should be published only after the centre verifies them." sections={[
    { title: "Before you arrive", body: "Verified opening days, timings, Experience Centre sessions, admission information, expected visit duration, and current notices will live here." },
    { title: "Getting here", body: "The production release should include precise directions, public transport guidance, parking information, and an accessible map location." },
    { title: "Everyone should be able to visit", body: "Accessibility information should cover routes, lifts or ramps where relevant, seating, washrooms, sensory considerations, and contact support." },
    { title: "Groups & schools", body: "A dedicated group-visit flow can collect preferred dates, group size, institution details, language requirements, and programme interests." },
  ]} cta={{ label: "Explore the heritage story", href: "/heritage" }} />;
}
