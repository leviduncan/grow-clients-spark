import { useRef } from 'react';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import type { ThanksCopy } from '@/data/forms';

/**
 * Generic confirmation page. Every form redirects to one of these on a 2xx
 * from its webhook, so the copy comes in as a prop and the layout is shared.
 *
 * A real page rather than an inline success state, because the redirect is
 * also the receipt: the client can see the URL changed, and a refresh does
 * not resubmit or drop them back onto a form they have already filled in.
 */
export default function ThankYou({
  copy,
  homeHref,
}: {
  copy: ThanksCopy;
  homeHref: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGsap(root, () => {
    revealOnLoad('[data-thanks-reveal]', { stagger: 0.1, y: 24 });
  });

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-16 pt-6 md:px-8 md:pt-10" ref={root}>
      <span
        data-thanks-reveal
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-on-ember"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 12.5 5.5 5.5L20 7" />
        </svg>
      </span>

      <p
        data-thanks-reveal
        className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
      >
        {copy.eyebrow}
      </p>

      <h1
        data-thanks-reveal
        className="mt-4 font-display text-3xl leading-[1.1] text-content sm:text-4xl"
      >
        {copy.heading}
      </h1>

      <div data-thanks-reveal className="mt-6 flex flex-col gap-5">
        {copy.body.map((para) => (
          <p key={para.slice(0, 24)} className="text-[1.0625rem] leading-relaxed text-muted">
            {para}
          </p>
        ))}
      </div>

      <div data-thanks-reveal className="mt-10 border-t border-hairline pt-8">
        <p className="text-[1.0625rem] text-content">{copy.signoff.lead}</p>
        <p className="mt-3 font-display text-xl text-content">{copy.signoff.name}</p>
        <p className="mt-1 text-sm text-faint">{copy.signoff.role}</p>
      </div>

      {/* Closing block borrowed from the Contact CTA on the main page:
          always-dark `feature` ground with the ember bloom behind it, so the
          page ends on something that reads as the same site. */}
      <div
        data-thanks-reveal
        className="relative mt-12 overflow-hidden rounded-3xl bg-feature px-6 py-10 md:px-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember/20 blur-[100px]"
        />

        <div className="relative">
          <h2 className="font-display text-xl text-on-feature">{copy.referral.heading}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-on-feature/70">
            {copy.referral.body}
          </p>

          <a
            href={homeHref}
            className="group mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ember px-6 text-sm font-semibold text-on-ember transition-colors hover:bg-ember-dim"
          >
            {copy.referral.cta}
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
      </div>
    </div>
  );
}
