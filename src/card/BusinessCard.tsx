import { useRef } from 'react';
import { card, contact } from '@/data/card';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import { telDigits } from '@/lib/vcard';
import SaveContactButton from './SaveContactButton';

/**
 * The digital business card at /card/.
 *
 * Built for the phone it will almost always be opened on, one screen of
 * content, one primary action. The header block is centred rather than
 * left-aligned like the forms: this is a card someone was handed, and the
 * measure is short enough that centring reads as deliberate instead of as
 * a wide paragraph pushed to the middle.
 *
 * Everything visible comes from src/data/card.ts.
 */

const ICONS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
};

/** tel: and mailto: are derived, never stored, so there is one phone number. */
function hrefFor(link: (typeof card.links)[number]): string {
  return link.icon === 'phone' ? `tel:${telDigits(link.value)}` : `mailto:${link.value}`;
}

export default function BusinessCard() {
  const root = useRef<HTMLDivElement>(null);
  const social = card.social.filter((s) => !s.pending && s.url);

  useGsap(root, () => {
    revealOnLoad('[data-card-reveal]', { stagger: 0.08, y: 20 });
  });

  return (
    <div ref={root} className="mx-auto w-full max-w-md px-5 pb-16 pt-2 md:px-8 md:pt-4">
      <div className="text-center">
        {/* Rounded square, not a circle: the site's whole vocabulary is
            rounded rectangles, and the source frame is tight enough over
            the top of his head that a circle would crop into it. */}
        <picture>
          <source srcSet={card.photo.webp} type="image/webp" />
          <img
            data-card-reveal
            src={card.photo.jpg}
            alt={card.photo.alt}
            width={400}
            height={400}
            className="mx-auto h-28 w-28 rounded-2xl object-cover ring-1 ring-hairline sm:h-32 sm:w-32"
          />
        </picture>

        <p
          data-card-reveal
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
        >
          {contact.org}
        </p>

        <h1
          data-card-reveal
          className="mt-3 font-display text-3xl leading-[1.1] text-content sm:text-4xl"
        >
          {contact.first} {contact.last}
        </h1>

        <p
          data-card-reveal
          className="mx-auto mt-4 max-w-sm text-[1.0625rem] leading-relaxed text-lede"
        >
          {card.tagline}
        </p>
      </div>

      {/* bg-card on the page's base ground, the same reasoning as the form
          controls: it reads as a distinct panel in both themes without a
          per-theme override. */}
      <ul
        data-card-reveal
        className="mt-9 overflow-hidden rounded-2xl border border-hairline bg-card"
      >
        {card.links.map((link) => (
          <li key={link.id} className="border-b border-hairline last:border-b-0">
            <a
              href={hrefFor(link)}
              className="flex min-h-16 items-center gap-4 px-4 py-3 transition-colors hover:bg-base"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember-text"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[link.icon]}
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
                  {link.label}
                </span>
                <span className="mt-0.5 block wrap-break-word text-[1rem] font-medium text-content">
                  {link.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div data-card-reveal className="mt-6">
        <SaveContactButton
          contact={contact}
          label={card.save.label}
          confirmation={card.save.confirmation}
        />

        <a
          href={card.siteCta.href}
          className="group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full border border-hairline bg-card px-6 text-[1rem] font-semibold text-content transition-colors hover:border-muted/40"
        >
          {card.siteCta.label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Nothing renders until a real profile URL lands: see src/data/card.ts. */}
      {social.length > 0 && (
        <ul data-card-reveal className="mt-6 flex justify-center gap-4">
          {social.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-ember-text"
              >
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* bg-sheet, not bg-card: a QR has to stay dark-on-light in both
          themes or a scanner is being asked to read an inverted code. See
          the token in src/index.css. */}
      <div data-card-reveal className="mt-12 flex flex-col items-center">
        <div className="rounded-2xl bg-sheet p-4 ring-1 ring-hairline">
          <img
            src={card.qr.src}
            alt=""
            width={160}
            height={160}
            className="block h-40 w-40"
          />
        </div>
        <p className="mt-4 text-sm font-medium text-content">{card.qr.caption}</p>
        <p className="mt-1 text-xs text-faint">{card.qr.hint}</p>
      </div>
    </div>
  );
}
