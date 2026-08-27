import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { services, tiers } from '@/data/content';

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnScroll('[data-service-head]', { trigger: root.current!, stagger: 0.1 });
    revealOnScroll('[data-service-card]', { trigger: '[data-service-grid]', stagger: 0.12 });
  });

  return (
    <section id="services" ref={root} className="bg-ink py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p
              data-service-head
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ember"
            >
              {services.eyebrow}
            </p>
            <h2
              data-service-head
              className="mt-4 font-display text-3xl uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl"
            >
              {services.heading}
            </h2>
          </div>

          <a
            data-service-head
            href={services.linkHref}
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-ember"
          >
            {services.linkLabel}
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

        {/* 3-across only from lg: at 768 it gives ~230px columns, too narrow
            for the tier copy to read as anything but two-word lines. */}
        <div
          data-service-grid
          className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3 lg:gap-6"
        >
          {tiers.map((tier) => (
            <article
              key={tier.id}
              data-service-card
              className={`flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${
                tier.featured
                  ? 'bg-ember text-ink'
                  : 'bg-ink-soft text-white ring-1 ring-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl uppercase md:text-3xl">{tier.name}</h3>
                {tier.featured && (
                  <span className="shrink-0 rounded-full bg-ink/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                    Most common
                  </span>
                )}
              </div>

              <p
                className={`mt-4 text-base leading-relaxed ${
                  tier.featured ? 'text-ink/80' : 'text-white/70'
                }`}
              >
                {tier.outcome}
              </p>

              <p
                className={`mt-6 border-t pt-6 text-sm leading-relaxed ${
                  tier.featured ? 'border-ink/20 text-ink/75' : 'border-white/10 text-white/55'
                }`}
              >
                {tier.includes}
              </p>

              <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                <p
                  className={`max-w-[16rem] text-xs leading-relaxed ${
                    tier.featured ? 'text-ink/65' : 'text-white/45'
                  }`}
                >
                  <span className="mb-1 block font-semibold uppercase tracking-widest">For</span>
                  {tier.forWho}
                </p>

                <a
                  href="#contact"
                  aria-label={`Ask about the ${tier.name} tier`}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                    tier.featured
                      ? 'bg-ink text-ember hover:bg-ink-soft'
                      : 'bg-ember text-ink hover:bg-ember-dim'
                  }`}
                >
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
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
