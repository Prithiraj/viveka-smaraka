import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveMedia } from "@/components/ui/ArchiveMedia";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { events } from "@/content/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return { title: "Event" };
  return { title: event.title, description: event.summary };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <main id="main-content" className="event-detail">
      <section className="event-detail__hero shell">
        <div className="event-detail__title">
          <SectionLabel>{event.eyebrow}</SectionLabel>
          <p>{event.displayDate} · {event.location}</p>
          <h1>{event.title}</h1>
          <div className="event-detail__tags">
            {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        {event.media?.length ? <ArchiveMedia media={event.media} className="event-detail__media" /> : null}
      </section>

      <section className="event-detail__story shell">
        <aside>
          <span>Status</span>
          <strong>{event.status === "completed" ? "Archive" : event.status}</strong>
          <span>Venue</span>
          <strong>{event.venue}</strong>
        </aside>
        <div>
          {event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="event-programme shell" aria-labelledby="event-programme-title">
        <div className="event-programme__heading">
          <SectionLabel>Programme record</SectionLabel>
          <h2 id="event-programme-title">Two days,<br />one opening chapter.</h2>
        </div>
        <div className="event-programme__list">
          {event.programme.map((session, index) => (
            <article key={`${session.day}-${session.time}-${session.title}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{session.day}</small>
                <strong>{session.time}</strong>
              </div>
              <div>
                <h3>{session.title}</h3>
                <p>{session.venue}</p>
                {session.detail && <small>{session.detail}</small>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="event-detail__source">
        <div className="shell">
          <span>Source record</span>
          <p>This archive entry is based on the inauguration programme and report published on the existing Viveka Smaraka website.</p>
          {event.sourceUrl ? (
            <a href={event.sourceUrl} target="_blank" rel="noreferrer">
              {event.sourceLabel ?? "View source"} <ArrowIcon />
            </a>
          ) : null}
          <Link href="/events">Return to events</Link>
        </div>
      </section>
    </main>
  );
}
