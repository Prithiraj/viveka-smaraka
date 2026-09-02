"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchRecord } from "@/types/content";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function GlobalSearch({ records }: { records: readonly SearchRecord[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return records.slice(0, 8);
    return records
      .filter((record) =>
        [record.title, record.description, record.category, ...record.keywords]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalized),
      )
      .slice(0, 12);
  }, [query, records]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button className="search-trigger" type="button" onClick={() => setOpen(true)} aria-label="Search Viveka Smaraka">
        <SearchIcon />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      {open ? (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title">
          <button className="search-overlay__backdrop" type="button" aria-label="Close search" onClick={close} />
          <div className="search-palette">
            <div className="search-palette__head">
              <span id="search-title">Search Viveka Smaraka</span>
              <button type="button" onClick={close}>Esc</button>
            </div>
            <label className="search-palette__input">
              <SearchIcon />
              <span className="sr-only">Search</span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try ‘meditation’, ‘1892’, ‘career’…"
                autoComplete="off"
              />
            </label>
            <div className="search-palette__results" aria-live="polite">
              {results.length ? (
                results.map((result) => (
                  <Link href={result.href} onClick={close} key={`${result.category}-${result.href}-${result.title}`}>
                    <span>{result.category}</span>
                    <div>
                      <strong>{result.title}</strong>
                      <p>{result.description}</p>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))
              ) : (
                <div className="search-palette__empty">
                  <strong>No exact match.</strong>
                  <p>Try a broader word such as program, visit, history, meditation, library, or events.</p>
                </div>
              )}
            </div>
            <div className="search-palette__foot">
              <span>{results.length} result{results.length === 1 ? "" : "s"}</span>
              <span>Provider-backed index · Kannada keywords supported</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
