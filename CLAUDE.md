# CLAUDE.md — Grow Clients Spark

## Project Overview
AI receptionist / lead-gen SaaS landing site for HVAC contractors and other service businesses. The site showcases an AI voice assistant that answers calls, books appointments, and captures leads 24/7.

**Live URL:** growclientsai.com

---

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 + shadcn/ui components (copied into `src/components/ui/`)
- **Routing:** Custom hash-based router in `App.tsx` (no `react-router-dom` — see Routing section)
- **Animation:** Framer Motion v12 (`motion` package, imported from `motion/react`)
- **Icons:** lucide-react
- **Fonts:** Bebas Neue (headings), Inter (body)

---

## Routing

`App.tsx` uses a **custom hash-based router** — there is no `react-router-dom` in this project.
A `currentPage` state variable drives a `switch` statement, and `window.location.hash` keeps
the URL in sync. All navigation calls `handlePageChange(page: Page)`, which sets state,
updates the hash, and scrolls to top.

The `Page` type is defined in `src/components/UI.tsx`:
```ts
export type Page = 'home' | 'how-it-works' | 'pricing' | 'book-a-demo' | 'privacy' | 'terms';
```

| Hash / page value  | Component rendered                                      |
|--------------------|---------------------------------------------------------|
| `home` (default)   | `src/components/Home.tsx`                               |
| `how-it-works`     | `src/components/HowItWorks.tsx`                         |
| `pricing`          | `src/components/Pricing.tsx`                            |
| `book-a-demo`      | `src/components/BookADemo.tsx`                          |
| `privacy`          | `src/components/Legal.tsx` (prop `type="privacy"`)      |
| `terms`            | `src/components/Legal.tsx` (prop `type="terms"`)        |
| _(anything else)_  | `src/components/NotFound.tsx`                           |

---

## Active Components (`src/components/`)

### Layout / Shell
- `Navbar.tsx` — top nav bar with dark mode toggle (imported by `App.tsx`)
- `Footer.tsx` — main footer (uses `footerLinks`, `socialLinks`)
- `Footer2.tsx` — alternate footer variant
- `Logo.tsx` — logo component
- `UI.tsx` — shared primitive components (`Button`, `Section`, `Badge`, `Card`) and the `Page` type
- `ScrollAnimation.tsx` — scroll-triggered fade-in wrapper
- `VideoOverlay.tsx` — video player modal overlay
- `CTA.tsx` — reusable CTA section (props: title1, title2, sub, cta)

### Page Components (wired in `App.tsx`)
- `Home.tsx` — homepage; renders `Hero`, `DemoBar`, and several inline sections
  (Problem, Solution, How It Works preview, Pricing preview, Final CTA are all **inlined**,
  not separate component imports)
- `HowItWorks.tsx` — full "How It Works" page
- `Pricing.tsx` — full pricing page
- `BookADemo.tsx` — demo booking page
- `Legal.tsx` — renders Privacy Policy or Terms of Service based on a `type` prop
- `NotFound.tsx` — 404 fallback

### Sub-components (used within page components)
- `Hero.tsx` — above-the-fold hero (imported by `Home.tsx`)
- `DemoBar.tsx` — live demo phone number bar (imported by `Home.tsx`)
- `LeadForm.tsx` — lead capture form (used in `BookADemo.tsx`)

### UI Primitives (shadcn/ui — do not modify)
Located in `src/components/ui/`

---

## How to make copy changes

**`src/data.ts` is the file to edit** for structured content: pricing features, FAQ lists,
step definitions, call examples, footer links, and demo talking points. Find the named export
and change it there.

| What you want to change | Export to edit in `data.ts` |
|---|---|
| Pricing features / FAQs | `pricingCategories`, `pricingFaqs` |
| How It Works steps | `howItWorksPageSteps` |
| Demo phone number | `demoTalkingPointsCTA`, `footer2Phone` |
| Homepage FAQs | `homeFaqs` |
| Footer links | `footerLinks`, `socialLinks` |

**Exception — `Home.tsx` hardcodes its own content inline.** The Problem section, Solution
section, Pricing preview, and Final CTA on the homepage do not read from `data.ts`. Copy
changes to those sections must be made directly in `Home.tsx`. Don't import from `data.ts`
for new Home sections unless you also migrate the existing inline content — don't mix both.

---

## data.ts Export Map

