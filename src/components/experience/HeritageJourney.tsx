"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArchiveMedia } from "@/components/ui/ArchiveMedia";
import { heritageMoments } from "@/content/site";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function HeritageJourney() {
  const [active, setActive] = useState(0);
  const items = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number(visible.target.getAttribute("data-index"));
        if (Number.isFinite(index)) setActive(index);
      },
      { rootMargin: "-18% 0px -42% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    items.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const progress = heritageMoments.length <= 1 ? 0 : (active / (heritageMoments.length - 1)) * 100;

  const jumpTo = (index: number) => {
    items.current[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  };

  return (
    <section className="heritage-journey-shell" aria-label="Vivekananda in Mysuru historical journey">
      <div
        className="shell heritage-journey"
        style={{ "--journey-progress": `${progress}%` } as CSSProperties}
      >
        <aside className="heritage-journey__rail" aria-label="Journey chapters">
          <div className="heritage-journey__rail-head">
            <span>Journey</span>
            <strong>{heritageMoments[active].year}</strong>
          </div>
          <div className="heritage-journey__track" aria-hidden="true"><span /></div>
          <div className="heritage-journey__steps">
            {heritageMoments.map((moment, index) => (
              <button
                type="button"
                key={`${moment.year}-${moment.chapter}`}
                className={index === active ? "is-active" : ""}
                onClick={() => jumpTo(index)}
                aria-label={`Jump to ${moment.year}: ${moment.title}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{moment.chapter}</small>
              </button>
            ))}
          </div>
        </aside>

        <div className="heritage-journey__chapters">
          {heritageMoments.map((moment, index) => (
            <article
              className={index === active ? "heritage-chapter is-active" : "heritage-chapter"}
              data-index={index}
              key={`${moment.year}-${moment.title}`}
              ref={(node) => { items.current[index] = node; }}
            >
              <div className="heritage-chapter__meta">
                <span>{moment.year}</span>
                <span>{moment.place}</span>
              </div>
              <p className="heritage-chapter__date">{moment.dateLabel}</p>
              <h2>{moment.title}</h2>
              <p className="heritage-chapter__lead">{moment.description}</p>
              {moment.detail && <p className="heritage-chapter__detail">{moment.detail}</p>}
              {moment.media?.length ? <ArchiveMedia media={moment.media} className="heritage-chapter__media" /> : null}
              <div className="heritage-chapter__signal" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
