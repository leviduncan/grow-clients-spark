/**
 * Copy and configuration for the client-facing forms.
 *
 * These pages are deliberately unlisted. Darrin sends the link to a client
 * directly once their project ships, so nothing here is reachable from the
 * nav, the footer, or the sitemap, and every form page carries a noindex.
 * Do not add them to `nav` in content.ts.
 *
 * Copy lives in data rather than in the components, the same way
 * src/data/content.ts works for the marketing page. To add a form: a copy
 * block here, a component in src/forms/, an entry pair in vite.config.ts.
 */

export type Question = {
  /**
   * Key this answer lands under in the webhook payload's `answers` object.
   * Renaming one changes the shape n8n receives, so treat it as a contract.
   */
  name: string;
  label: string;
  help?: string;
  required?: boolean;
  rows?: number;
};

/** Shape src/forms/ThankYou.tsx renders. Every form gets one of these. */
export type ThanksCopy = {
  eyebrow: string;
  heading: string;
  body: string[];
  signoff: { lead: string; name: string; role: string };
  referral: { heading: string; body: string; cta: string };
};

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

/**
 * n8n production webhook URLs, one per form.
 *
 * The site is static with no backend, so the browser posts to n8n directly.
 * That is a cross-origin POST with a JSON content type, which means the
 * browser sends a preflight OPTIONS first: the Webhook node needs
 * "Allowed Origins (CORS)" set to https://growclientsai.com or the request
 * fails before the workflow ever runs. A test URL (/webhook-test/) only
 * answers while the canvas is listening, so keep these on /webhook/.
 */
export const endpoints = {
  testimonial: 'https://n8n.growclientsai.com/webhook/testimonial',
};

/* ---------------------------------------------------------------
   Testimonial request
   --------------------------------------------------------------- */

export const testimonial = {
  eyebrow: 'A QUICK FAVOR',
  heading: 'Five minutes, in your own words.',
  intro:
    'Now that your site is live, the most useful thing I can have is a few honest sentences from you. Not a rating out of five: just what it was like, and what changed. Skip anything that doesn’t apply.',

  /** Who it came from. Kept short on purpose, the answers are the point. */
  aboutHeading: 'About you',
  fields: [
    {
      name: 'name',
      label: 'Your name',
      type: 'text',
      required: true,
      autoComplete: 'name',
    },
    {
      name: 'business',
      label: 'Business or project name',
      type: 'text',
      placeholder: 'e.g. StarrMark Solutions',
      autoComplete: 'organization',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Optional',
      autoComplete: 'tel',
    },
  ] as Field[],

  questionsHeading: 'How it went',
  questions: [
    {
      name: 'before',
      label:
        'What was going on with your website, or lack of one, before we worked together?',
      required: true,
      rows: 3,
    },
    {
      name: 'goal',
      label: 'What did you need the new site to actually do for your business?',
      required: true,
      rows: 3,
    },
    {
      name: 'result',
      label: 'What changed after it launched?',
      help: 'Anything you can point to: calls, orders, time saved, how it looks to a customer who’s deciding.',
      rows: 3,
    },
    {
      name: 'advice',
      label:
        'What would you say to another owner sitting on the fence about a new site?',
      rows: 3,
    },
    {
      name: 'extra',
      label: 'Anything about working together a future client should know?',
      help: 'Also the place to tell me if you’d rather I used a first name only, or left your name off entirely.',
      rows: 3,
    },
  ] as Question[],

  /* A real commitment, not a disclaimer. Honour it. */
  note: 'If I want to quote any of this on growclientsai.com, I’ll send you the exact wording first. Nothing goes up that you haven’t seen.',

  submit: 'Send it over',
  submitting: 'Sending',
  error:
    'That didn’t go through. Give it one more try, or just reply to my email with your answers and I’ll take it from there.',
};

/* ---------------------------------------------------------------
   Testimonial thank you
   --------------------------------------------------------------- */

export const testimonialThanks: ThanksCopy = {
  eyebrow: 'RECEIVED',
  heading: 'Got it. Thank you.',
  body: [
    'That’s the one thing almost nobody gets around to, so I don’t take it lightly. It landed the second you hit send, and I read these myself.',
    'A few honest lines from someone who actually hired me does more work than anything I could write about my own work. It’s the difference between a stranger wondering whether I’m any good and a stranger picking up the phone.',
    'If I end up quoting you, you’ll see the exact wording before it goes anywhere near the site.',
  ],
  signoff: {
    lead: 'Genuinely, thank you.',
    name: 'Darrin Duncan',
    role: 'GrowClientsAI',
  },

  /* The soft ask. Last thing on the page, phrased so ignoring it costs
     nothing: this is a thank you, not a second request. */
  referral: {
    heading: 'One more thing, only if it’s easy',
    body: 'If you know someone limping along on a site that isn’t bringing them work, send them my way. That’s how most of my projects start.',
    cta: 'Back to growclientsai.com',
  },
};
