# Viveka Smaraka — Digital Experience Implementation Plan

## 1. Product vision

Build Viveka Smaraka as a **living digital institution**, not a brochure site. The application should connect the historic significance of Swami Vivekananda's Mysuru journey with the activities of a contemporary youth centre.

The experience direction is **Sacred Futurism**: heritage, light, space, motion, contemplation, and modern utility. The application should feel cinematic and memorable without becoming a technology demo.

The central narrative is:

> **1892 was the spark. 2026 is the beginning.**

The product must serve two audiences simultaneously:

- **Explorers** — visitors learning about Viveka Smaraka, Vivekananda, Mysuru, the architecture, and the institution's story.
- **Doers** — people who want to visit, join a programme, attend an event, donate, volunteer, or contact the institution.

The cinematic layer should attract attention. The application layer should make action effortless.

---

## 2. Experience principles

### 2.1 Purpose before spectacle
Use Three.js, scroll choreography, and spatial transitions only where they deepen understanding or emotional resonance. Functional areas such as registration, visitor information, and donation remain direct and fast.

### 2.2 Stillness is part of motion
Not every section animates. Important ideas need visual silence. Motion is used for reveal, continuity, orientation, and meaning.

### 2.3 Heritage without nostalgia
The experience should be contemporary without appearing cyberpunk. Avoid persistent neon, excessive glassmorphism, random floating objects, cursor gimmicks, and decorative 3D that has no narrative purpose.

### 2.4 Mobile is its own composition
Desktop can use richer spatial storytelling. Mobile receives lighter 3D, shorter transitions, fewer particles, and strong editorial composition. The experience remains complete without WebGL.

### 2.5 Accessibility is architectural
Reduced-motion, keyboard navigation, semantic HTML, accessible contrast, focus states, meaningful alt text, and screen-reader friendly content are requirements from the first implementation.

---

## 3. Information architecture

Primary navigation:

1. **Experience** — introduction to the institution and its spaces.
2. **Programs** — current youth-development programmes and registration states.
3. **Events** — upcoming events, calendar, and archive.
4. **Visit** — timings, facilities, directions, accessibility, group visits.
5. **Heritage** — Vivekananda in Mysuru, Niranjana Matha, project history, timeline.
6. **Impact** — outcomes, stories, institutions reached, reports.
7. **About** — mission, organisation, leadership, governance.
8. **Support** — donation causes, CSR, volunteering, partnerships.

Persistent utilities:

- Search
- English / Kannada language switch
- Donate / Support CTA

Mobile quick actions:

- Visit
- Programs
- Events

---

## 4. Global visual system

### 4.1 Colour
Use a quiet, premium palette:

- near-black indigo / charcoal base
- warm ivory foreground
- stone neutral surfaces
- controlled saffron for meaningful emphasis
- muted brass/gold for premium detail
- deep botanical green as an environmental secondary accent

Saffron must be used sparingly so it retains symbolic weight.

### 4.2 Typography
Use three typographic roles:

- **Display serif** for philosophical statements and historical moments.
- **Contemporary sans serif** for interface, metadata, and navigation.
- **Kannada typeface** chosen to harmonise optically with the English system.

Typography should carry much of the visual identity; do not rely on decorative effects for perceived quality.

### 4.3 Layout
- generous whitespace
- editorial asymmetric compositions
- strong 12-column desktop grid
- max readable body line length around 65–75 characters
- large vertical rhythm between narrative chapters
- dark cinematic sections contrasted with warm editorial sections

### 4.4 Reusable motifs
A thin luminous **thread** represents an idea moving through time. It appears in the historical timeline, selected transitions, section dividers, and the transition from 1892 to the contemporary institution.

---

## 5. Global application shell

### Header
Initial state is transparent over the hero. On scroll it becomes a compact floating navigation surface with restrained blur and border treatment.

Desktop:
- brand left
- primary navigation centre/right
- language, search, and support utilities at the edge

Mobile:
- brand
- menu trigger
- direct Visit CTA

### Footer
Use a strong concluding statement, practical navigation, legal links, contact information, associated organisation links, language controls, privacy, accessibility, and terms.

### Search
Implement a command-palette style search experience (`Cmd/Ctrl + K`) that can eventually index programmes, events, facilities, heritage articles, people, and visitor information.

---

## 6. Homepage — section by section

### 6.1 Cinematic opening
**Purpose:** establish place, time, and atmosphere.

Sequence:
1. near-black field
2. warm point of light
3. small label: `Mysuru · 1892`
4. luminous line begins to form architectural geometry
5. statement: `An idea took form here.`
6. transition from historical line-work into an abstract contemporary Viveka Smaraka structure

Implementation:
- React Three Fiber canvas loaded progressively
- abstract low-poly architecture built from lightweight geometry in Phase 1
- pointer movement influences camera/parallax very subtly
- no free orbit controls
- WebGL fallback is a composed CSS/SVG hero

