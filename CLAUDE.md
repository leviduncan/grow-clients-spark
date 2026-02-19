# CLAUDE.md — Grow Clients Spark

## Project Overview
AI receptionist / lead-gen SaaS landing site for HVAC contractors and other service businesses. The site showcases an AI voice assistant that answers calls, books appointments, and captures leads 24/7.

**Live URL:** growclientsai.com

---

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Routing:** React Router v6
- **Icons:** lucide-react
- **Fonts:** Bebas Neue (headings), Inter (body)

---

## Key Convention: `src/data.ts` is the single source of truth

All content data (copy, lists, steps, FAQs, links, etc.) lives in `src/data.ts`.
Components and pages import named exports from `@/data` — **never hardcode content inline**.

```ts
import { navLinks, homeFaqs } from "@/data";
```

---

## Active Routes (src/App.tsx)

| Route | Page file |
|---|---|
| `/` | `src/pages/Index.tsx` |
| `/how-it-works` | `src/pages/HowItWorksPage.tsx` |
| `/about` | `src/pages/About.tsx` |
| `/demos` | `src/pages/Demos.tsx` |
| `/services` | `src/pages/ServicesPage.tsx` |
| `/pricing` | `src/pages/Pricing.tsx` |
| `/bookademo` | `src/pages/BookADemo.tsx` |
| `/contact` | `src/pages/Contact.tsx` |
| `/privacy` | `src/pages/Privacy.tsx` |
| `/terms` | `src/pages/Terms.tsx` |
| `/thank-you` | `src/pages/ThankYou.tsx` |

---

## Active Components (src/components/)

### Layout
- `Header.tsx` — nav bar (uses `navLinks` from data.ts)
- `Footer.tsx` — main footer (uses `footerLinks`, `socialLinks`)
- `Footer2.tsx` — alternate footer variant
- `ScrollAnimation.tsx` — scroll-triggered fade-in wrapper
- `CTA.tsx` — reusable CTA section (props: title1, title2, sub, cta)

### Homepage Sections (used in Index.tsx)
- `Hero.tsx` — hero section (uses `floatingBadges`, `heroFeatures`)
- `TheProblem.tsx` — problem section (uses `theProblem`)
- `TheSolution.tsx` — solution section (uses `solutionSteps`)
- `HowItWorks.tsx` — how it works preview (uses `howItWorksSteps`)
- `Demo.tsx` — demo talking points (uses `talkingPoints`)
- `PricingPreview.tsx` — pricing teaser (uses `pricingPreviewFeatures`)
- `FAQs.tsx` — FAQ accordion (uses `homeFaqs`)

### Shared
- `LeadForm.tsx` — lead capture form (used in Contact.tsx, BookADemo.tsx)
- `VideoOverlay.tsx` — video player overlay (used in Hero.tsx, TheSolution.tsx)

### UI (shadcn/ui — do not modify)
Located in `src/components/ui/`

---

## data.ts Export Map

| Export | Used by |
|---|---|
| `navLinks` | Header.tsx |
| `floatingBadges`, `heroFeatures` | Hero.tsx |
| `theProblem` | TheProblem.tsx |
| `solutionSteps` | TheSolution.tsx |
| `howItWorksSteps` | HowItWorks.tsx |
| `talkingPoints` | Demo.tsx |
| `pricingPreviewFeatures` | PricingPreview.tsx |
| `homeFaqs` | FAQs.tsx |
| `footerLinks`, `socialLinks` | Footer.tsx |
| `solutionsOfferings` | ServicesPage.tsx |
| `demos` | Demos.tsx |
| `companyValues` | About.tsx |
| `pricingCategories`, `pricingFaqs` | Pricing.tsx |
| `howItWorksPageSteps`, `howItWorksDifferences`, `callExamples` | HowItWorksPage.tsx |
| `demoExpectations` | BookADemo.tsx |

---

## Assets (src/assets/)

- `demo-max.png`, `demo-chloe.png`, `demo-shelley.png` — AI persona photos
- `ai-automation.png`, `team-collaboration.png`, `phone-mockup-dashboard.png` — service section images
- `hvac.png`, `plumber.png`, `electrician.png` — case study images
