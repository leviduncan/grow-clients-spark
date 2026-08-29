// Imported rather than referenced by path so Vite hashes them and
// rewrites the URLs against the relative `base`.
import afhgWebp from '@/assets/work/all4hisglory.webp';
import afhgJpg from '@/assets/work/all4hisglory.jpg';
import starrmarkWebp from '@/assets/work/starrmark.webp';
import starrmarkJpg from '@/assets/work/starrmark.jpg';
import cedarSageWebp from '@/assets/work/cedar-sage.webp';
import cedarSageJpg from '@/assets/work/cedar-sage.jpg';

/**
 * Every string the site renders lives here. Copy comes from the
 * confirmed Notion doc "GrowClientsAI, Website Copy (Phase 9)"
 * unless noted otherwise.
 *
 * Anything Darrin still has to supply is marked `pending: true` and
 * renders with a visible [TBC] chip, so a placeholder cannot reach
 * production unnoticed.
 */

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  pending?: boolean;
};

export type Tier = {
  id: string;
  name: string;
  outcome: string;
  includes: string;
  forWho: string;
  featured?: boolean;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  kind: 'client' | 'concept';
  blurb: string;
  /**
   * Live site. Optional: a project with nothing to show yet renders as a
   * plain card rather than a link, so a dead or missing URL can never
   * reach production as a broken portfolio link.
   */
  url?: string;
  /**
   * Optimised screenshot, 800x450 (16:9). WebP is what every current
   * browser fetches; the JPEG is a fallback that in practice is never
   * requested. Omit the field entirely to render the "screenshot
   * pending" slot instead.
   */
  image?: { webp: string; jpg: string };
};

export type Step = {
  n: string;
  name: string;
  detail: string;
};

export type Metric = {
  label: string;
  /** The real, quotable figure. */
  display: string;
  /** Bar fill 0–100. Meaningless until the scale it sits on is defined. */
  pct: number;
  pending?: boolean;
};

export const site = {
  name: 'GrowClientsAI',
  domain: 'growclientsai.com',
  // Notion copy leaves these bracketed. Do not invent contact details.
  email: 'darrin@darrinduncan.com',
  phone: '570-200-5552',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
];

/**
 * The single conversion path. Every primary CTA on the page points here:
 * the nav button, the hero button and the closing block.
 *
 * Relative, and with the trailing slash, on purpose. Root-absolute
 * (`/get-started/`) would work on the live domain but break the "dist works
 * from any directory" guarantee that `base: './'` exists to provide, and
 * Vite does not rewrite hand-written hrefs the way it rewrites assets.
 * Dropping the slash costs a 308 redirect from Caddy on every click.
 *
 * Note the word "audit" is deliberately gone from all three. The page
 * branches on whether the visitor already has a site, so "audit" would
 * quietly tell the no-website half that the offer is not for them before
 * they ever click.
 */
export const CTA_HREF = './get-started/';

/** The nav's button. Kept here rather than hardcoded in Nav.tsx. */
export const navCta = { label: 'Get Started', href: CTA_HREF };

export const hero = {
  /* Headline per the Aurelia brief's outline/fill split treatment: the setup
     line is outlined, the payoff is filled. The payoff is broken across two
     lines so the longest line is short enough for the type to be set large
     (the measure is what caps the size, not the clamp). Re-break these freely
     if the copy changes; Hero.tsx renders whatever the array holds. */
  lines: [
    { text: 'WEBSITES THAT', outline: true },
    { text: 'WIN LOCAL', outline: false },
    { text: 'CLIENTS', outline: false },
  ],
  sub: 'I build and rebuild websites for local service businesses: the kind that make it easier for someone to call, book, or buy, not just look nice.',
  cta: 'Get a Free Website Review',
  ctaHref: CTA_HREF,
  support:
    'A quick, honest look at what’s working and what’s not, whether you already have a site or you’re starting from zero. No pitch, no pressure.',
};

/* `pending` hides the row outright here, it does not render a TBC chip:
   these sit above the fold. Set a real `value` and delete `pending` to
   bring one back; the whole block, rule included, stays hidden until at
   least one of them is real. */
