# CLAUDE.md — GrowClientsAI

## Project Overview
Marketing site for **GrowClientsAI** — Darrin Duncan's web design and build service for
local service businesses (contractors, spas/salons, clinics, small retail).

**Live URL:** growclientsai.com

> The site was previously an AI-receptionist SaaS pitch for HVAC contractors. That entire
> codebase was deleted in the v3 rebuild. If you find references to AI receptionists, VAPI,
> call routing, or `$397/month`, they are stale — the product is web design services now.

---

## Tech Stack
- **React 19 + TypeScript**, built with **Vite 6**
- **Tailwind CSS v4** — CSS-first, configured entirely in `@theme` in `src/index.css`
- **GSAP 3 + ScrollTrigger** — the only animation library
- **Fonts:** Archivo Black (display), Inter (body), via Google Fonts

There is **no** `tailwind.config.ts`, no shadcn/ui, no Radix, no Framer Motion, no router.
Each of those was removed deliberately — see Decisions below.

---

## Structure

```
index.html            Static shell, SEO/OG meta, font preconnect
src/
  main.tsx            React root
  App.tsx             Section order — this is the whole page
  index.css           @theme design tokens + base layer + reduced-motion kill switch
  data/content.ts     ALL copy. Single source of truth.
  lib/gsap.ts         GSAP registration + animation primitives
  components/Nav.tsx  Fixed header, mobile sheet
  sections/           Hero, Marquee, Services, About, Work, Process, Contact, Footer
public/               favicon, logos, robots.txt — copied to dist/ verbatim
```

**It is a single page.** Navigation is anchor links (`#services`, `#about`, `#work`,
`#process`, `#contact`). There is no router and no client-side routing of any kind.

---

## How to make copy changes

**`src/data/content.ts` is the only file to edit.** Every string the site renders comes
from there — headlines, tier copy, project blurbs, process steps, footer links. Sections
render whatever the data gives them; none of them hardcode copy.

Copy originates from the Notion doc *"GrowClientsAI — Website Copy (Phase 9)"*.

### Placeholder convention
Anything Darrin still has to supply is marked `pending: true` in the data and renders with a
visible **TBC** chip. This is deliberate — a placeholder must not be able to reach production
looking like real content. Currently pending: hero stat figures, About progress-bar scales,
project screenshots, and the contact email/phone.

---

## Design tokens — "Slate & Ember"

Defined in `@theme` in `src/index.css`. **Never write raw hex in a component** — use the
token utilities (`bg-ink`, `text-ember`, `border-slate-100`, …).

| Token | Value | Use |
|---|---|---|
| `ink` | `#101826` | Primary dark background |
| `ink-soft` | `#1A2436` | Cards on dark |
| `ember` | `#FF7A29` | Accent — CTAs, highlights |
| `ember-dim` | `#C95F1D` | Ember hover/pressed |
| `paper` | `#F5F3EE` | Light section background |
| `paper-card` | `#FFFFFF` | Cards on light |
| `slate` | `#4A5568` | Secondary text on light |
| `slate-100` | `#E7E5DE` | Hairline borders on light |

Sections alternate ink → ember (marquee) → ink → paper → paper → ink → paper for contrast.

---

## Animation

All GSAP goes through `src/lib/gsap.ts`. **Do not import `gsap` directly in a section** —
use the helpers, which all carry the reduced-motion guard:

- `useGsap(scope, setup)` — scoped `gsap.context`, auto-reverted on unmount
- `revealOnScroll` / `revealOnLoad` — staggered fade-up, `once: true` (no replay on scroll-back)
- `countUp` — proxy-object tween writing to `textContent`
- `marquee` — infinite `xPercent: -50` loop; content must be duplicated exactly once
- `progressBar` — `scaleX` from `transformOrigin: left`
- `splitWords` — wraps words in masked spans for the hero stagger

`prefers-reduced-motion` is handled in two places: every helper above falls back to the
**end state instantly**, and `src/index.css` carries a CSS-level kill switch for transitions.
Both are required — neither alone covers everything.

---

## Deploy — read before pushing

`.github/workflows/deploy.yml` triggers on **push to `main`**: builds, then SCPs `./dist/`
to `/srv/growclientsai` on Darrin's server and reloads Caddy.

**Pushing to `main` IS deploying to production.** There is no preview or staging environment.
Work on a branch.

Because the site is served as plain static files by Caddy:
- `vite.config.ts` sets `base: './'` so asset paths are relative and work from any directory.
- Anchor navigation only — path-based routing would need a Caddy `try_files` rewrite that
  this repo does not control.
- No backend. Nothing may depend on a server at runtime.

CI runs **Node 18** and deletes `package-lock.json` before `npm install`, so dependencies
float to latest on every deploy.

---

## Decisions worth not re-litigating

- **Tailwind v4 is CSS-first.** A `tailwind.config.ts` is only read if `src/index.css` has an
  `@config` directive. The old repo had a config file with no directive, so its entire theme
  was silently ignored for months. Don't add one back.
- **GSAP only.** Framer Motion was removed. Don't add a second animation library.
- **No shadcn/ui.** The old repo had 49 primitives importing ~20 `@radix-ui` packages that
  were never in `package.json`. They only "worked" because nothing imported them.
- **No testimonials section.** Requests are out to Kevin (StarrMark Solutions) and Wandi
  (All For His Glory Worship). Build it when real quotes arrive; never ship placeholder quotes.
- **Concept work is labeled.** Cedar & Sage Spa carries a "Concept project" badge. Never
  present it as a real client engagement.
