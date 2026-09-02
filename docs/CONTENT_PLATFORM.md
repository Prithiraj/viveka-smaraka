# Viveka Smaraka content platform foundation

This document describes the Phase 4 operational boundary between the public experience and future institutional systems.

## Content repository contract

Public routes should read content through `src/lib/content` rather than importing a specific CMS SDK. The current adapter is `localContentRepository`, backed by reviewed TypeScript content already in the repository.

A future CMS adapter should implement the same `ContentRepository` interface:

- programmes and programme lookup
- facilities
- heritage moments and homepage preview
- events and event lookup
- visitor facts/contact
- search records

This keeps the React route layer stable while the source of truth changes.

## Registration / interest intake

The application includes an intentionally generic interest-capture boundary rather than pretending programme registration is live before operating schedules are approved.

The form is rendered only when `INTEREST_WEBHOOK_URL` exists on the server. Submissions are validated server-side and forwarded to that endpoint. The frontend does not persist submissions.

Optional environment variables:

```bash
INTEREST_WEBHOOK_URL=https://institution.example/intake
INTEREST_WEBHOOK_TOKEN=replace-with-a-secret-token
NEXT_PUBLIC_SITE_URL=https://vivekasmaraka.org
```

The webhook receives normalized JSON containing the interest type, context, name, email, optional phone/message, consent state, submission timestamp, and referring page. The application does not intentionally add IP addresses or analytics identifiers to this payload.

Before enabling production intake, the institution should approve:

1. the receiving system and retention policy;
2. the privacy notice shown to users;
3. who has access to submissions;
4. response/service expectations;
5. spam/rate-limiting requirements beyond the included honeypot and validation.

## SEO / discovery

Phase 4 adds:

- organization JSON-LD globally;
- Course JSON-LD for programme details;
- Event JSON-LD for event details;
- Place JSON-LD on the visitor page;
- generated `sitemap.xml`;
- generated `robots.txt` with `/api/` excluded.

No opening-hours, ticket, pricing, capacity, or schedule schema is emitted until those facts are verified.

## Kannada edition

`/kn` is a non-indexed editorial-status route. It exists to give the language control a real destination and to establish the governance model without exposing machine-translated institutional content as approved copy.

The production localization phase should introduce versioned content entries by locale and only mark Kannada routes indexable when the core journeys have been reviewed.

## Media migration

Phase 3 references selected existing Viveka Smaraka WordPress media directly. Production should move approved assets into institution-controlled storage/CDN with:

- rights/provenance record;
- final caption and alt text;
- responsive derivatives;
- stable identifiers independent of the legacy WordPress URL.

## CMS migration checklist

When a CMS is selected:

1. implement a new `ContentRepository` adapter;
2. map CMS records into the existing domain types;
3. preserve verification status for visitor/operational facts;
4. preserve media provenance fields;
5. generate/rebuild the search index from the adapter;
6. add preview/draft support separately from public reads;
7. keep secrets and write credentials server-only;
8. test static generation, metadata, sitemap, and JSON-LD against the new provider.
