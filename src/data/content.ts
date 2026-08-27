/**
 * Every string the site renders lives here. Copy comes from the
 * confirmed Notion doc "GrowClientsAI — Website Copy (Phase 9)"
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
  image?: string;
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
  // Notion copy leaves these bracketed — do not invent contact details.
  email: 'darrin@darrinduncan.com',
  phone: '570-200-5552',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
];

export const hero = {
  // Headline per the Aurelia brief's outline/fill split treatment.
  line1: 'WEBSITES THAT',
  line2: 'WIN LOCAL CLIENTS',
  sub: 'I build and rebuild websites for local service businesses — the kind that make it easier for someone to call, book, or buy, not just look nice.',
  cta: 'Get a free website audit',
  ctaHref: '#contact',
  support: 'A short, specific look at what your current site is costing you — no pitch, no pressure.',
};

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
      'A business with real transactional complexity — online orders, multi-service booking.',
  },
];

export const about = {
  eyebrow: 'WHO WE ARE',
  heading: 'Fifteen years building interfaces for other people’s companies. Now I build them for yours.',
  body: [
    'I’m a frontend engineer and designer with 15+ years bridging the two — before a client ever saw the site, I was the one making sure the design held up and the code behind it did too. I started working directly with local businesses because too many good ones are stuck with a website that looks fine and does nothing: no clear next step, nothing that turns a visitor into a call or a booking.',
    'I build sites the same way I’d build one for a company with a dev team behind it — just without the overhead, and without you needing to know what any of that means.',
  ],
  // Real claims only — both are backed by the Notion About section.
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
 * The `display` figures are real — both come straight from the Notion
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
  { label: 'Typical project turnaround', display: '2–4 weeks', pct: 0, pending: true },
  { label: 'Revision rounds included', display: '2 rounds', pct: 0, pending: true },
];

export const work = {
  eyebrow: 'SELECTED WORK',
  heading: 'Built, launched, and doing a job.',
};

export const projects: Project[] = [
  {
    id: 'afhg',
    name: 'All For His Glory Worship',
    category: 'Ecommerce · WooCommerce',
    kind: 'client',
    blurb:
      'Custom WooCommerce store for a handcrafted worship-flag ministry — product catalog, cart, checkout, and shipping rules built for a small creative business selling physical goods online. Live and taking real orders.',
  },
  {
    id: 'starrmark',
    name: 'StarrMark Solutions',
    category: 'Lead generation · Private capital',
    kind: 'client',
    blurb:
      'Custom-built site for a private capital brokerage serving real estate investors — a regulated, trust-first niche where templates don’t cut it. Built the lead-capture flow that turns a visitor into a qualified deal inquiry.',
  },
  {
    id: 'cedar-sage',
    name: 'Cedar & Sage Spa',
    category: 'Booking · Local service',
    kind: 'concept',
    blurb:
      'Concept build for a local day spa — clear service menu with real pricing, one obvious booking CTA, and copy built to reduce the “should I call or just leave” hesitation local service sites usually create.',
  },
];

export const process = {
  eyebrow: 'HOW IT GOES',
  heading: 'Four steps, no mystery.',
};

/**
 * NOTE — open question flagged to Darrin: the design brief specifies a
 * four-step section (Audit → Plan → Build → Launch); the Notion copy
 * doc lists seven (Discover, Audit, Plan, Design, Build, Launch,
 * Optimize). Rendering the brief's four, using Notion's wording for
 * each. Switching to all seven is a change to this array only — the
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
    detail: 'You get a clear scope and price — no surprises later.',
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
      'Goes live, connected to your domain, forms and booking tested end to end — then I check what’s working and what to improve.',
  },
];

export const contact = {
  eyebrow: 'START HERE',
  heading: 'Tell me about your business — I’ll follow up with next steps.',
  support: 'I respond within one business day.',
  cta: 'Get a free website audit',
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
