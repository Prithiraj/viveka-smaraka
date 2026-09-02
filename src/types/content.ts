export type ProgrammeStatus = "registration-open" | "upcoming" | "ongoing" | "completed" | "details-soon";

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
}

export interface NavItem {
  label: string;
  href: string;
}
