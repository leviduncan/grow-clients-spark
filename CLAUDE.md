# CLAUDE.md - GrowClientsAI

## Project Overview
Marketing site for **GrowClientsAI** - Darrin Duncan's web design and build service for
local service businesses (contractors, spas/salons, clinics, small retail).

**Live URL:** growclientsai.com

> The site was previously an AI-receptionist SaaS pitch for HVAC contractors. That entire
> codebase was deleted in the v3 rebuild. If you find references to AI receptionists, VAPI,
> call routing, or `$397/month`, they are stale - the product is web design services now.

---

## Tech Stack
- **React 19 + TypeScript**, built with **Vite 6**
- **Tailwind CSS v4** - CSS-first, configured entirely in `@theme` in `src/index.css`
- **GSAP 3 + ScrollTrigger** - the only animation library
- **Light + dark themes**, OS-following by default, toggle in the nav
- **Fonts:** Archivo Black (display), Inter (body), via Google Fonts

There is **no** `tailwind.config.ts`, no shadcn/ui, no Radix, no Framer Motion, no router.
Each of those was removed deliberately - see Decisions below.

---

## Structure

```
index.html            Static shell, SEO/OG meta, font preconnect
testimonial/          Unlisted client form (see Client forms below)
  index.html
  thanks/index.html
src/
  main.tsx            React root
  App.tsx             Section order - this is the whole page
  index.css           @theme design tokens + base layer + reduced-motion kill switch
  data/content.ts     ALL marketing copy. Single source of truth.
  data/forms.ts       ALL form copy + the n8n webhook URLs
  lib/gsap.ts         GSAP registration + animation primitives
  components/Nav.tsx  Fixed header, mobile sheet
  components/Logo.tsx Wordmark, as outline paths
  components/ThemeToggle.tsx  Light/dark switch, self-contained
  sections/           Hero, Marquee, Services, About, Work, Process, Contact, Footer
  forms/              Shell, controls, submit hook, and the form pages
public/               favicon.svg, apple-touch-icon.png, robots.txt - copied to dist/ verbatim
```

**The marketing site is a single page.** Navigation is anchor links (`#services`,
`#about`, `#work`, `#process`, `#contact`). There is no router and no client-side routing
of any kind. The form pages under `testimonial/` are separate *documents*, not routes:
each is its own Vite entry building to `dist/<dir>/index.html`, which Caddy's
`file_server` serves for a directory request. That is why they need no rewrite rule.

---

## How to make copy changes

**`src/data/content.ts` is the only file to edit.** Every string the site renders comes
from there - headlines, tier copy, project blurbs, process steps, footer links. Sections
render whatever the data gives them; none of them hardcode copy.

Copy originates from the Notion doc *"GrowClientsAI - Website Copy (Phase 9)"*.

### The hero headline

`hero.lines` is an array of `{ text, outline }`, not a fixed pair. The setup line is
outlined and the payoff is filled, and the payoff is deliberately split across two lines:
the type is capped by the **length of the longest line**, not by the clamp. At >=1280 the
`max-w-7xl` measure is 1216px and the longest line runs ~9x its font size, which is what
allows `8.25rem`. Re-breaking the copy onto fewer, longer lines forces the type back down;
`Hero.tsx` renders whatever the array holds, so re-break there, not in the component.

### Project screenshots

Live in `src/assets/work/` as **800x450 (16:9)** WebP with a JPEG fallback, imported in
`content.ts` and rendered through `<picture>` in `Work.tsx`. Cards render at most ~389 CSS px
wide, so 800px is ~2x for retina; going larger is wasted bytes.

Full-resolution masters sit in `design-src/screenshots/`, which is **gitignored** - 5.3 MB
that would be SCP'd on every deploy for no runtime benefit. To add or replace one:

```bash
magick design-src/screenshots/NAME.png -crop 1905x1071+0+0 +repage \
  -filter Lanczos -resize 800x450! -strip -quality 82 src/assets/work/NAME.webp
magick design-src/screenshots/NAME.png -crop 1905x1071+0+0 +repage \
  -filter Lanczos -resize 800x450! -strip -interlace Plane \
  -sampling-factor 4:2:0 -quality 80 src/assets/work/NAME.jpg
```

