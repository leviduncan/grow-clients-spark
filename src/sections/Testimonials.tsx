import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { testimonialQuotes, testimonials } from '@/data/content';

/**
 * How many quotes reach the page, however many are flagged `featured`.
 *
 * Three, and deliberately not a carousel. A testimonial's whole job is to be
 * read by someone deciding whether to call. Anything parked behind an arrow
 * mostly is not read, so eight quotes in a carousel deliver less proof than
 * three sitting in the open, while adding interaction state, keyboard and
 * screen-reader obligations, and a mobile swipe surface to get right.
 *
 * The answer to "I will have too many" is to curate, not to hide: the array
 * in content.ts is the archive and keeps every quote, this is the shopfront.
 * Raising this past 4 makes the section a wall of text that gets skimmed
 * instead of read, which is the same failure by a different route.
 */
const MAX_FEATURED = 3;

/** Keyed by how many are shown. Full literal strings so Tailwind sees them. */
const GRID: Record<number, string> = {
  1: 'max-w-4xl',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
};

/**
 * Client quotes, straight from the /testimonial/ form.
 *
 * Renders nothing when nothing is featured: no heading, no empty state, no
 * "testimonials coming soon". A section that announces it has no social
 * proof is worse than no section, and it is what keeps the placeholder rule
 * in content.ts enforceable rather than aspirational.
 *
 * Sits inside the About/Work base run and so carries no top padding, the
 * same way Work doesn't: Work's own bottom padding is the gap.
 */
export default function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnScroll('[data-testimonial-reveal]', { trigger: root.current!, stagger: 0.1 });
  });

  const shown = testimonialQuotes.filter((t) => t.featured).slice(0, MAX_FEATURED);
  if (shown.length === 0) return null;

  // A lone quote gets the full measure and larger type. Two columns with one
  // card in them reads as a card that failed to load.
  const solo = shown.length === 1;

  return (
    <section
      id="testimonials"
      ref={root}
      className="theme-fade bg-base-veil pb-20 md:pb-28 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p
          data-testimonial-reveal
          className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
        >
          {testimonials.eyebrow}
        </p>

        <h2
          data-testimonial-reveal
          className="mt-5 max-w-3xl font-display text-3xl leading-[1.1] text-content sm:text-4xl lg:text-5xl"
        >
          {testimonials.heading}
        </h2>

        {/* Literal class strings, never built by concatenation: Tailwind
            scans source statically, so `'lg:grid-cols-' + n` produces a
            class it never generates and the grid silently stays one column.

            1 takes the full measure, 2 split, 3 go to thirds from lg and
            stay two-up at md so a third card is never orphaned mid-layout. */}
        <div className={`mt-12 grid gap-6 ${GRID[shown.length] ?? GRID[3]}`}>
          {shown.map((t) => (
            <figure
              key={t.id}
              data-testimonial-reveal
              className="rounded-3xl border border-hairline bg-card p-8 md:p-10"
            >
              {/* Decorative quote mark. aria-hidden because <blockquote>
                  already conveys that this is a quotation. */}
              <svg
                width="34"
                height="26"
                viewBox="0 0 34 26"
                fill="currentColor"
                aria-hidden="true"
                className="text-ember"
              >
                <path d="M0 26V14.3C0 6.4 4.6 1.1 13.1 0l1.3 4.9c-4.6 1-6.9 3.5-6.9 7.2h6.2V26H0Zm19.4 0V14.3C19.4 6.4 24 1.1 32.5 0l1.3 4.9c-4.6 1-6.9 3.5-6.9 7.2h6.2V26H19.4Z" />
              </svg>

              <blockquote
                className={`mt-6 leading-relaxed text-content ${
                  solo ? 'text-lg md:text-xl' : 'text-[1.0625rem]'
                }`}
              >
                <p>{t.quote}</p>
              </blockquote>

              <figcaption className="mt-8 border-t border-hairline pt-6">
                {/* text-[1rem], not text-base: this repo defines a --color-base
                    token, so `text-base` compiles to a colour and sets no size. */}
                <span className="font-display text-[1rem] text-content">{t.name}</span>
                <span className="mt-1 block text-sm text-faint">{t.business}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