export const heroStats: Stat[] = [
  { label: 'Sites shipped', value: 0, pending: true },
  { label: 'Avg. lead increase', value: 0, suffix: '%', pending: true },
  { label: 'Industries served', value: 0, pending: true },
];

export const marqueeTags = [
  'WEB DESIGN',
  'LOCAL SEO',
  'CONVERSION AUDITS',
  'AI CHAT AGENTS',
  'MAINTENANCE',
];

export const services = {
  eyebrow: 'WHAT WE DO',
  heading: 'Three ways in, depending on what your business actually needs.',
  linkLabel: 'All services',
  linkHref: '#contact',
};

export const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    outcome: 'Exist online properly, and stop losing people on mobile.',
    includes:
      'Single-page or small multi-page site, mobile-responsive, one clear CTA, basic on-page SEO.',
    forWho:
      'A business that just needs to exist online and stop losing people on a bad mobile experience.',
  },
  {
    id: 'core',
    name: 'Core',
    outcome: 'Turn the site into something that actually generates calls and bookings.',
    includes:
      'Full custom site (5–8 pages), booking and contact forms, Google Business Profile alignment, local SEO foundations.',
    forWho:
      'A business that wants the site actually generating calls and bookings, not just informing.',
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    outcome: 'Handle real transactional complexity without duct tape.',
    includes:
      'Everything in Core, plus ecommerce or booking system integration, custom functionality, and ongoing support setup.',
    forWho:
      'A business with real transactional complexity: online orders, multi-service booking.',
  },
];

export const about = {
  eyebrow: 'WHO WE ARE',
  heading: 'Fifteen years building interfaces for other people’s companies. Now I build them for yours.',
  body: [
    'I’m a frontend engineer and designer with 15+ years bridging the two. Before a client ever saw the site, I was the one making sure the design held up and the code behind it did too. I started working directly with local businesses because too many good ones are stuck with a website that looks fine and does nothing: no clear next step, nothing that turns a visitor into a call or a booking.',
    'I build sites the same way I’d build one for a company with a dev team behind it, just without the overhead, and without you needing to know what any of that means.',
  ],
  // Real claims only. Both are backed by the Notion About section.
  credibility: [
    {
      title: '15+ years, design and code',
      detail: 'Not a designer who outsources the build, or a developer who outsources the look.',
    },
    {
      title: 'Direct answers, no agency-speak',
      detail: 'You talk to the person building it. Nobody is managing an account here.',
    },
  ],
};

/**
 * The `display` figures are real. Both come straight from the Notion
 * FAQ. What is NOT settled is what the bar fill measures against: "2–4
 * weeks" is only a bar if there is a stated scale to plot it on, and
 * inventing an industry benchmark to make the bar look good would be
 * exactly the inflated claim the brief rules out. So the figures show
 * and the fills stay flagged until Darrin defines the scale.
 *
 * A third bar (post-launch support window) was dropped: the Notion copy
 * promises "a support window" with no duration, so there is nothing to
 * plot.
 */
export const aboutMetrics: Metric[] = [
  { label: 'Typical project turnaround', display: '2–4 weeks', pct: 60 },
  { label: 'Revision rounds included', display: '2 rounds', pct: 40 },
];

export const work = {
  eyebrow: 'SELECTED WORK',
  heading: 'Built, launched, and doing a job.',
};

export const projects: Project[] = [
  {
    id: 'afhg',
    url: 'https://allforhisgloryworship.com/',
    name: 'All For His Glory Worship',
    category: 'Ecommerce · WooCommerce',
    kind: 'client',
    image: { webp: afhgWebp, jpg: afhgJpg },
    blurb:
      'Custom WooCommerce store for a handcrafted worship-flag ministry: product catalog, cart, checkout, and shipping rules built for a small creative business selling physical goods online. Live and taking real orders.',
  },
  {
    id: 'starrmark',
    url: 'https://starrmarksolutionsllc.com/',
    name: 'StarrMark Solutions',
    category: 'Lead generation · Private capital',
    kind: 'client',
    image: { webp: starrmarkWebp, jpg: starrmarkJpg },
    blurb:
      'Custom-built site for a private capital brokerage serving real estate investors, a regulated, trust-first niche where templates don’t cut it. Built the lead-capture flow that turns a visitor into a qualified deal inquiry.',
  },
  {
    id: 'cedar-sage',
    url: 'https://cedarandsagespa.com/',
    name: 'Cedar & Sage Spa',
    category: 'Booking · Local service',
    kind: 'concept',
    image: { webp: cedarSageWebp, jpg: cedarSageJpg },
    blurb:
      'Concept build for a local day spa: clear service menu with real pricing, one obvious booking CTA, and copy built to reduce the “should I call or just leave” hesitation local service sites usually create.',
  },
];

