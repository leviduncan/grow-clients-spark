import { useRef } from 'react';
import { countUp, gsap, prefersReducedMotion, splitWords, useGsap } from '@/lib/gsap';
import { hero, heroStats } from '@/data/content';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  /* A stat with no real figure behind it is not shown at all, rather than
     shown with a TBC chip: this sits above the fold on a live marketing
     site, where a visible placeholder costs more than a missing one. Fill
     the value in and drop `pending` in content.ts and the row returns. */
  const stats = heroStats.filter((stat) => !stat.pending);

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
      className="theme-fade relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-band pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <Backdrop />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-content">
          <span className="sr-only">{hero.lines.map((l) => l.text).join(' ')}</span>

          {/* Sized off the longest line, not the viewport: at >=1280 the
              max-w-7xl measure is 1216px and "WEBSITES THAT" runs ~9x its
              font size, so 8.25rem fills it with a little to spare. The vw
              term is held below the cap's own slope so 768 (where the
              measure is only 704px) keeps real margin: at 9.75vw it cleared
              by 2px, which the wider Arial Black fallback would overrun.
              Raising either number wraps a line and breaks the split. */}
          {hero.lines.map((line) => (
            <span
              key={line.text}
              aria-hidden="true"
              data-hero-line
              className={`block text-[clamp(2.5rem,9.25vw,8.25rem)] ${
                line.outline ? 'text-outline' : ''
              }`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-16">
          <p
            data-hero-fade
            className="max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {hero.sub}
          </p>

          <div data-hero-fade className="flex flex-col items-start gap-4">
            <a
              href={hero.ctaHref}
              className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-ember px-8 text-base font-semibold text-on-ember transition-colors hover:bg-ember-dim"
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
            <p className="max-w-sm text-sm leading-relaxed text-faint">
              {hero.support}
            </p>
          </div>
        </div>

        {stats.length > 0 && (
          <dl
            data-hero-fade
            className="mt-14 grid grid-cols-1 gap-8 border-t border-hairline pt-10 sm:grid-cols-3 md:mt-20"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd>
                  <span
                    data-count={stat.value}
                    data-suffix={stat.suffix ?? ''}
                    className="font-display text-4xl text-content md:text-5xl"
                  >
                    0
                  </span>
                </dd>
                <dt className="mt-2 text-sm text-faint">{stat.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

/**
 * Abstract composition rather than a photo: a solo operator has no team
 * shot to show, and a stock face would misrepresent the business.
 * Swap in a real device mockup here once a client screenshot exists.
 *
 * Every layer is theme-aware: the dot grid inks itself from --content,
 * and the bottom fade resolves to whatever the hero band currently is.
 */
function Backdrop() {
  const still = prefersReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--content) 1px, transparent 0)',
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

      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-band to-transparent" />
    </div>
  );
}