### 6.2 Hero reveal
**Content:**
- `VIVEKA SMARAKA`
- `Where timeless wisdom meets the aspirations of today's youth.`
- CTAs: `Explore Viveka Smaraka`, `Programs`, `Plan your visit`

Motion:
- camera moves forward rather than simply zooming
- type reveals with staggered opacity/vertical motion
- reduced-motion renders a static final composition immediately

### 6.3 1892 → today
**Purpose:** establish historical continuity quickly.

Key beats:
- 1892
- Vivekananda in Mysuru
- Niranjana Matha
- the resolve to carry the message outward
- restoration and project history
- 2026 inauguration
- the living youth centre today

Use scroll-linked transitions sparingly. Historical content remains semantic HTML outside the canvas.

### 6.4 The Living Memorial
Statement:

> **Not a monument to the past. A centre for the future.**

Three conceptual pillars:
- **Head** — knowledge, concentration, critical thought
- **Heart** — character, empathy, responsibility
- **Hand** — skill, service, purposeful work

Each pillar receives a restrained generative visual response, but text remains dominant.

### 6.5 Find your path
Audience / programme pathways:
- Students
- Career & Skills
- Leadership
- Culture
- Wellbeing

The section transitions the user from story to utility.

### 6.6 Current programmes
Show live programme cards with one explicit state:
- Registration open
- Upcoming
- Ongoing
- Completed

Each card includes audience, duration/schedule summary, language, and clear action.

### 6.7 Experience Viveka Smaraka
Introduce key spaces:
- Heritage Building
- Vivekananda Museum / Exhibition
- Experience Centre
- Meditation Hall
- Amphitheatre
- Library
- Study Centre
- Classrooms

Desktop evolves into an interactive architectural explorer. Phase 1 uses an editorial facility grid with an ambient 3D structure behind it.

### 6.8 Plan your visit
This section is practical and low-friction:
- today's status / current visitor information
- timings
- facilities
- directions
- accessibility
- group visits
- contact

Do not fabricate operational details. Until verified content is supplied, label sample content clearly in development data.

### 6.9 Upcoming events
One dominant featured event plus supporting events. Past events automatically move to archive in the eventual CMS-backed implementation.

### 6.10 Impact
Use real metrics only. Phase 1 creates the component system and clearly labels placeholder/demo figures if metrics have not been provided.

### 6.11 Support
Close the main narrative with mission-led support options rather than construction-era fundraising language.

---

## 7. Programs experience

### Listing
Filters are designed for:
- audience / age group
- interest
- programme type
- duration
- language
- registration state

### Detail
Every programme page should support:
- title and outcome-led summary
- audience
- schedule
- duration
- language
- venue
- cost / free status
- capacity
- registration state
- faculty / facilitator
- related programmes
- registration CTA

The first implementation uses typed local data so the UI is CMS-ready without binding prematurely to a vendor.

---

## 8. Events experience

Views:
- Upcoming
- Calendar (later phase)
- Past / archive

Event detail supports:
- date and time
- speaker / facilitator
- language
- venue
- capacity
- registration state
- related programmes
- accessible directions / visit link

Phase 1 provides the listing and visual system; registration workflow is a later service integration.

---

## 9. Visit experience

The visit page must answer before arrival:
- opening days and timings
- Experience Centre timings
- admission policy
- photography rules
- accessibility
- parking
- transport / directions
- group / school visits
- expected visit duration
- facilities
- code of conduct
- frequently asked questions

No unverified operational claims should be shipped as facts.

---

## 10. Heritage experience

Build a vertical story titled **1892 — A Journey Through Mysuru**.

Timeline model:
- year/date
- title
- concise narrative
- archival media
- place
- people
- source/reference
- optional deeper reading

Initial key beats:
- 1892 arrival in Mysuru
- Niranjana Matha
- Maharaja Chamaraja Wodeyar
- Dewan Seshadri Iyer
- Chicago journey context
- heritage restoration
- foundation / construction
- 2026 inauguration
- Viveka Smaraka today

Motion language:
- one luminous timeline thread
- archival media reveals gently from grain
- architectural line work transforms into the contemporary centre
- reduced motion becomes a standard editorial timeline

---

## 11. Experience / campus explorer

Phase 1:
- abstract 3D architectural sculpture in the homepage hero
- editorial facilities grid

Phase 2:
- verified simplified campus model
- selectable zones
- camera transitions to facility
- content panel per facility
- mobile uses 2.5D / illustrated map rather than forcing full 3D

3D must never be the sole way to access facility information.

---

## 12. Impact experience

Component system supports:
- verified metrics
- student stories
- teacher / institution stories
- schools reached
- programmes delivered
- annual reports
- partners

Counters animate only when values are backed by institutional data.

---

## 13. Support / donation experience

Reframe support around current impact:
- Youth programmes
- Study Centre and education
- Heritage conservation
- Library
- Scholarships
- Where most needed

Separate pathway:
- CSR & institutional partnerships

Payment integration is intentionally not part of the visual-foundation PR. The UI will expose a clean integration boundary.

---

## 14. Bilingual architecture