The `1905` crop removes the browser scrollbar strip baked into the captures. The card slot is
`aspect-video` specifically because these are wide browser captures with the logo and headline
hard-left; a 4:3 slot cut both off.

### Project links

`Project.url` is the live site, and it is **optional on purpose**. A card with a url becomes
a link; a card without one renders as plain content. The hover affordances (`group` for the
caption overlay and the image zoom, `card-grow` for the scale) are gated on the same field,
so an unlinked card cannot sit there looking clickable and do nothing.

The link wraps **only the `h3` title**, with `.card-link` stretching its `::after` over the
whole article. That keeps the accessible name to the project name and gives one tab stop per
card, rather than one giant link reading out the alt text, the caption and the blurb. The
focus ring is moved onto that overlay, since the clickable area is the card, not the title.
Links are external, so `target="_blank"` with `rel="noopener noreferrer"` and an sr-only
"(opens in a new tab)".

Cedar & Sage links to a live site but is still `kind: 'concept'` and still carries the badge.
A link is not a claim of a client engagement, and the badge is what stops it reading as one.

### Placeholder convention
Anything Darrin still has to supply is marked `pending: true` in the data. A placeholder must
not be able to reach production looking like real content, and there are two ways of honouring
that depending on where it sits:

- **Hidden** - the hero stats. `Hero.tsx` filters `pending` rows out and drops the whole `<dl>`,
  border rule included, when none are left. Above the fold on a live site, a visible placeholder
  costs more than a missing one.
- **Chipped** - the About metrics render a **Scale TBC** chip and a hatched bar instead. Nothing
  uses this right now, but the path is live: the figures there are real and only the bar's `pct`
  is a proportion, so a chip would be marking the bar, not the number.

Currently pending: the hero stat figures only, and those are hidden rather than shown. The About
bar scales are set (60 / 40, provisional but deliberate). Screenshots, project links and contact
details are all real, so **nothing pending is visible on the live site.**

---

## Design tokens - "Slate & Ember"

Tokens are **semantic, not literal**, and switch with the theme. **Never write raw hex, and
never write `bg-ink` / `bg-paper`** - those are gone. Use the role tokens below.

| Token | Role | Light | Dark |
|---|---|---|---|
| `band` | Hero, Services, Process, Footer | `#FFFFFF` | `#0C1320` |
| `base` | About, Work, Contact (and `body`) | `#F5F3EE` | `#131C2B` |
| `card` | Cards on either surface | `#FFFFFF` | `#1A2436` |
| `feature` | Always-dark blocks (contact CTA, concept badge) | `#101826` | `#1F2A3D` |
| `content` | Primary text | `#101826` | `#F3F1EC` |
| `muted` | Secondary text | `#4A5568` | `#9BA6B5` |
| `faint` | Tertiary text | `#5F6875` | `#8793A4` |
| `hairline` | Borders, rules, grid gaps | `#E4E0D7` | `#26303F` |
| `ember` | Accent fills - identical in both | `#FF7A29` | `#FF7A29` |
| `ember-text` | Accent **as text** (darkens on light grounds) | `#C24F0F` | `#FF7A29` |
| `on-ember` | Text on an ember fill | `#101826` | `#101826` |
| `on-feature` | Text on a `feature` block | `#F3F1EC` | `#F3F1EC` |
| `scrim` | Overlay on imagery - always dark | `#101826` | `#101826` |

Two rules that are easy to get wrong:
- **`ember` vs `ember-text`.** `ember` is a fill. As *text* on a light ground it fails
  contrast, so text uses `ember-text`. The exception is text sitting on a `feature` block,
  which is dark in both themes - there, use raw `ember`.
- **`scrim`, not `feature`, for image overlays.** The Work hover caption is white over a
  gradient; that gradient must stay dark regardless of theme.

Every text/background pair is contrast-checked; all body text clears WCAG AA (4.5:1) and
headings clear 3:1 in both themes.

That check includes text set at partial opacity. On the ember-filled Services tier, dark
text fades toward the orange ground fast: `text-on-ember/65` composites to 3.70:1 and fails
AA, so the ladder there stops at `/85` (5.53:1). **Never lighten text on an ember fill to fix
legibility** - white on `ember` is 2.60:1, worse than any dark step.

