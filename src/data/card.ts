/**
 * Copy and contact fields for /card/, the digital business card.
 *
 * Same arrangement as content.ts and forms.ts: every string the page
 * renders comes from here, and the page renders whatever this holds.
 *
 * Phone and email are read off `site` rather than restated, so the card,
 * the footer, the forms and the no-JS fallbacks cannot drift apart. The
 * only contact details written here are the ones that exist nowhere else.
 *
 * /card/ is unlisted in the same sense the client forms are: it is a link
 * Darrin texts, AirDrops or prints as a QR, so it carries a noindex and
 * robots.txt disallows it. Do not add it to `nav` in content.ts or to the
 * footer columns.
 */

import darrinJpg from '@/assets/card/darrin.jpg';
import darrinWebp from '@/assets/card/darrin.webp';
import qrSvg from '@/assets/card/card-qr.svg';
import type { Contact } from '@/lib/vcard';
import { site } from './content';

/**
 * The card's own absolute URL.
 *
 * Duplicated in design-src/card-qr/gen.py, which bakes it into the QR.
 * Keep the two in step: changing it here without regenerating leaves a
 * printed code pointing at the old address, and nothing in the build will
 * tell you, the same way the theme key in index.html has to be kept in
 * sync by hand.
 */
export const CARD_URL = 'https://growclientsai.com/card/';

const SITE_URL = `https://${site.domain}`;

/** Fed straight to the vCard builder. Everything here ends up in a contact app. */
export const contact: Contact = {
  first: 'Darrin',
  last: 'Duncan',
  org: site.name,
  title: 'Web design and build',
  phone: site.phone,
  email: site.email,
  url: SITE_URL,
  uid: CARD_URL,
};

export const card = {
  /* One line, and it has to survive being read by someone who has just met
     him and is deciding whether to keep the contact. So: who it is for and
     what it produces, no adjectives. */
  tagline:
    'Websites for local service businesses, built to turn a visitor into a call or a booking.',

  photo: {
    webp: darrinWebp,
    jpg: darrinJpg,
    alt: 'Darrin Duncan',
  },

  /* The two tap-to-reach rows. Label and value both sit inside the link, so
     the accessible name reads "Phone, +1 656-218-6053" rather than a bare
     string of digits.

     The website is deliberately not a third row here. It is the secondary
     button below, which is the same destination and the same one tap, and
     listing it twice would put two of the three rows on something that is
     not a way of reaching a person. */
  links: [
    { id: 'phone', label: 'Phone', value: site.phone, icon: 'phone' as const },
    { id: 'email', label: 'Email', value: site.email, icon: 'mail' as const },
  ],

  save: {
    label: 'Save contact',
    /* Announced after the download fires. On a phone the jump into Contacts
       is its own confirmation; on a desktop the file lands silently and
       nothing on screen would otherwise change. */
    confirmation: 'Contact card downloaded.',
  },

  /* Relative, with the trailing slash, for the same reason CTA_HREF is in
     content.ts: root-absolute would break the "dist works from any
     directory" guarantee, and dropping the slash costs a Caddy redirect. */
  siteCta: { label: `Visit ${site.domain}`, href: '../' },

  qr: {
    src: qrSvg,
    /* The image is decorative next to this caption, so the caption carries
       the meaning and the img takes an empty alt. */
    caption: 'Scan to open this card',
    hint: 'Point a phone camera at it.',
  },

  /**
   * Social profile.
   *
   * `pending` here means hidden, not chipped: this sits on a card handed to
   * a stranger, where a visible "TBC" reads as unfinished rather than as
   * honest. Set a real `url` and drop `pending` to bring the row in; the
   * page renders nothing at all while this is the state.
   */
  social: [
    { id: 'linkedin', label: 'LinkedIn', url: '', pending: true },
  ],
};
