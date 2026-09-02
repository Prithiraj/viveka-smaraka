import type { SearchRecord } from "@/types/content";
import { events } from "./events";
import { facilities, heritageMoments, programmes } from "./site";

const programmeRecords: SearchRecord[] = programmes.map((programme) => ({
  title: programme.title,
  description: programme.summary,
  href: `/programs/${programme.slug}`,
  category: "Programs",
  keywords: [programme.audience, programme.eyebrow, ...programme.themes],
}));

const facilityRecords: SearchRecord[] = facilities.map((facility) => ({
  title: facility.title,
  description: facility.description,
  href: "/visit#spaces",
  category: "Visit",
  keywords: [facility.role, "facility", "campus", "Viveka Smaraka"],
}));

const heritageRecords: SearchRecord[] = heritageMoments.map((moment) => ({
  title: `${moment.year} — ${moment.title}`,
  description: moment.description,
  href: "/heritage",
  category: "Heritage",
  keywords: [moment.place ?? "Mysuru", moment.chapter ?? "history", "Vivekananda", "Niranjana Matha"],
}));

const eventRecords: SearchRecord[] = events.map((event) => ({
  title: event.title,
  description: `${event.displayDate} · ${event.summary}`,
  href: `/events/${event.slug}`,
  category: "Events",
  keywords: [...event.tags, event.location, event.venue],
}));

export const searchRecords: SearchRecord[] = [
  {
    title: "Viveka Smaraka",
    description: "Swami Vivekananda Cultural Youth Centre in Mysuru — a living centre for youth, culture, learning, reflection, and service.",
    href: "/",
    category: "Explore",
    keywords: ["ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ", "ವಿವೇಕ ಸ್ಮಾರಕ", "Mysuru", "youth centre"],
  },
  ...programmeRecords,
  ...facilityRecords,
  ...heritageRecords,
  ...eventRecords,
  {
    title: "Plan your visit",
    description: "Verified location, facilities, contact information, and the publication status of timings and admissions.",
    href: "/visit",
    category: "Visit",
    keywords: ["directions", "hours", "timings", "address", "contact", "Mysuru"],
  },
  {
    title: "Support Viveka Smaraka",
    description: "Explore future support pathways for youth programmes, education, heritage, the library, and scholarships.",
    href: "/support",
    category: "Support",
    keywords: ["donate", "CSR", "partner", "scholarship", "support"],
  },
  {
    title: "About the institution",
    description: "Mission, institutional purpose, and the relationship with Sri Ramakrishna Ashrama, Mysuru.",
    href: "/about",
    category: "About",
    keywords: ["mission", "Ramakrishna Ashrama", "organisation", "governance"],
  },
];