### Paper texture (light mode only)

`src/assets/Bg-1.jpg` is a fine grain texture painted behind the whole page by a fixed
`body::before` layer, and switched off entirely in dark mode.

- **Every section except the hero** uses `bg-band-veil` / `bg-base-veil` instead of
  `bg-band` / `bg-base`. Those are the same colours at `--veil-alpha` (0.58). The hero stays
  fully opaque and therefore shows no texture at all.
- Tune the grain with `--veil-alpha` in `src/index.css` - one number, both veils follow.
  Lower = more texture. Source grain is 7.1 luma levels, so composited grain is
  `7.1 x (1 - alpha)`: ~3.0 levels at 0.58, against ~1.1 at the 0.85 it started on.
- Lowering it also pulls both surfaces toward the texture's own mean (226.7), which narrows
  the `band` vs `base` gap that separates adjacent sections: 8.5 luma levels at 0.85, 6.6 at
  0.66, 6.0 at the current 0.58. Much below this and that separation goes, and `--base`
  would need deepening to compensate.
- The step at the hero's opaque-to-veiled boundary grew with the grain (~4 luma levels to
  ~12), so the `Marquee.tsx` ramp below is doing more work than it used to, not less.
- In dark mode the veils are redefined to the flat opaque colours and the texture layer is
  `display: none`, so dark is byte-identical to having no texture at all.
- The image lives in `src/assets/`, **not** `public/`, so Vite hashes it and rewrites the URL
  against the relative `base`. A `public/` asset would need a root-absolute URL and break the
  "dist works from any directory" guarantee.
- The hero is the only opaque-to-veiled boundary on the page, and a hard step there reads as
  a faint line across a large flat area. `Marquee.tsx` carries a 112px `from-band` gradient
  at its top to ramp it out. Don't remove it.

## Logo

`src/components/Logo.tsx` is the wordmark: `GROW` and `AI` in Archivo Black,
`CLIENTS` in Inter. The letterforms are **real font outlines converted to paths**,
not `<text>`, so the mark is identical whether or not the Google Fonts request has
landed, and it cannot reflow if the webfont changes.

- **Use `LOGO_SIZE`, exported from `Logo.tsx`. Do not hand `<Logo>` a bespoke height.**
  One scale, one place, so the main page and every intake form match. `LOGO_SIZE_NAV`
  is the single sanctioned exception: same endpoints, but it holds the small mark
  until `lg` because of the nav collision described below.
- **Size it with a CSS height only.** The mark is 12.1:1, so the width it occupies is
  height x 12.1: 15px is 181px wide, 26px is 315px. That ratio is why the size is a
  responsive scale and not one number, since a size large enough to read in the footer
  overflows a 320px phone header where the mark sits beside the theme toggle. Setting a
  width instead fights the viewBox. Note the mark has no ascenders above the cap line, so
  a given CSS height yields noticeably larger letters than a font-size of the same number.
- The wordmark takes `currentColor`, so it inherits from whatever wraps it
  (`text-content` in both the nav and the footer). The accent uses raw `--ember`
  rather than `--ember-text`: these are filled shapes, not text.
- The `<svg>` is `aria-hidden`, so **the wrapping `<a>` must carry an
  `aria-label`.** Both call sites do.
- **The nav only takes the large mark from `lg`.** From `md` the links are shown, and at
  768 the links, theme toggle and CTA already eat ~494px of the 704px measure. Anything
  past ~190px of logo there collides with "Services". The footer has no such limit: its
  grid column sizes to the mark.
- `public/favicon.svg` is the matching mark: an ember `G` in the same Archivo
  Black on a slate `#101826` rounded square. `apple-touch-icon.png` is the same
  artwork, square and full-bleed, because iOS applies its own squircle mask.
- Regenerate either from `design-src/logo/` (gitignored, see its README), which
  also exports standalone light/dark SVG and PNG files for off-site use
  (proposals, invoices, signatures) into `design-src/logo/exports/`.

## The nav bar

`Nav.tsx` has **three** background states, not two:

