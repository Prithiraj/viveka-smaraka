import type { Metadata } from "next";
import { EditorialPage } from "@/components/ui/EditorialPage";

export const metadata: Metadata = { title: "Events", description: "Upcoming talks, workshops, cultural programmes, and gatherings at Viveka Smaraka." };

export default function EventsPage() {
  return <EditorialPage eyebrow="Events" title="A stage for ideas, culture, and youth." intro="The events experience is ready for a verified institutional calendar. It will distinguish upcoming, current, and archived events without leaving expired information in primary journeys." sections={[
    { title: "Upcoming", body: "Featured events will lead with date, time, language, venue, speaker or facilitator, capacity, and one clear registration state." },
    { title: "Calendar", body: "A calendar view is planned once event data is connected, with useful filtering rather than a decorative month grid." },
    { title: "Archive", body: "Past events become a permanent institutional record with photography, summaries, speakers, and related programmes where available." },
  ]} cta={{ label: "Plan a visit", href: "/visit" }} />;
}
