import Link from "next/link";
import type { Programme } from "@/types/content";
import { statusLabel } from "@/lib/status";
import { ArrowIcon } from "./ArrowIcon";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="programme-card" id={programme.slug}>
      <div className="programme-card__top">
        <span className="programme-card__eyebrow">{programme.eyebrow}</span>
        <span className="programme-card__status">{statusLabel[programme.status]}</span>
      </div>
      <h3>{programme.title}</h3>
      <p>{programme.summary}</p>
      <div className="programme-card__themes">
        {programme.themes.map((theme) => <span key={theme}>{theme}</span>)}
      </div>
      <div className="programme-card__footer">
        <span>{programme.audience}</span>
        <Link href={`/programs#${programme.slug}`} aria-label={`Explore ${programme.title}`}><ArrowIcon /></Link>
      </div>
    </article>
  );
}