- **top of page** - `bg-transparent`, so the hero reads as one uninterrupted block.
- **scrolled** - `bg-band/65 backdrop-blur-xl backdrop-saturate-150`. This is the glass. The
  alpha is what makes it read as glass at all: at the `/95` it used to be, the 12px blur was
  invisible because nothing showed through.
- **mobile sheet open** - flat `bg-band`. The sheet below it paints an opaque `bg-band`, so
  a translucent bar would put a visible seam across the join.

Worst case for legibility is the ember marquee passing under the bar, which tints the glass
peach. `text-muted` links measure 5.77:1 there, so there is room, but that is the number to
re-check before lowering the alpha further.

## Theming

- `src/lib/theme.ts` owns the state. `useTheme()` returns `{ theme, setTheme, toggle }`.
- No stored choice → the page follows the OS and keeps tracking it live. The first explicit
  toggle pins the choice to `localStorage` under `gcai-theme` and stops OS tracking.
- An inline blocking script in `index.html` applies the stored theme **before first paint**.
  It must stay inline and blocking, or the page flashes light before switching. Its storage
  key is duplicated there deliberately - keep it in sync with `THEME_KEY`.
- Tokens are plain CSS variables redefined per theme, exposed to Tailwind via **`@theme
  inline`**. The `inline` keyword is load-bearing: without it Tailwind bakes the light values
  into every utility and dark mode silently does nothing.

## Copy conventions

- **No em-dashes in anything that renders** (src/data/content.ts, component strings, index.html meta). Use a colon when the clause enumerates, a full stop when it
  restates, a comma for a plain appositive. En-dashes in numeric ranges (`2–4 weeks`,
  `5–8 pages`) are fine and intentional.

---

## Client forms - unlisted, do not link them

`testimonial/` is the first of several forms Darrin sends to a client **directly**, by
email, once their project ships. It is not part of the marketing site.

- **Never add a form to `nav` in `content.ts`, to the footer columns, or to the sitemap.**
  This is a standing instruction, not an oversight. `robots.txt` disallows `/testimonial/`
  and both pages carry `noindex, nofollow`; the meta is what actually keeps them out of an
  index, the robots rule only stops the crawl.
- Copy lives in `src/data/forms.ts`, the same way `content.ts` works for the main page.
  The n8n webhook URLs live there too.
- The pages share the real design tokens, the theme system and the anti-flash script, so
  they are the same site. They deliberately do **not** use `<Nav />`: there are no section
  anchors to reach from them, and pushing a "Free audit" CTA at someone who has already
  paid reads badly.

**To add a form:** a copy block in `src/data/forms.ts`, a component in `src/forms/`, an
entry file, `<dir>/index.html` + `<dir>/thanks/index.html`, and both registered in
`build.rollupOptions.input` in `vite.config.ts`. Listing any input there replaces Vite's
default, so `index.html` must stay in that map or the whole site stops building.

### How a submission travels

The build is static with no backend, so the browser posts JSON straight to n8n, and on a
2xx it redirects to the thank-you page. Consequences worth knowing:

- **The n8n Webhook node needs "Allowed Origins (CORS)" set** to `https://growclientsai.com`.
  A cross-origin POST with a JSON content type triggers a preflight `OPTIONS`; without that
  option the browser rejects the response and the client sees the error state even though
  the workflow may have run. Use the production `/webhook/` path, not `/webhook-test/`,
  which only answers while the n8n canvas is listening.
- **Nothing in the payload is trustworthy.** Validate in the workflow. `meta.elapsedMs` is
  time-on-page and is the useful spam signal: a five-question form completed in three
  seconds is a bot. That check is deliberately *not* done in the browser, where a wrong
  guess would silently bin a real client's testimonial with no record of it.
- The honeypot (`hp-website`) is the one client-side drop. It is named that, rather than
  `website`, because password managers autofill on recognised tokens and would get a real
  client binned.
- Fields are **uncontrolled**. A failed post therefore leaves every answer sitting in the
  DOM as typed, so "try again" is one click and not a retype. Do not convert them to
  controlled inputs without restoring that behaviour.

### `text-base` is not a font size in this repo