| Export | Used by |
|---|---|
| `navLinks` | `Navbar.tsx` |
| `floatingBadges`, `heroFeatures`, `heroCTA`, `heroBottomText` | `Hero.tsx` |
| `theProblem`, `theProblemHeader`, `theProblemHowMuch` | `TheProblem.tsx` _(see Gotchas)_ |
| `solutionSteps`, `solutionStepsHeader` | `TheSolution.tsx` _(see Gotchas)_ |
| `howItWorksSteps`, `howItWorksStepsHeader` | `HowItWorks.tsx` |
| `demoTalkingPoints`, `demoTalkingPointsHeader`, `demoTalkingPointsCTA` | `Demo.tsx` _(see Gotchas)_ |
| `pricingPreviewFeatures` | `PricingPreview.tsx` _(see Gotchas)_ |
| `homeFaqs` | `FAQs.tsx` |
| `footerLinks`, `socialLinks` | `Footer.tsx` |
| `footer2Phone` | `Footer2.tsx` |
| `solutionsOfferings` | `src/pages/ServicesPage.tsx` _(legacy — not a live route)_ |
| `demos` | `src/pages/Demos.tsx` _(legacy — not a live route)_ |
| `companyValues` | `src/pages/About.tsx` _(legacy — not a live route)_ |
| `pricingCategories`, `pricingFaqs` | `Pricing.tsx` |
| `howItWorksPageSteps`, `howItWorksDifferences`, `callExamples` | `src/pages/HowItWorksPage.tsx` _(legacy)_ |
| `demoExpectations` | `BookADemo.tsx` |

---

## Gotchas

### `src/pages/` — legacy directory, do not edit

A `src/pages/` directory exists with files matching every old route: `Index.tsx`,
`HowItWorksPage.tsx`, `About.tsx`, `Demos.tsx`, `ServicesPage.tsx`, `Pricing.tsx`,
`BookADemo.tsx`, `Contact.tsx`, `Privacy.tsx`, `Terms.tsx`, `ThankYou.tsx`.

**None of these are wired up in `App.tsx`.** They are from a previous React Router-based
architecture. The live routing and all active page rendering is in `src/components/`.
Do not edit `src/pages/` files — changes there will not appear on the site.

### `Header.tsx` — legacy nav, superseded by `Navbar.tsx`

`src/components/Header.tsx` exists but `App.tsx` imports `Navbar` from `./components/Navbar`.
`Header.tsx` is not active.

### Standalone section components may be unused

`TheProblem.tsx`, `TheSolution.tsx`, `Demo.tsx`, `PricingPreview.tsx`, and `FinalCTA.tsx`
exist in `src/components/` but their content has been inlined into `Home.tsx` directly.
Before editing them, grep for imports to confirm they're actually in use.

---

## Assets (`src/assets/`)

- `demo-max.png`, `demo-chloe.png`, `demo-shelley.png` — AI persona photos
- `ai-automation.png`, `team-collaboration.png`, `phone-mockup-dashboard.png` — service section images
- `hvac.png`, `plumber.png`, `electrician.png` — trade industry images
- `Phone.png`, `Riley.png` — AI receptionist persona images (used in `Home.tsx`)
- `logo-blk.png`, `logo-wht.png` — logo variants for light/dark mode


### Technical Architecture

**System Architecture:**
```
Incoming Call → Twilio → Vapi (AI Voice Agent)
                              ↓
                    [Dual Mode: Live / Demo]
                              ↓
                    n8n Webhook (end-of-call-report only)
                              ↓
              ┌───────────────┼───────────────┐
              ↓               ↓               ↓
        Google Sheets    Appointment      SMS Follow-up
        (Call Log)       Booking          (Missed Call
                         (Google Cal)      Text-Back)
                              ↓
                        Telegram Alert
                        (to Darrin)
```

**Critical Technical Knowledge:**
- **VAPI webhook architecture:** Server URL sends multiple event types throughout a call lifecycle. Only `end-of-call-report` contains complete data. Use an IF node in n8n to filter for this event type only.
- **Duplicate webhook prevention:** Never configure both a VAPI Server URL and a custom tool to POST to the same n8n endpoint — this causes duplicate entries.
- **A2P 10DLC:** Required for SMS campaigns. Registration process: business profile → brand → campaign → phone number assignment. Already drafted Privacy Policy and ToS.
- **n8n MCP Server:** Available at `https://n8n.growclientsai.com/mcp-server/http` for programmatic workflow interaction.

**When Darrin asks for technical help:**
- Follow the **WAT framework**: Check for existing workflows/tools first, build new only when needed.
- Produce production-ready code and configurations, not pseudocode or concepts.
- Document edge cases, error handling, and failure modes in every solution.
- If a solution involves paid API calls, flag the cost before running.

---