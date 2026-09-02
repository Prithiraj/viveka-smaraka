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
    promise:
      "Build the inner habits that make learning, relationships, responsibility, and purposeful action easier to sustain.",
    audience: "Students",
    status: "details-soon",
    themes: ["Concentration", "Resilience", "Digital discipline"],
    outcomes: [
      "Strengthen attention and concentration habits.",
      "Respond to setbacks with greater steadiness and perspective.",
      "Build healthier interpersonal and digital habits.",
      "Connect personal discipline with study, service, and daily life.",
    ],
    approach: [
      "Short concept sessions grounded in practical situations.",
      "Guided reflection, exercises, and small-group discussion.",
      "Simple practices designed to continue beyond the programme.",
    ],
    availabilityNote:
      "Batch dates, duration, language, eligibility, and registration details will be published after the operating schedule is institutionally verified.",
  },
  {
    slug: "leadership-professional-excellence",
    title: "Leadership & Professional Excellence",
    eyebrow: "Character · Communication · Service",
    summary:
      "Develop communication, teamwork, public speaking, work culture, responsibility, and service-led leadership.",
    promise:
      "Translate confidence and character into the way young people communicate, collaborate, lead, and contribute.",
    audience: "Youth & young professionals",
    status: "details-soon",
    themes: ["Leadership", "Public speaking", "Work culture"],
    outcomes: [
      "Communicate ideas with greater structure and confidence.",
      "Practise collaboration, responsibility, and constructive leadership.",
      "Develop a service-oriented understanding of influence.",
      "Connect professional excellence with dependable work habits.",
    ],
    approach: [
      "Interactive communication and public-speaking practice.",
      "Scenario-based teamwork and leadership exercises.",
      "Reflection on responsibility, work culture, and service.",
    ],
    availabilityNote:
      "The curriculum model is ready for scheduling; verified batch dates, facilitators, duration, and registration details will be added when approved.",
  },
  {
    slug: "employability-career-readiness",
    title: "Employability & Career Readiness",
    eyebrow: "Language · Digital · Career",
    summary:
      "Build practical confidence through spoken English, computer skills, career guidance, and competitive-exam support.",
    promise:
      "Bring practical communication, digital confidence, study discipline, and career direction into one accessible pathway.",
    audience: "Students & job seekers",
    status: "details-soon",
    themes: ["Spoken English", "Computers", "Career guidance"],
    outcomes: [
      "Improve practical spoken communication and presentation confidence.",
      "Develop useful baseline digital and computer fluency.",
      "Structure career exploration and preparation more deliberately.",
      "Use the Study Centre and learning environment with clearer goals.",
    ],
    approach: [
      "Practice-led language and digital sessions.",
      "Career orientation and guided preparation frameworks.",
      "Connections to study resources and competitive-exam support.",
    ],
    availabilityNote:
      "Specific modules, schedules, eligibility, fees if any, and registration states will appear only after they are confirmed by the centre.",
  },
];

export const facilities: Facility[] = [
  {
    slug: "heritage-building",
    index: "01",
    role: "Origin",
    title: "Heritage Building",
    description: "The historic heart of the site and the starting point for the Vivekananda-in-Mysuru story.",
  },
  {
    slug: "experience-centre",
    index: "02",
    role: "Interpretation",
    title: "Experience Centre",
    description: "An immersive interpretation layer connecting history, ideas, and the contemporary institution.",
  },
  {
    slug: "meditation-hall",
    index: "03",
    role: "Stillness",
    title: "Meditation Hall",
    description: "A quiet setting for reflection, attention, and contemplative practice.",
  },
  {
    slug: "amphitheatre",
    index: "04",
    role: "Gathering",
    title: "Amphitheatre",
    description: "A major public forum for talks, cultural programmes, gatherings, and youth events.",
  },
  {
    slug: "library-study-centre",
    index: "05",
    role: "Study",
    title: "Library & Study Centre",
    description: "A focused environment for reading, study, preparation, and long-form learning.",
  },
  {
    slug: "learning-spaces",
    index: "06",
    role: "Practice",
    title: "Learning Spaces",
    description: "Classrooms and meeting spaces designed for structured programmes and collaborative learning.",
  },
];