`@theme` defines `--color-base`, so Tailwind resolves `text-base` to `color: var(--base)`
and sets **no font size at all**. It is currently harmless only because `.text-content` and
`.text-muted` sort after `.text-base` in the output and win. Use `text-[1rem]` when you
mean 16px. Several `sections/` files still carry the old `text-base`; they render correctly
today, but a change in class ordering would paint that text in the page's own background
colour.

---

## Animation

All GSAP goes through `src/lib/gsap.ts`. **Do not import `gsap` directly in a section** -
use the helpers, which all carry the reduced-motion guard:

- `useGsap(scope, setup)` - scoped `gsap.context`, auto-reverted on unmount
- `revealOnScroll` / `revealOnLoad` - staggered fade-up, `once: true` (no replay on scroll-back)
- `countUp` - proxy-object tween writing to `textContent`
- `marquee` - infinite `xPercent: -50` loop; content must be duplicated exactly once
- `progressBar` - `scaleX` from `transformOrigin: left`
- `splitWords` - wraps words in masked spans for the hero stagger

`prefers-reduced-motion` is handled in two places: every helper above falls back to the
**end state instantly**, and `src/index.css` carries a CSS-level kill switch for transitions.
Both are required - neither alone covers everything.

### Reveals use `fromTo`, never `from`

This one has already cost a live bug, so do not "simplify" it back.

A `gsap.from` tween reads the element's **current** value as its destination. If one is
killed mid-flight and another is created over the same target - a reverted `gsap.context`
racing a re-invoked effect is the usual way in - the second tween captures the stranded
mid-tween value as its end state, animates to it, and *completes* there. The content is then
permanently stuck part-faded, the tween reports success, and nothing logs an error.

That is exactly how the testimonial form shipped stuck at `opacity: 0.4416` with
`translateY(13.4px)`. Those are the same number: `y` was 24, and `24 x (1 - 0.4416) = 13.4`.
Two properties agreeing that precisely is the signature of a completed tween with a corrupted
target, not an interrupted one - worth recognising, because it sends you looking at
ScrollTrigger `start`/`end` values that have nothing to do with it (`revealOnLoad` has no
ScrollTrigger at all).

Stating the end state explicitly makes the whole failure mode impossible.

### Reveals carry a watchdog

`guaranteeRestingState` in `src/lib/gsap.ts` sets the end state outright if a tween has not
landed by its own end time plus a margin, and disarms the moment the tween completes
normally. A reveal is decorative; what it reveals is not, and a form that a failed animation
can leave invisible is not a cosmetic bug.

Scroll reveals arm on `onStart`, not on creation, because they can legitimately sit unstarted
for minutes until the user scrolls to them. Arming on creation would fire the watchdog early
and skip the animation entirely.

Note the baseline is safe by default: content is visible until GSAP sets `opacity: 0`, so a
GSAP failure *before* the tween is created cannot hide anything.

### Card hover

Cards use the `card-grow` utility (or `card-grow-lift`, which adds a 4px rise, on the pricing
tiers). Both are defined once in `src/index.css` so the amount is tunable in one place, and
both are switched off under `prefers-reduced-motion` - a card that resizes under the cursor
is movement, and killing only the transition would leave it snapping.

**`revealOnScroll` must keep `clearProps: 'transform'`.** Without it GSAP leaves
`transform: translate(0px, 0px)` inline on every element it reveals, and an inline style
outranks the stylesheet - which silently kills the hover on every card, with no error.

---

## Deploy - read before pushing

`.github/workflows/deploy.yml` triggers on **push to `main`**: builds, then SCPs `./dist/`
to `/srv/growclientsai` on Darrin's server and reloads Caddy.

**Pushing to `main` IS deploying to production.** There is no preview or staging environment.
Work on a branch.

Because the site is served as plain static files by Caddy:
- `vite.config.ts` sets `base: './'` so asset paths are relative and work from any directory.
- Anchor navigation only - path-based routing would need a Caddy `try_files` rewrite that
  this repo does not control.
- No backend. Nothing may depend on a server at runtime.

CI runs **Node 20** and installs with `npm ci`, so `package-lock.json` is authoritative and
the deploy is reproducible. It used to delete the lockfile and `npm install`, floating every
dependency on every deploy; don't reintroduce that. It also means **the lockfile must be
committed in step with `package.json`** or the deploy fails at the install step rather than
the build.

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