/**
 * Client testimonials.
 *
 * These come from real people who filled in /testimonial/ and land in the
 * Notion database. Two rules, both non-negotiable:
 *
 * 1. **Verbatim.** Never rewrite, tighten or "improve" someone's words.
 *    Straight quotes may be converted to curly for typographic consistency,
 *    and a cut may be marked with an ellipsis. Nothing else.
 * 2. **Never invent one.** An empty array renders nothing at all: the
 *    section removes itself. That is the correct state until a real quote
 *    arrives, and it is why there is no placeholder here.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  business: string;
  /**
   * Whether this one shows on the site. Keep every quote you receive in the
   * array below, flag the ones worth showing.
   *
   * The section renders at most MAX_FEATURED of them (see Testimonials.tsx),
   * so the archive can grow indefinitely without the page growing with it.
   * If more are flagged than fit, the extras are ignored, in array order, so
   * put the strongest first.
   */
  featured?: boolean;
};

export const testimonials = {
  eyebrow: 'IN THEIR WORDS',
  heading: 'What it’s like on the other side of a project.',
};

/*
  Empty until real quotes arrive. Invitations are out to two clients as of
  2026-08-29; paste theirs in here when they land.

  The section renders nothing at all while this is empty, so an empty array
  is a valid shipped state, not a broken one. Add an entry like:

    {
      id: 'kevin-starrmark',
      quote: 'Verbatim. Do not tighten or improve their words.',
      name: 'Kevin',
      business: 'StarrMark Solutions',
      featured: true,
    }

  Leave `featured` off to keep a quote on record without showing it.
*/
export const testimonialQuotes: Testimonial[] = [];

export const process = {
  eyebrow: 'HOW IT GOES',
  heading: 'Four steps, no mystery.',
};

/**
 * NOTE: open question flagged to Darrin: the design brief specifies a
 * four-step section (Audit → Plan → Build → Launch); the Notion copy
 * doc lists seven (Discover, Audit, Plan, Design, Build, Launch,
 * Optimize). Rendering the brief's four, using Notion's wording for
 * each. Switching to all seven is a change to this array only. The
 * section renders whatever it is given.
 */
export const steps: Step[] = [
  {
    n: '01',
    name: 'Audit',
    detail:
      'I review what you have now (or the gap if you have nothing) and flag the 2–3 things costing you leads.',
  },
  {
    n: '02',
    name: 'Plan',
    detail: 'You get a clear scope and price. No surprises later.',
  },
  {
    n: '03',
    name: 'Build',
    detail:
      'Layout and look, built around one job: turning visitors into calls or bookings. Then built and tested on mobile and desktop.',
  },
  {
    n: '04',
    name: 'Launch',
    detail:
      'Goes live, connected to your domain, forms and booking tested end to end. Then I check what’s working and what to improve.',
  },
];

export const contact = {
  eyebrow: 'START HERE',
  heading: 'Tell me about your business, and I’ll follow up with next steps.',
  support: 'I respond within one business day.',
  cta: 'Get a Free Website Review',
  ctaHref: CTA_HREF,
};

export const footer = {
  // Giant outline-text background element.
  outlineText: 'GROW CLIENTS AI',
  tagline: 'Websites for local service businesses.',
  columns: [
    {
      title: 'Site',
      links: nav,
    },
    {
      title: 'Services',
      links: [
        { label: 'Starter', href: '#services' },
        { label: 'Core', href: '#services' },
        { label: 'Premium', href: '#services' },
      ],
    },
  ],
};

/**
 * Testimonials are deliberately absent. Requests are out to Kevin
 * (StarrMark Solutions) and Wandi (All For His Glory Worship); the
 * section gets built when real quotes come back. Do not ship
 * placeholder testimonial cards.
 */
