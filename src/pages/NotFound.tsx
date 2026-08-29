import { useRef } from 'react';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import { notFound } from '@/data/content';

/**
 * 404, after the reference design: oversized fading numerals with a frosted
 * card sitting over their lower half.
 *
 * Two things had to change coming from that reference, which was dark-only:
 *
 * - The gradient is built from tokens and fades to `transparent`, so it
 *   reads as cream dissolving into the dark ground OR slate dissolving into
 *   the paper, with no per-theme override. See .text-fade-out in index.css.
 * - The card is `bg-card/75`, not the much thinner glass the reference uses.
 *   Its backdrop is the numerals themselves, which are high contrast, and
 *   real body copy has to stay readable over them in both themes. The Nav's
 *   /65 works because it only ever carries short link labels.
 *
 * The numerals are aria-hidden and the <h1> carries the actual message: a
 * screen reader announcing "404" before the sentence explaining it is
 * noise, and the digits are decoration here, not content.
 */
export default function NotFound() {
  const root = useRef<HTMLDivElement>(null);

  useGsap(root, () => {
    revealOnLoad('[data-404-reveal]', { stagger: 0.12, y: 20 });
  });

  return (
    <div
      ref={root}
      className="relative flex min-h-[72vh] items-center justify-center px-5 py-16 md:px-8"
    >
      {/* Absolutely positioned rather than in flow, so the card overlaps it
          without a negative margin that would need re-tuning at every
          breakpoint the clamp crosses. Nudged up so the card lands over the
          lower half, as in the reference, rather than dead centre. */}
      <p
        aria-hidden="true"
        data-404-reveal
        className="text-fade-out pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display leading-none tracking-tight"
        style={{ fontSize: 'clamp(9rem, 30vw, 22rem)', transform: 'translateY(-9%)' }}
      >
        {notFound.code}
      </p>

      <div
        data-404-reveal
        className="relative w-full max-w-lg rounded-3xl border border-hairline bg-card/75 p-8 text-center shadow-2xl backdrop-blur-2xl backdrop-saturate-150 md:p-10"
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
  );
}
