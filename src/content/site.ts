import type { Facility, HeritageMoment, NavItem, Programme } from "@/types/content";

export const primaryNav: NavItem[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
  { label: "Heritage", href: "/heritage" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" },
];

export const programmes: Programme[] = [
  {
    slug: "student-life-mind-management",
    title: "Student Life & Mind Management",
    eyebrow: "Focus · Resilience · Relationships",
    summary:
      "A practical pathway for concentration, emotional steadiness, responsible digital habits, and confident student life.",
    audience: "Students",
    status: "details-soon",
    themes: ["Concentration", "Resilience", "Digital discipline"],
  },
  {
    slug: "leadership-professional-excellence",
    title: "Leadership & Professional Excellence",
    eyebrow: "Character · Communication · Service",
    summary:
      "Develop communication, teamwork, public speaking, work culture, responsibility, and service-led leadership.",
    audience: "Youth & young professionals",
    status: "details-soon",
    themes: ["Leadership", "Public speaking", "Work culture"],
  },
  {
    slug: "employability-career-readiness",
    title: "Employability & Career Readiness",
    eyebrow: "Language · Digital · Career",
    summary:
      "Build practical confidence through spoken English, computer skills, career guidance, and competitive-exam support.",
    audience: "Students & job seekers",
    status: "details-soon",
    themes: ["Spoken English", "Computers", "Career guidance"],
  },
];

export const facilities: Facility[] = [
  {
    index: "01",
    title: "Heritage Building",
    description: "The historic heart of the site and the starting point for the Vivekananda-in-Mysuru story.",
  },
  {
    index: "02",
    title: "Experience Centre",
    description: "An immersive interpretation layer connecting history, ideas, and the contemporary institution.",
  },
  {
    index: "03",
    title: "Meditation Hall",
    description: "A quiet setting for reflection, attention, and contemplative practice.",
  },
  {
    index: "04",
    title: "Amphitheatre",
    description: "A major public forum for talks, cultural programmes, gatherings, and youth events.",
  },
  {
    index: "05",
    title: "Library & Study Centre",
    description: "A focused environment for reading, study, preparation, and long-form learning.",
  },
  {
    index: "06",
    title: "Learning Spaces",
    description: "Classrooms and meeting spaces designed for structured programmes and collaborative learning.",
  },
];

export const heritageMoments: HeritageMoment[] = [
  {
    year: "1892",
    title: "Vivekananda in Mysuru",
    description:
      "Swami Vivekananda's Mysuru stay connected him with the city, its leadership, and a decisive phase of his journey.",
  },
  {
    year: "1893",
    title: "The message travels outward",
    description:
      "The Mysuru chapter sits close to the resolve and preparations that preceded his historic appearance in Chicago.",
  },
  {
    year: "2022",
    title: "A new institution takes form",
    description:
      "The modern Viveka Smaraka project begins its physical transformation into a cultural youth centre.",
  },
  {
    year: "2026",
    title: "A living memorial opens",
    description:
      "Inaugurated on 1 August 2026, Viveka Smaraka enters its next chapter as an active centre for youth and culture.",
  },
];
