export type ProgrammeStatus = "registration-open" | "upcoming" | "ongoing" | "details-soon";

export interface Programme {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audience: string;
  status: ProgrammeStatus;
  themes: string[];
}

export interface Facility {
  title: string;
  description: string;
  index: string;
}

export interface HeritageMoment {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
