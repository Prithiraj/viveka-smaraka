# Viveka Smaraka — Visual Redesign Plan

## Why this redesign

The first visual direction proved the application architecture and interaction system, but it overused abstraction: dark surfaces, conceptual spheres, and an invented architectural Three.js model competed with the institution itself.

Viveka Smaraka already has what the design needs: a historic place, archival material, restored architecture, public programmes, and real people. The new design must foreground those things.

## New direction: Living Editorial Heritage

The visual language will combine the restraint of a museum catalogue, the warmth of Indian material culture, and the clarity of a contemporary educational institution.

The experience should feel:

- light
- warm
- architectural
- photographic
- elegant
- calm
- contemporary rather than trendy
- rooted in real Viveka Smaraka material

It should not feel cyberpunk, theatrical for its own sake, or like a Three.js demo.

## Palette

Primary surfaces:

- warm ivory `#F7F3EA`
- soft parchment `#EEE7D8`
- chalk white `#FFFDF8`

Text:

- charcoal `#26241F`
- softened brown-black `#4D493F`

Accents:

- restrained saffron / ochre `#C57A2A`
- muted gold `#B89455`
- heritage green `#315443`
- terracotta `#A95F42`

Dark backgrounds become exceptional moments rather than the default page canvas.

## Typography

- Keep an editorial serif for major statements and historical headings.
- Use a neutral contemporary sans-serif for navigation, labels, programme metadata, and utility UI.
- Increase body contrast and line-height on light surfaces.
- Avoid oversized text colliding with imagery.

## Header

The header becomes a clean light floating bar:

- ivory/translucent surface
- charcoal type
- subtle border and shadow
- warm support button
- search and language controls remain compact

On the hero it should feel integrated with the page rather than visually detached.

## Homepage

### 1. Photographic hero

Replace the abstract Three.js architecture entirely.

Use real Viveka Smaraka opening-day photography from the institution's existing archive.

Composition:

- large real image occupying roughly 60–65% of desktop width
- quiet ivory editorial panel for title and introduction
- label: `Mysuru · 1892 → 2026`
- title: `Viveka Smaraka`
- concise positioning statement
- actions: `Plan your visit`, `Explore the heritage`
- small inauguration note

No canvas is needed.

### 2. Institutional introduction

A simple light section with one large statement and one concise paragraph.

`A historic place, alive with contemporary purpose.`

Pair it with a restored-site image or archival image rather than an abstract illustration.

### 3. Replace Head / Heart / Hand abstractions

The philosophy remains important, but the spheres are removed.

New photographic triptych:

1. **Remember** — heritage, Swami Vivekananda's Mysuru chapter, Niranjana Matha.
2. **Practice** — character, concentration, learning, reflection, youth development.
3. **Gather** — talks, cultural programmes, service, community and public life.

Each panel uses a real institutional/archive photograph with short copy.

The relationship to Head / Heart / Hand can remain in supporting text without visualizing the concepts as abstract objects.

### 4. Programmes

Use warm white cards with:

- thin heritage-green/stone rules
- smaller status pill
- programme title
- concise outcome
- audience
- themes
- simple arrow action

The section background can be parchment.

### 5. Facilities

Remove the conceptual campus model from the homepage.

Use an editorial facilities layout:

- one large image-led feature
- facility list beside/below it
- numbers and short descriptions
- no invented geometry

If a verified building/campus model is supplied later, a dedicated explorer can be restored as an optional experience.

### 6. Heritage preview

Use a real archival portrait and restoration before/after material.

Make the timeline visually resemble a curated exhibition wall rather than a glowing digital thread.

### 7. Visit

Use a pale warm-gold / sandstone band with direct visitor information. Keep verified/pending labels.

### 8. Events / archive

Make the inauguration photograph the hero of the archive card. Use editorial captions and dates.

### 9. Support

Use a light institutional close with a restrained green or ochre accent; avoid dark glowing orb effects.

## Heritage page

Retain the chronological interaction but move the visual system to light museum-catalogue styling:

- ivory background
- charcoal type
- ochre year markers
- archival photographs with generous margins and captions
- restrained lines rather than glowing tracks
- sticky chapter navigation can remain

## Other routes

Programs, events, visit, impact, about, support and Kannada editorial-status routes move to the same light visual system so the application feels coherent.

## Motion

Motion is secondary.

Allowed:

- gentle opacity/translate image reveals
- restrained hover scale on photographs
- smooth but native-feeling section transitions
- existing heritage observer logic where useful

Removed from the homepage:

- Three.js hero
- abstract orbiting/sculptural architecture
- Head/Heart/Hand spheres
- large glowing background orbs

## Image strategy

Prioritize, in order:

1. current Viveka Smaraka WordPress archive images
2. historic/restoration images from the Viveka Smaraka history archive
3. older official Viveka Smaraka photo archive when relevant
4. purpose-designed non-photographic graphic elements only when no real visual exists

Every image carries meaningful alt text and, where archival, caption/source metadata.

## Acceptance criteria

The redesign is successful when:

- the first screen immediately shows the real institution rather than an invented model
- light surfaces dominate the experience
- no abstract sphere/orb section remains on the homepage
- homepage 3D is removed
- real imagery appears in the hero, institutional story, philosophy/experience section, heritage preview and event archive
- body copy is easier to read
- design still feels premium on desktop and mobile
- content/data quality guardrails from earlier phases remain intact
- reduced-motion and keyboard accessibility remain intact
