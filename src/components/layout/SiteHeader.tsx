"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/content/site";
import type { SearchRecord } from "@/types/content";
import { GlobalSearch } from "./GlobalSearch";
import { LanguageControl } from "./LanguageControl";

export function SiteHeader({ searchRecords }: { searchRecords: readonly SearchRecord[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <Link href="/support" onClick={() => setOpen(false)}>
              <span>08</span>
              Support
            </Link>
          </nav>
          <div className="mobile-menu__footer">
            <p>Historic place. Contemporary purpose.</p>
            <Link href="/visit" onClick={() => setOpen(false)}>Plan your visit →</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