Plan routes and content models for English and Kannada from the start. The Phase 1 UI includes the language-control pattern; complete Kannada editorial content is dependent on approved translations.

Do not auto-translate institutional or historical material in production without review.

---

## 15. Technical architecture

### Frontend
- Next.js App Router
- React
- TypeScript
- Server Components by default
- Client Components only for interaction and 3D

### 3D
- Three.js
- `@react-three/fiber`
- `@react-three/drei`

### Motion
- CSS transitions for simple UI motion
- GSAP / ScrollTrigger only for coordinated story sequences

### Styling
- CSS custom properties as design tokens
- component-scoped/global CSS architecture kept intentionally lightweight
- avoid a pre-styled component library so the project develops its own visual identity

### Content
Phase 1 uses typed local content modules. A future CMS adapter should map to the same types so UI code does not need to be rewritten.

---

## 16. Proposed content types

- Programme
- ProgrammeBatch
- Event
- Person
- Article
- HeritageEvent
- Facility
- ImpactMetric
- Testimonial
- FAQ
- Announcement
- DonationCause

Each type will have a stable TypeScript interface before a CMS is selected.

---

## 17. Performance strategy

Loading order:

1. semantic HTML and typography
2. hero fallback composition
3. core interaction JavaScript
4. lazy 3D runtime
5. compressed model / enhanced scene assets when available

Requirements:
- never block first content paint on WebGL
- dynamic import for 3D scene
- no full-resolution textures by default
- device-aware 3D detail
- avoid continuous render loops when scene can be idle
- respect `prefers-reduced-motion`
- keep route content server rendered where possible

---

## 18. Accessibility

Required from Phase 1:
- semantic landmarks
- skip link
- visible keyboard focus
- keyboard-operable navigation/menu
- correct heading hierarchy
- `aria` labels only where native semantics are insufficient
- reduced-motion handling
- canvas marked as enhancement, not semantic content
- high contrast text and controls
- generous touch targets
- no essential information encoded by colour or motion alone

---

## 19. SEO and structured content

3D is enhancement; search engines and assistive technology receive full HTML content.

Future structured data targets:
- Organization
- Event
- Course where appropriate
- Place / TouristAttraction where appropriate
- Article
- Person
- opening hours once verified

Each route will have intentional metadata rather than generic titles.

---

## 20. Repository conventions

Initial structure:

```text
src/
  app/
  components/
    experience/
    layout/
    ui/
  content/
  lib/
  types/
public/
docs/
```

Rules:
- TypeScript strict mode
- no hard-coded duplicated navigation data
- no unverified real-world operational data presented as fact
- components should degrade gracefully without JavaScript where feasible
- Three.js code stays isolated from content components
- use descriptive names, not presentation-specific names such as `LeftBox`

---

## 21. Phase plan

### Phase 1 — foundation and flagship vertical slice
This PR:
- create Next.js/TypeScript project foundation
- global Sacred Futurism design tokens
- responsive shell, header, navigation, footer
- cinematic homepage with progressive Three.js hero
- Head / Heart / Hand living memorial section
- programme pathways and programme cards
- facilities / experience section
- visit preview
- events preview
- heritage preview
- support CTA
- initial Programs, Events, Visit, Heritage, Impact, About, Support routes
- reduced-motion handling
- typed local content data
- metadata and accessibility baseline

### Phase 2 — operational product
- CMS selection and adapter
- real programme batches
- event registration
- programme registration
- visitor information workflow
- Kannada content pipeline
- search index

### Phase 3 — spatial storytelling
- verified architectural model
- campus explorer
- richer 1892 → 2026 scroll sequence
- archival media treatment
- facility deep dives

### Phase 4 — institutional platform
- donation/payment integration
- CSR workflows
- school/group booking
- impact reporting
- admin dashboard
- translation/content freshness tools

---

## 22. Phase 1 acceptance criteria

The first implementation is successful when:

1. The project installs and builds as a modern Next.js TypeScript application.
2. The homepage immediately communicates Viveka Smaraka as a living youth institution.
3. The 3D hero loads progressively and has an accessible/non-WebGL fallback.
4. Primary routes exist and have coherent page-level hierarchy.
5. Navigation works on keyboard and mobile.
6. Reduced-motion users receive a calm, complete experience.
7. Core content is represented as typed data rather than repeated markup.
8. No construction-era language is presented as current institutional status.
9. No invented opening hours, event dates, impact metrics, or other operational facts are presented as verified information.
10. The codebase is ready for CMS/data-service integration without a UI rewrite.

---

## 23. Immediate implementation sequence

1. Commit this plan.
2. Establish project manifest, TypeScript, Next.js, linting, and build configuration.
3. Create global tokens and responsive application shell.
4. Build typed content models and development content.
5. Build the homepage in editorial order without animation first.
6. Add progressive Three.js hero enhancement.
7. Add restrained motion and reduced-motion behavior.
8. Add core route shells and reusable editorial page components.
9. Validate build/lint/type safety.
10. Open a pull request with implementation notes and known Phase 2 gaps.
