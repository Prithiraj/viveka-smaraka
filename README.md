# Viveka Smaraka

A new digital experience for Viveka Smaraka, Mysuru, built around the **Sacred Futurism** design direction: heritage, light, space, motion, contemplation, and modern utility.

## Stack

- Next.js 16
- React 19
- TypeScript
- Three.js
- React Three Fiber / Drei
- CSS design tokens and responsive editorial layout
- Provider-agnostic content repository boundary

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Optional environment

```bash
NEXT_PUBLIC_SITE_URL=https://vivekasmaraka.org
INTEREST_WEBHOOK_URL=https://institution.example/intake
INTEREST_WEBHOOK_TOKEN=replace-with-a-secret-token
```

The public interest form is only rendered when `INTEREST_WEBHOOK_URL` is configured. The application validates submissions server-side and forwards them to the configured institutional endpoint; it does not add a database or pretend enrolment is live.

## Product plan

See [`docs/IMPLEMENTATION_PLAN.md`](docs/IMPLEMENTATION_PLAN.md) for the full section-by-section experience, architecture, accessibility, performance, and phased implementation plan.

See [`docs/CONTENT_PLATFORM.md`](docs/CONTENT_PLATFORM.md) for the CMS adapter contract, intake boundary, localization governance, SEO, and production content migration notes.

## Content status

This foundation deliberately avoids inventing operational facts such as opening hours, programme schedules, future event dates, impact metrics, or admission policies. Those values should be connected to verified institutional content before production launch.
