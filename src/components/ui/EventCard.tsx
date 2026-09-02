import Link from "next/link";
import type { EventRecord } from "@/types/content";
import { ArrowIcon } from "./ArrowIcon";
import { ArchiveMedia } from "./ArchiveMedia";

const eventStatusLabel = {
  upcoming: "Upcoming",
  ongoing: "Happening now",
  completed: "Archive",
} as const;

export function EventCard({ event }: { event: EventRecord }) {
  return (
    <article className="event-card">
      {event.media?.length ? <ArchiveMedia media={event.media.slice(0, 1)} className="event-card__media" /> : null}
      <div className="event-card__content">
        <div className="event-card__meta">
          <span>{eventStatusLabel[event.status]}</span>
          <span>{event.displayDate}</span>
        </div>
        <p className="event-card__eyebrow">{event.eyebrow}</p>
        <h2>{event.title}</h2>
        <p>{event.summary}</p>
        <div className="event-card__footer">
          <span>{event.location}</span>
          <Link href={`/events/${event.slug}`} aria-label={`Read ${event.title}`}>
            Explore <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
