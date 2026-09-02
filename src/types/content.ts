export type ProgrammeStatus = "registration-open" | "upcoming" | "ongoing" | "completed" | "details-soon";

export interface MediaAsset {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
  aspect?: "portrait" | "landscape" | "panorama" | "square";
}

export interface Programme {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  promise: string;
  audience: string;
  status: ProgrammeStatus;
  themes: string[];
  outcomes: string[];
  approach: string[];
  availabilityNote: string;
}

export interface Facility {
  slug: string;
  title: string;
  description: string;
  index: string;
  role: string;
}

export interface HeritageMoment {
  year: string;
  dateLabel?: string;
  place?: string;
  chapter?: string;
  title: string;
  description: string;
  detail?: string;
  media?: MediaAsset[];
}

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface EventSession {
  day: string;
  time: string;
  title: string;
  venue: string;
  detail?: string;
}

export interface EventRecord {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string[];
  status: EventStatus;
  startDate: string;
  endDate?: string;
  displayDate: string;
  venue: string;
  location: string;
  tags: string[];
  programme: EventSession[];
  media?: MediaAsset[];
  sourceUrl?: string;
  sourceLabel?: string;
}

export type VerificationState = "verified" | "pending";

export interface VisitorFact {
  label: string;
  value: string;
  detail: string;
  verification: VerificationState;
  href?: string;
}

export interface VisitorContact {
  label: string;
  address: string;
  phonePrimary: string;
  phoneSecondary: string;
  mobile: string;
  email: string;
  note: string;
}

export interface SearchRecord {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
