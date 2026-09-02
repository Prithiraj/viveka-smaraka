import Image from "next/image";
import Link from "next/link";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { contentRepository } from "@/lib/content";

export default async function Home() {
  const [programmes, facilities, heritageMoments, events] = await Promise.all([
    contentRepository.getProgrammes(),
    contentRepository.getFacilities(),
    contentRepository.getHeritageMoments(),
    contentRepository.getEvents(),
  ]);

  const openingEvent = events.find((event) => event.status === "completed") ?? events[0];
  const openingImage = openingEvent?.media?.[0];
  const swamiMoment = heritageMoments.find((moment) => moment.media?.some((media) => media.aspect === "portrait"));
  const swamiImage = swamiMoment?.media?.find((media) => media.aspect === "portrait");
  const restorationMoment = heritageMoments.find((moment) => moment.year === "2012");
  const restorationBefore = restorationMoment?.media?.[0];
  const restorationAfter = restorationMoment?.media?.[1];

  const storyCards = [
    {
      index: "01",
      title: "Remember",
      eyebrow: "Heritage",
      copy: "Encounter the Mysuru chapter of Swami Vivekananda and the historic Niranjana Matha where the story begins.",
      image: swamiImage,
    },
    {
      index: "02",
      title: "Learn",
      eyebrow: "Formation",
      copy: "Build attention, character, communication, cultural understanding, and practical confidence for contemporary life.",
      image: restorationAfter ?? restorationBefore,
    },
    {
      index: "03",
      title: "Gather",
      eyebrow: "Public life",
      copy: "Join a living institution of talks, study, cultural programmes, meditation, service, and shared learning.",
      image: openingImage,
    },
  ];

  return (
    <main id="main-content" className="light-home">
      <section className="photo-hero">
        <div className="shell photo-hero__grid">
          <div className="photo-hero__copy">
            <div className="photo-hero__meta">
              <span>Mysuru</span>
              <span>1892 → 2026</span>
            </div>
            <p className="photo-hero__kicker">Swami Vivekananda Cultural Youth Centre</p>
            <h1>Viveka<br />Smaraka</h1>
            <p className="photo-hero__lede">
              A historic place where memory becomes learning, character, culture, reflection, and service for a new generation.
            </p>
            <div className="photo-hero__actions">
              <Link className="button button--warm" href="/visit">Plan your visit <ArrowIcon /></Link>
              <Link className="button button--ghost" href="/heritage">Explore the heritage</Link>
            </div>
            <div className="photo-hero__note">
              <span>Opened 1 August 2026</span>
              <span>A unit of Sri Ramakrishna Ashrama, Mysuru</span>
            </div>
          </div>

          <div className="photo-hero__visual">
            {openingImage ? (
              <figure className="photo-hero__main-image">
                <Image
                  src={openingImage.src}
                  alt={openingImage.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <figcaption>{openingImage.caption ?? "Viveka Smaraka, Mysuru"}</figcaption>
              </figure>
            ) : null}
            {swamiImage ? (
              <figure className="photo-hero__portrait">
                <Image
                  src={swamiImage.src}
                  alt={swamiImage.alt}
                  fill
                  sizes="(max-width: 700px) 30vw, 170px"
                />
                <figcaption>1892</figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="editorial-intro shell">
        <SectionLabel>The living memorial</SectionLabel>
        <div className="editorial-intro__grid">
          <h2>A historic place,<br /><em>alive with contemporary purpose.</em></h2>
          <div>
            <p>
              Viveka Smaraka stands on ground associated with Swami Vivekananda&apos;s Mysuru stay in 1892. Today, the place extends that memory into an active cultural youth centre.
            </p>
            <Link href="/about">Understand the institution <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="story-triptych shell" aria-labelledby="formation-title">
        <div className="story-triptych__heading">
          <div>
            <SectionLabel>Experience the idea</SectionLabel>
            <h2 id="formation-title">Remember. Learn. Gather.</h2>
          </div>
          <p>
            Swami Vivekananda&apos;s ideal of developing head, heart, and hand is expressed here through knowledge, inner growth, practical skill, and service—not as an abstraction, but as lived experience.
          </p>
        </div>
        <div className="story-triptych__grid">
          {storyCards.map((card) => (
            <article className="story-photo-card" key={card.title}>
              <div className="story-photo-card__image">
                {card.image ? (
                  <Image src={card.image.src} alt={card.image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                ) : null}
              </div>
              <div className="story-photo-card__body">
                <div><span>{card.index}</span><small>{card.eyebrow}</small></div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="programmes-section programmes-section--light" id="programs">
        <div className="shell">
          <div className="section-heading">
            <div>
              <SectionLabel>Programs</SectionLabel>
              <h2>Practical pathways for becoming more capable, centred, and useful.</h2>
            </div>
            <Link href="/programs">Explore all programs <ArrowIcon /></Link>
          </div>
          <div className="programme-grid">
            {programmes.map((programme) => <ProgrammeCard key={programme.slug} programme={programme} />)}
          </div>
        </div>
      </section>

      <section className="facility-editorial" id="experience">
        <div className="shell facility-editorial__grid">
          <div className="facility-editorial__visuals">
            <div className="facility-editorial__caption">
              <SectionLabel>The place</SectionLabel>
              <h2>Spaces for memory, stillness, study, and public life.</h2>
            </div>
            {restorationBefore && restorationAfter ? (
              <div className="restoration-pair">
                <figure>
                  <Image src={restorationBefore.src} alt={restorationBefore.alt} fill sizes="(max-width: 800px) 100vw, 35vw" />
                  <figcaption>Before restoration</figcaption>
                </figure>
                <figure>
                  <Image src={restorationAfter.src} alt={restorationAfter.alt} fill sizes="(max-width: 800px) 100vw, 35vw" />
                  <figcaption>After restoration</figcaption>
                </figure>
              </div>
            ) : openingImage ? (
              <figure className="facility-editorial__single-image">
                <Image src={openingImage.src} alt={openingImage.alt} fill sizes="(max-width: 800px) 100vw, 55vw" />
              </figure>
            ) : null}
          </div>
          <div className="facility-editorial__list">
            {facilities.map((facility) => (
              <article key={facility.slug}>
                <span>{facility.index}</span>
                <div>
                  <small>{facility.role}</small>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
            <Link href="/visit#spaces">Explore all spaces <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="heritage-editorial shell">
        <div className="heritage-editorial__image">
          {swamiImage ? <Image src={swamiImage.src} alt={swamiImage.alt} fill sizes="(max-width: 780px) 100vw, 34vw" /> : null}
          <span>Archive · 1892</span>
        </div>
        <div className="heritage-editorial__copy">
          <SectionLabel>Vivekananda in Mysuru</SectionLabel>
          <h2>One place.<br />A journey that moved outward.</h2>
          <p>
            The heritage experience follows the Mysuru chapter through Niranjana Matha, preservation, the building of the contemporary centre, and its opening in 2026.
          </p>
          <div className="heritage-editorial__years" aria-label="Selected heritage years">
            {heritageMoments.filter((moment, index, all) => all.findIndex((item) => item.year === moment.year) === index).map((moment) => (
              <span key={moment.year}>{moment.year}</span>
            ))}
          </div>
          <Link className="text-link" href="/heritage">Enter the heritage story <ArrowIcon /></Link>
        </div>
      </section>

      <section className="visit-preview visit-preview--light">
        <div className="shell visit-preview__grid">
          <div>
            <SectionLabel>Plan your visit</SectionLabel>
            <h2>Come for the history.<br />Make time for the place.</h2>
          </div>
          <div className="visit-panel">
            <span className="visit-panel__eyebrow">Narayana Shastri Road · Mysuru</span>
            <p>
              The visitor guide separates confirmed location and contact information from operating details that are still awaiting formal publication.
            </p>
            <div className="visit-panel__actions">
              <Link className="button button--dark" href="/visit">Visitor guide <ArrowIcon /></Link>
              <span>Verified information first</span>
            </div>
          </div>
        </div>
      </section>

      {openingEvent ? (
        <section className="archive-editorial shell">
          <div className="section-heading">
            <div>
              <SectionLabel>Institutional archive</SectionLabel>
              <h2>The opening of a new chapter.</h2>
            </div>
            <Link href="/events">View the event archive <ArrowIcon /></Link>
          </div>
          <div className="archive-editorial__card">
            {openingImage ? (
              <div className="archive-editorial__media">
                <Image src={openingImage.src} alt={openingImage.alt} fill sizes="(max-width: 850px) 100vw, 58vw" />
              </div>
            ) : null}
            <div className="archive-editorial__body">
              <span>{openingEvent.displayDate}</span>
              <h3>{openingEvent.title}</h3>
              <p>{openingEvent.summary}</p>
              <Link href={`/events/${openingEvent.slug}`}>Read the archive record <ArrowIcon /></Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="support-preview support-preview--light">
        <div className="shell support-preview__inner">
          <SectionLabel>Carry the work forward</SectionLabel>
          <h2>Support learning, culture,<br />heritage, and young people.</h2>
          <p>
            Support should now be connected to the institution&apos;s living work—youth programmes, study, education, heritage conservation, library resources, and scholarships.
          </p>
          <Link className="button button--warm" href="/support">Explore ways to support <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
