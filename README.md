# DJN Event Productions — djneventproductions.com

Portfolio site for Nick Manganiello / DJN Event Productions. Built with
[Astro](https://astro.build) (static output), Tailwind CSS v4, Embla Carousel
and self-hosted Manrope.

## Development

Requires Node ≥ 22.12.

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # type-checks (astro check) then builds to dist/
npm run preview   # serve the built site
```

> **Windows note:** run builds from PowerShell or cmd, not Git Bash. Under Git
> Bash, Vite sees the drive letter in a different case and silently drops all
> CSS from the built pages. CI (Linux) is unaffected.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to **GitHub Pages** on every
push to `main`. The custom domain `djneventproductions.com` is configured in the
repository's Pages settings, so no `CNAME` file or `base` path is needed.

## Project structure

```
src/
  content/projects/*.md   one file per portfolio project (front matter + overview)
  content.config.ts       project schema
  assets/photos/          web-ready master photos (optimised to AVIF/WebP at build)
  components/home/        homepage sections (Hero, WorkCarousel, Expertise, …)
  components/             Header, Footer, ProjectCard, Icon, Wordmark
  layouts/Base.astro      <head>, SEO / Open Graph / JSON-LD, header & footer
  lib/site.ts             contact details, nav, expertise list
  lib/categories.ts       portfolio categories / filters
  pages/                  /, /work/, /work/[slug]/, 404
scripts/prepare-photos.mjs   originals → web masters
static/                   full-resolution originals (git-ignored, never published)
```

## Motion

All motion lives in `src/styles/motion.css` (tokens at the top) and
`src/scripts/reveal.ts`. It uses CSS transforms and opacity only, so there is no
layout shift and no animation library. All of it is off under
`prefers-reduced-motion`, and nothing is hidden when JavaScript is unavailable.

| Hook | Effect |
| --- | --- |
| `data-reveal` | fades up 16px the first time it scrolls into view (`--reveal-delay` to offset) |
| `data-stagger` + `style="--i:n"` on children | children fade up in sequence |
| `.section-title` / `.accent-rule` | purple accent line draws in |
| `.hero-enter` | page-load headline cue, staggered after the light comes up |
| `.stage` (on a positioned photo wrapper) | lighting cue: photo comes up from reduced brightness over 1.2s |
| `.kenburns` (on the photo) | 20s centred push-in from 1 to 1.08 (`--kenburns-scale`, `--kenburns-time`) |
| `data-reveal-img` | rectangular mask reveal for a photo (bottom to top, or `data-reveal-from="left"`) with a 1.04 to 1 settle; `--i` staggers |
| page transitions | native cross-document view transitions: the outgoing page dims onto the near-black stage and the incoming page rises and unmasks; the header holds still |

Case-study pages (`src/pages/work/[slug].astro`) use an editorial layout: the
project facts stick in a narrow left column (desktops at least 700px tall) while
the overview and full-width photographs scroll on the right. On mobile it stacks.

## Adding a project

1. Put the original photos in `static/`.
2. Add a `'original.jpg': 'project-name-detail.jpg'` line to `PHOTOS` in
   `scripts/prepare-photos.mjs`, then run `node scripts/prepare-photos.mjs`.
   This resizes to a 2560px master and **strips all metadata, including phone GPS
   location**. Originals in `static/` are never modified.
3. Copy an existing file in `src/content/projects/` and edit it. The file name
   becomes the URL (`/work/<file-name>/`). Key fields:
   - `categories`: one or more of `live`, `lighting`, `video`, `holiday`,
     `architectural`, `community`. The first is the primary category.
   - `role`: Nick's specific contribution. Keep this separate from the overall
     production.
   - `productionPartner`: only once the partner has approved the attribution.
   - `featured: true` puts it in the homepage carousel. `order` sets position.
   - `placeholder: true` shows a clearly marked "photography coming soon" panel.
   - `videoEmbed` (YouTube/Vimeo embed URL) or `media` (files in `public/media`)
     for video and motion.
4. `npm run build` validates the front matter against the schema.

## Contact

There is no contact form. The Contact section and footer link to
`djntertainmentevents@gmail.com` (mailto) and the phone number. Both are set in
`src/lib/site.ts`.

## Content needing confirmation

Project files contain `# REVIEW:` comments where details still need Nick's
confirmation (exact role, event names, years, locations, production-partner
credit). These comments are never rendered.

- **Architectural Lighting** is a placeholder until project photography exists.
- Not published: `load-in-truck.jpeg` (readable licence plate),
  `kayaks-beach.jpeg`, and the audience photo from the old Wix site (`c19c76_…avif`),
  which may be a stock image.
- Photographer credits for the Relay For Life event photos (April 13, 2019) are
  unknown. Add `photoCredit:` to the project once known.
