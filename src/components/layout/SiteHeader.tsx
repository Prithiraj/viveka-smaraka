"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/content/site";
import { languageEditions } from "@/i18n/config";
import type { SearchRecord } from "@/types/content";
import { GlobalSearch } from "./GlobalSearch";
import { LanguageControl } from "./LanguageControl";

export function SiteHeader({ searchRecords }: { searchRecords: readonly SearchRecord[] }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const english = languageEditions.find((edition) => edition.code === "en")!;
  const kannada = languageEditions.find((edition) => edition.code === "kn")!;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => mobileMenuRef.current?.querySelector<HTMLElement>("a")?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Viveka Smaraka home">
        <span className="brand__mark" aria-hidden="true">VS</span>
        <span className="brand__text">
          <strong>Viveka Smaraka</strong>
          <small>Mysuru</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <GlobalSearch records={searchRecords} />
        <LanguageControl />
        <Link className="button button--small button--warm desktop-support" href="/support">
          Support
        </Link>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation-dialog"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation-dialog"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <Link href="/support" onClick={closeMenu}>
              <span>08</span>
              Support
            </Link>
          </nav>

          <div className="mobile-menu__languages" aria-label="Language editions">
            <span>Language</span>
            <div className="mobile-menu__language-options">
              <span className="is-current" aria-current="page">
                <strong>{english.nativeLabel}</strong>
                <small>Current edition</small>
              </span>
              <Link href={kannada.href} onClick={closeMenu}>
                <strong>{kannada.nativeLabel}</strong>
                <small>Reviewed edition in preparation</small>
              </Link>
            </div>
          </div>

          <div className="mobile-menu__footer">
            <p>Historic place. Contemporary purpose.</p>
            <Link href="/visit" onClick={closeMenu}>Plan your visit →</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
