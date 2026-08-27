import { useRef } from 'react';
import { gsap, progressBar, revealOnScroll, useGsap } from '@/lib/gsap';
import { about, aboutMetrics } from '@/data/content';

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnScroll('[data-about-reveal]', { trigger: root.current!, stagger: 0.1 });

    // Trigger-once throughout this section — never mixed with scrub.
    gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((el) => {
      progressBar(el, Number(el.dataset.bar ?? 0));
    });
  });

  return (
    <section id="about" ref={root} className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p
              data-about-reveal
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-dim"
            >
              {about.eyebrow}
            </p>
            <h2
              data-about-reveal
              className="mt-4 font-display text-3xl uppercase leading-[1.05] text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              {about.heading}
            </h2>

            {about.body.map((para) => (
              <p
                key={para.slice(0, 24)}
                data-about-reveal
                className="mt-6 text-base leading-relaxed text-slate md:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {about.credibility.map((item) => (
                <li
                  key={item.title}
                  data-about-reveal
                  className="rounded-xl border border-slate-100 bg-paper-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember/12 text-ember-dim">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-lg uppercase text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div data-about-reveal className="rounded-xl border border-slate-100 bg-paper-card p-6">
              <ul className="flex flex-col gap-6">
                {aboutMetrics.map((metric) => (
                  <li key={metric.label}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="text-sm font-medium text-ink">{metric.label}</span>
                      <span className="flex items-center gap-2">
                        <span className="font-display text-lg text-ink">{metric.display}</span>
                        {metric.pending && (
                          <span className="rounded-full border border-ember-dim/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-ember-dim">
                            Scale TBC
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        data-bar={metric.pending ? 100 : metric.pct}
                        className={`h-full w-full rounded-full ${
                          metric.pending ? 'opacity-45' : 'bg-ember'
                        }`}
                        style={
                          metric.pending
                            ? {
                                backgroundImage:
                                  'repeating-linear-gradient(135deg, var(--color-slate) 0 6px, transparent 6px 12px)',
                              }
                            : undefined
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
