import { useRef } from 'react';
import { countUp, gsap, prefersReducedMotion, splitWords, useGsap } from '@/lib/gsap';
import { hero, heroStats } from '@/data/content';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, (reduced) => {
    const lines = gsap.utils.toArray<HTMLElement>('[data-hero-line]');
    const words = lines.flatMap((line) => splitWords(line));

    if (reduced) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      gsap.set('[data-hero-fade]', { opacity: 1, y: 0 });
    } else {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(words, {
        yPercent: 115,
        opacity: 0,
        duration: 0.9,
        stagger: 0.055,
      }).from(
        '[data-hero-fade]',
        { opacity: 0, y: 28, duration: 0.8, stagger: 0.12 },
        '-=0.45',
      );
    }

    // Stat counters run off their own trigger so they fire whether the
    // visitor lands at the top or deep-links past the fold.
    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const to = Number(el.dataset.count ?? 0);
      countUp(el, to, { suffix: el.dataset.suffix ?? '' });
    });
  });

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <Backdrop />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-white">
          <span className="sr-only">
            {hero.line1} {hero.line2}
          </span>
          <span
            aria-hidden="true"
            data-hero-line
            className="text-outline block text-[clamp(2.5rem,8.5vw,6.5rem)]"
          >
            {hero.line1}
          </span>
          <span
            aria-hidden="true"
            data-hero-line
            className="block text-[clamp(2.5rem,8.5vw,6.5rem)]"
          >
            {hero.line2}
          </span>
        </h1>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-16">
          <p
            data-hero-fade
            className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            {hero.sub}
          </p>

          <div data-hero-fade className="flex flex-col items-start gap-4">
            <a
              href={hero.ctaHref}
              className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-ember px-8 text-base font-semibold text-ink transition-colors hover:bg-ember-dim"
            >
              {hero.cta}
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
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              {hero.support}
            </p>
          </div>
        </div>

        <dl
          data-hero-fade
          className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 md:mt-20"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dd className="flex items-baseline gap-2">
                <span
                  data-count={stat.value}
                  data-suffix={stat.suffix ?? ''}
                  className="font-display text-4xl text-white md:text-5xl"
                >
                  0
                </span>
                {stat.pending && (
                  <span className="rounded-full border border-ember/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-ember">
                    TBC
                  </span>
                )}
              </dd>
              <dt className="mt-2 text-sm text-white/50">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/**
 * Abstract composition rather than a photo: a solo operator has no team
 * shot to show, and a stock face would misrepresent the business.
 * Swap in a real device mockup here once a client screenshot exists.
 */
function Backdrop() {
  const still = prefersReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute -right-[15%] top-[8%] h-[36rem] w-[36rem] rounded-full bg-ember/25 blur-[120px] md:h-[46rem] md:w-[46rem]" />

      <svg
        className={`absolute -right-[18%] top-[6%] h-[34rem] w-[34rem] text-ember/30 md:h-[44rem] md:w-[44rem] ${
          still ? '' : 'animate-[spin_60s_linear_infinite]'
        }`}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="96" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="42" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
