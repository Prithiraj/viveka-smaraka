import type { EventRecord, Programme, VisitorContact } from "@/types/content";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export type JsonLdObject = Record<string, unknown>;

export function organizationJsonLd(contact?: VisitorContact): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    ...(contact
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "visitor enquiries",
            telephone: contact.phonePrimary,
            email: contact.email,
          },
        }
      : {}),
  };
}

export function placeJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${siteConfig.url}/visit#place`,
    name: siteConfig.fullName,
    url: absoluteUrl("/visit"),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Narayana Shastri Road",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
  };
}

export function programmeJsonLd(programme: Programme): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl(`/programs/${programme.slug}#course`),
    name: programme.title,
    description: programme.summary,
    url: absoluteUrl(`/programs/${programme.slug}`),
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    audience: {
      "@type": "Audience",
      audienceType: programme.audience,
    },
    teaches: programme.outcomes,
  };
}

export function eventJsonLd(event: EventRecord): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": absoluteUrl(`/events/${event.slug}#event`),
    name: event.title,
    description: event.summary,
    startDate: event.startDate,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventStatus:
      event.status === "completed"
        ? "https://schema.org/EventCompleted"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.locality,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },
    organizer: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: absoluteUrl(`/events/${event.slug}`),
    ...(event.media?.[0] ? { image: absoluteUrl(event.media[0].src) } : {}),
  };
}
