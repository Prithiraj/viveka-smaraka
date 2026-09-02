import Image from "next/image";
import type { MediaAsset } from "@/types/content";

export function ArchiveMedia({ media, className = "" }: { media: MediaAsset[]; className?: string }) {
  return (
    <div className={`archive-media ${className}`.trim()}>
      {media.map((item) => (
        <figure className={`archive-media__item archive-media__item--${item.aspect ?? "landscape"}`} key={item.src}>
          <div className="archive-media__image">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1100px) 70vw, 760px"
            />
            <span className="archive-media__wash" aria-hidden="true" />
          </div>
          {(item.caption || item.credit) && (
            <figcaption>
              <span>{item.caption}</span>
              {item.credit && <small>{item.credit}</small>}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
