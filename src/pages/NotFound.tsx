import { useRef } from 'react';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import { notFound } from '@/data/content';

/** Numeral size. Shared by the type and by the card's overlap maths. */
const NUMERALS = 'clamp(9rem, 32vw, 26rem)';

/**
 * How far the card rides up over the numerals, as a fraction of their font
 * size. This is the one number to turn if the overlap looks wrong.
 *
 * It is 0.28 rather than 0.25 for "cover the bottom quarter" because
 * `leading-none` makes the line box exactly one em tall while the digits
 * themselves only fill the cap height inside it, sitting a little above the
 * bottom edge. Pulling up a flat 0.25em would clear the glyphs and leave a
 * visible gap under them.
 */
const OVERLAP = 0.28;

/**
 * 404, after the supplied reference: oversized fading numerals with a
 * frosted card over their lower edge.
 *
 * The reference was dark-only, so the gradient is built from tokens and
 * fades to `transparent` instead of to a colour, reading as cream
 * dissolving into the dark ground or slate dissolving into the paper with
 * no per-theme override. See .text-fade-out in index.css.
 *
 * The card is `bg-card/75`, heavier than the reference's glass. Its
 * backdrop is the numerals, which are high contrast, and real body copy has
 * to stay legible over them in both themes. The Nav gets away with /65
 * because it only ever carries short link labels.
 *
 * The numerals are aria-hidden and the <h1> carries the message: a screen
 * reader announcing "404" ahead of the sentence explaining it is noise, and
 * the digits are decoration here, not content.
 */
export default function NotFound() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnLoad('[data-404-reveal]', { stagger: 0.12, y: 20 });
  });

  return (
    <section ref={root} className="px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      {/* max-w-7xl: the same measure every section of the homepage uses. */}
      <div className="mx-auto max-w-7xl">
        <p
          aria-hidden="true"
          data-404-reveal
          className="text-fade-out select-none text-center font-display leading-none tracking-tight"
          style={{ fontSize: NUMERALS }}
        >
          {notFound.code}
        </p>

        {/* `relative` is load-bearing, not decoration. Both boxes are in
            flow, and CSS paints the inline content of every block above the
            backgrounds of later blocks: unpositioned, the numerals' glyphs
            would render on top of the card's own background and the frost
            would do nothing. Positioning the card lifts it into the
            positioned-descendants paint phase, above that text. */}
        <div
          data-404-reveal
          className="relative mx-auto max-w-lg rounded-3xl border border-hairline bg-card/75 p-8 text-center shadow-2xl backdrop-blur-2xl backdrop-saturate-150 md:p-10"
          style={{ marginTop: `calc(${NUMERALS} * -${OVERLAP})` }}
        >
          <h1 className="font-display text-2xl leading-tight text-content sm:text-3xl">
            {notFound.heading}
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-[1.0625rem] leading-relaxed text-muted">
            {notFound.body}
          </p>

          <a
            href="/"
            className="group mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-ember px-7 text-[1rem] font-semibold text-on-ember transition-colors hover:bg-ember-dim"
          >
            {notFound.cta}
            <svg
              width="18"
              height="18"
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
      </div>
    </section>
  );
}
