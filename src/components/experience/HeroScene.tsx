"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-scene__fallback">
        <div className="fallback-architecture">
          <span className="fallback-architecture__base" />
          <span className="fallback-architecture__body" />
          <span className="fallback-architecture__crown" />
        </div>
      </div>
      {!reducedMotion ? <HeroCanvas /> : null}
    </div>
  );
}
