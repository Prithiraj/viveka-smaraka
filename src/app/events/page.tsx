import type { Metadata } from "next";
import { EventCard } from "@/components/ui/EventCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contentRepository } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming programmes and the growing public archive of Viveka Smaraka events in Mysuru.",
};

export default async function EventsPage() {
  const events = await contentRepository.getEvents();
  const upcoming = events.filter((event) => event.status === "upcoming" || event.status === "ongoing");
  const archive = events.filter((event) => event.status === "completed");

  return (
    <main id="main-content" className="events-page">
      <section className="listing-hero shell">
        <SectionLabel>Events</SectionLabel>
        <h1>A stage for ideas,<br /><em>culture, and youth.</em></h1>
        <p>The event system distinguishes verified live programming from the institutional archive. Nothing is promoted as upcoming until a date is confirmed by the centre.</p>
      </section>

      <section className="event-status shell" aria-labelledby="upcoming-events-title">
        <div className="event-status__head">
          <span>01</span>
          <div>
            <p>Current calendar</p>
            <h2 id="upcoming-events-title">Upcoming</h2>
          </div>
        </div>
        {upcoming.length ? (
          <div className="event-list">
            {upcoming.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        ) : (
          <div className="event-empty">
            <span>Calendar status</span>
            <strong>No future event has been published into this application yet.</strong>
            <p>When the institutional calendar is connected, confirmed talks, workshops, cultural programmes, and gatherings will appear here automatically through the content provider.</p>
          </div>
        )}
      </section>

      <section className="event-archive shell" aria-labelledby="event-archive-title">
        <div className="event-status__head">
          <span>02</span>
          <div>
            <p>Institutional memory</p>
            <h2 id="event-archive-title">Archive</h2>
          </div>
        </div>
        <div className="event-list">
          {archive.map((event) => <EventCard event={event} key={event.slug} />)}
        </div>
      </section>
    </main>
  );
}
