import Link from "next/link";
import { HeroScene } from "@/components/experience/HeroScene";
import { CampusExplorer } from "@/components/experience/CampusExplorer";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { heritagePreviewMoments, programmes } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <HeroScene />
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__content shell">
          <div className="hero__meta">
            <span>Mysuru</span>
            <span>1892 → 2026 → Forward</span>
          </div>
          <div className="hero__copy">
            <p className="hero__kicker">Historic place. Contemporary purpose.</p>
            <h1>Viveka<br />Smaraka</h1>
            <p className="hero__lede">Where timeless wisdom meets the aspirations of today&apos;s youth.</p>
            <div className="hero__actions">
              <Link className="button button--warm" href="#experience">Explore the experience <ArrowIcon /></Link>
              <Link className="button button--ghost" href="/visit">Plan your visit</Link>
            </div>
          </div>
          <div className="hero__footnote">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Inaugurated 1 August 2026</span>
          </div>
        </div>
      </section>

      <section className="story-band shell">
        <SectionLabel>The living memorial</SectionLabel>
        <div className="story-band__grid">
          <h2>Not a monument to the past.<br /><em>A centre for the future.</em></h2>
          <p>Viveka Smaraka transforms a place of historical memory into an active space for character, culture, learning, skill, reflection, and service.</p>
        </div>
      </section>

      <section className="pillars shell" aria-labelledby="pillars-title">
        <div className="pillars__intro">
          <span id="pillars-title">Three dimensions of growth</span>
          <p>The experience is organised around a simple human idea: develop the whole person.</p>
        </div>
        <div className="pillars__grid">
          {[
            ["01", "Head", "Knowledge, concentration, clarity, and critical thought."],
            ["02", "Heart", "Character, empathy, responsibility, and inner steadiness."],
            ["03", "Hand", "Skill, service, work culture, and purposeful action."],
          ].map(([index, title, copy]) => (
            <article className="pillar" key={title}>
              <span>{index}</span>
              <div className={`pillar__orb pillar__orb--${title.toLowerCase()}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="programmes-section" id="programs">
        <div className="shell">
          <div className="section-heading">
            <div>
              <SectionLabel>Find your path</SectionLabel>
              <h2>Ideas become useful when they become practice.</h2>
            </div>
            <Link href="/programs">Explore all programs <ArrowIcon /></Link>
          </div>
          <div className="programme-grid">
            {programmes.map((programme) => <ProgrammeCard key={programme.slug} programme={programme} />)}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-section__glow" aria-hidden="true" />
        <div className="shell experience-section__inner">
          <div className="section-heading section-heading--light">
            <div>
              <SectionLabel>Experience Viveka Smaraka</SectionLabel>
              <h2>Move through a campus of learning, reflection, culture, and public life.</h2>
            </div>
            <p>Select a space to explore its role in the institution. The model is intentionally abstract until verified architectural geometry is available.</p>
          </div>
          <CampusExplorer />
        </div>
      </section>

      <section className="heritage-preview shell">
        <div className="section-heading">
          <div>
            <SectionLabel>1892 — a journey through Mysuru</SectionLabel>
            <h2>One thread. More than a century of movement.</h2>
          </div>
          <Link href="/heritage">Enter the heritage story <ArrowIcon /></Link>
        </div>
        <div className="timeline">
          {heritagePreviewMoments.map((moment) => (
            <article key={`${moment.year}-${moment.title}`} className="timeline__item">
              <div className="timeline__year">{moment.year}</div>
              <div className="timeline__thread" aria-hidden="true"><span /></div>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-preview">
        <div className="shell visit-preview__grid">
          <div>
            <SectionLabel>Plan your visit</SectionLabel>
            <h2>Come for the history.<br />Stay for the experience.</h2>
          </div>
          <div className="visit-panel">
            <span className="visit-panel__eyebrow">Visitor information</span>
            <p>Public timings and detailed visitor policies are being verified for publication. Please confirm current information with the centre before travelling.</p>
            <div className="visit-panel__actions">
              <Link className="button button--dark" href="/visit">Visitor guide <ArrowIcon /></Link>
              <span>Mysuru · Karnataka</span>
            </div>
          </div>
        </div>
      </section>

      <section className="events-preview shell">
        <SectionLabel>Events</SectionLabel>
        <div className="events-preview__card">
          <div>
            <span>Programming calendar</span>
            <h2>A stage for ideas, culture, and youth.</h2>
          </div>
          <div>
            <p>The public events calendar will surface talks, workshops, cultural programmes, and gatherings here once the institutional schedule is connected.</p>
            <Link href="/events">Explore events <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="support-preview">
        <div className="support-preview__orb" aria-hidden="true" />
        <div className="shell support-preview__inner">
          <SectionLabel>Carry the idea forward</SectionLabel>
          <h2>Support the next generation,<br />not just the next building.</h2>
          <p>Future support pathways will connect donors and partners directly with youth programmes, education, heritage conservation, the library, and scholarships.</p>
          <Link className="button button--warm" href="/support">Explore ways to support <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
