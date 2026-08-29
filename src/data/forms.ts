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
  /**
   * The dark closing block. Was called `referral` when the testimonial form
   * was the only one; it is whatever the page should end on, which differs
   * by form. A client who just sent a testimonial can be asked for a
   * referral. A lead who just raised their hand should not be asked for
   * anything at all.
   */
  closing: { heading: string; body: string; cta: string };
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
  leadIntake: 'https://n8n.growclientsai.com/webhook/lead-intake',
};

/** One option in a select. `value` is what the workflow receives. */
export type Choice = { value: string; label: string };

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
   Get started: free audit or consultation

   The one PUBLIC form. Unlike the testimonial form this is meant to be
   found, so /get-started/ is indexable and is not in robots.txt.
   --------------------------------------------------------------- */

export const AUDIT = 'Website Audit';
export const NEW_SITE = 'New Website';

export const getStarted = {
  eyebrow: 'FREE AUDIT OR CONSULT',
  heading: 'Let’s take a look.',
  intro:
    'Free, and there’s no pitch at the end of it. Tell me where you’re starting from and I’ll come back with something specific about your business, not a template.',

  /* The branch. A radio group rather than buttons: it needs to announce as
     one grouped question with a chosen state, and it needs to be reachable
     with arrow keys. Two <button>s and a hidden input give none of that. */
  branch: {
    legend: 'Do you already have a website?',
    options: [
      {
        value: AUDIT,
        label: 'Yes, review it',
        help: 'I’ll go through what you have and tell you what’s costing you calls.',
      },
      {
        value: NEW_SITE,
        label: 'No, I need one',
        help: 'We’ll start from what the business actually needs the site to do.',
      },
    ],
  },

  aboutHeading: 'About you',
  fields: [
    { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
    {
      name: 'business',
      label: 'Business name',
      type: 'text',
      placeholder: 'Optional',
      autoComplete: 'organization',
    },
    { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Optional', autoComplete: 'tel' },
  ] as Field[],

  detailsHeading: 'Your situation',

  /* Both detail textareas are named `details`. Only one is ever rendered,
     so the payload carries a single field and the workflow does not have to
     know which branch produced it. */
  audit: {
    website: {
      name: 'website',
      label: 'Your website address',
      type: 'text' as const,
      placeholder: 'yourbusiness.com',
      required: true,
    },
    details: {
      name: 'details',
      label: 'What’s bugging you about your site?',
      help: 'Whatever made you fill this in. Slow, dated, no calls coming from it, you can’t edit it yourself.',
      rows: 3,
    } as Question,
  },

  newSite: {
    details: {
      name: 'details',
      label: 'Tell me about the business, and what you’re hoping a site does for you.',
      help: 'What you do, who you do it for, and what you’d want someone to do after they land on it.',
      rows: 4,
    } as Question,
  },

  source: {
    name: 'source',
    label: 'How did you hear about me?',
    required: true,
    placeholder: 'Select one',
    options: [
      { value: 'Face-to-face', label: 'Talked to Darrin in person' },
      { value: 'Facebook', label: 'Facebook' },
      { value: 'Instagram', label: 'Instagram' },
      { value: 'Word of mouth / Referral', label: 'A friend or someone referred me' },
      { value: 'Other', label: 'Other' },
    ] as Choice[],
  },

  note: 'No cost and no obligation. If I don’t think I’m the right fit for what you need, I’ll tell you that instead of selling you something.',

  submit: 'Send it over',
  submitting: 'Sending',
  error:
    'That didn’t go through. Give it one more try, or email me directly and I’ll pick it up from there.',
  /* Shown if they hit submit before choosing a branch. Native validation
     covers this, but the message is worth owning. */
  branchRequired: 'Choose one of the two options above first.',
};

export const getStartedThanks: ThanksCopy = {
  eyebrow: 'RECEIVED',
  heading: 'Got it. Talk soon.',
  body: [
    'Your details are with me, and I read these myself rather than routing them to anyone.',
    'What happens next: I go through what you sent and come back with something specific. If you asked for a review, that means the actual things costing you calls on your current site, in plain language, not a checklist with a score on it. Expect to hear from me within one business day.',
    'Nothing needed from you in the meantime.',
  ],
  signoff: {
    lead: 'Talk shortly.',
    name: 'Darrin Duncan',
    role: 'GrowClientsAI',
  },

  /* No ask here. Someone who has just raised their hand should not be sold
     to again on the confirmation screen, so this points at the work instead. */
  closing: {
    heading: 'While you wait',
    body: 'If you want a sense of what this looks like finished, the recent work is worth two minutes.',
    cta: 'See recent work',
  },
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
  closing: {
    heading: 'One more thing, only if it’s easy',
    body: 'If you know someone limping along on a site that isn’t bringing them work, send them my way. That’s how most of my projects start.',
    cta: 'Back to growclientsai.com',
  },
};