export const heritageMoments: HeritageMoment[] = [
  {
    year: "1892",
    dateLabel: "The Mysuru chapter",
    place: "Mysuru",
    chapter: "Arrival",
    title: "Vivekananda in Mysuru",
    description:
      "Swami Vivekananda's Mysuru stay connected him with the city, its leadership, and a decisive phase of his journey.",
    detail:
      "The digital experience treats Mysuru not as a footnote, but as a place where conversations, support, and resolve gathered around a young monk whose message would soon travel much farther.",
    media: [
      {
        src: "https://vivekasmaraka.org/wp-content/uploads/2026/06/SV-standing-with-danda-482x1024.png",
        alt: "Historic archival portrait used by Viveka Smaraka for the 1892 journey chapter.",
        caption: "An archival portrait from the existing Viveka Smaraka history collection.",
        credit: "Viveka Smaraka archive",
        sourceUrl: "https://vivekasmaraka.org/history/",
        aspect: "portrait",
      },
    ],
  },
  {
    year: "1892",
    dateLabel: "A place of memory",
    place: "Niranjana Matha",
    chapter: "Place",
    title: "A historic setting remains",
    description:
      "Niranjana Matha became the physical anchor through which the memory of Vivekananda's Mysuru stay could be preserved and interpreted.",
    detail:
      "That relationship between a modest historic place and a much larger idea becomes the spatial heart of Viveka Smaraka today.",
  },
  {
    year: "1892",
    dateLabel: "Encounters in Mysuru",
    place: "Mysuru",
    chapter: "Conversations",
    title: "Ideas meet institutions",
    description:
      "Vivekananda's Mysuru chapter included important contact with the Mysore royal court and Dewan Seshadri Iyer.",
    detail:
      "The story is powerful because it connects contemplation with public life: ideas were tested through conversation, encouragement, responsibility, and the question of what should happen next.",
  },
  {
    year: "1893",
    dateLabel: "The message travels outward",
    place: "India → Chicago",
    chapter: "Movement",
    title: "A wider journey begins",
    description:
      "The Mysuru chapter sits close to the resolve and preparations that preceded Vivekananda's historic appearance in Chicago.",
    detail:
      "The heritage narrative therefore uses movement as its core visual metaphor: an idea gathers clarity in one place, then travels outward into the world.",
  },
  {
    year: "2012",
    dateLabel: "Conservation chapter",
    place: "Mysuru",
    chapter: "Preservation",
    title: "The heritage place is renewed",
    description:
      "Restoration and conservation work helped prepare the historic site for a larger public and educational future.",
    detail:
      "Preservation here is not presented as freezing a building in time. It creates the conditions for the place to carry meaning forward.",
    media: [
      {
        src: "https://vivekasmaraka.org/wp-content/uploads/2026/06/VS-Before-renovation-300x102.jpg",
        alt: "Historic Viveka Smaraka site before restoration.",
        caption: "Before restoration.",
        credit: "Viveka Smaraka archive",
        sourceUrl: "https://vivekasmaraka.org/history/",
        aspect: "panorama",
      },
      {
        src: "https://vivekasmaraka.org/wp-content/uploads/2026/06/VS-After-renovation-300x98.jpg",
        alt: "Historic Viveka Smaraka site after restoration.",
        caption: "After restoration.",
        credit: "Viveka Smaraka archive",
        sourceUrl: "https://vivekasmaraka.org/history/",
        aspect: "panorama",
      },
    ],
  },
  {
    year: "2022",
    dateLabel: "The contemporary centre",
    place: "Viveka Smaraka",
    chapter: "Building",
    title: "A new institution takes form",
    description:
      "The modern Viveka Smaraka project begins its physical transformation into a cultural youth centre.",
    detail:
      "New learning, gathering, contemplative, and interpretive spaces extend the heritage site into an institution designed for active use.",
  },
  {
    year: "2026",
    dateLabel: "1 August 2026",
    place: "Viveka Smaraka",
    chapter: "Beginning",
    title: "A living memorial opens",
    description:
      "Viveka Smaraka enters its next chapter as an active centre for youth, culture, learning, reflection, and service.",
    detail:
      "The inauguration is deliberately treated as a beginning rather than an ending: the meaning of the centre will now be shaped by the people, programmes, and public life it supports.",
    media: [
      {
        src: "https://vivekasmaraka.org/wp-content/uploads/2026/08/1-at-SVCYC-VivekaSmaraka-11-1024x952.jpg",
        alt: "Opening ceremony at Viveka Smaraka in August 2026.",
        caption: "Opening day, 1 August 2026.",
        credit: "Viveka Smaraka archive",
        sourceUrl:
          "https://vivekasmaraka.org/viveka-smaraka-inaugurated-by-pm-narendra-modi-in-presence-of-swami-gautamanandaji-1-aug-2026/",
        aspect: "square",
      },
    ],
  },
];

export const heritagePreviewMoments = [
  heritageMoments[0],
  heritageMoments[3],
  heritageMoments[5],
  heritageMoments[6],
];
