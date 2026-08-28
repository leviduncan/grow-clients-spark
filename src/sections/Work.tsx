import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { projects, work } from '@/data/content';

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnScroll('[data-work-head]', { trigger: root.current!, stagger: 0.1 });
    revealOnScroll('[data-work-card]', { trigger: '[data-work-grid]', stagger: 0.12 });
  });

  return (
    <section id="work" ref={root} className="theme-fade bg-base-veil pb-20 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p
            data-work-head
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
          >
            {work.eyebrow}
          </p>
          <h2
            data-work-head
            className="mt-4 font-display text-3xl uppercase leading-[1.05] text-content sm:text-4xl lg:text-5xl"
          >
            {work.heading}
          </h2>
        </div>

        <div
          data-work-grid
          className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <article
              key={project.id}
              data-work-card
              /* `group` and `card-grow` are gated on there being somewhere to
                 go. Without a url the card must not grow on hover or reveal
                 the caption overlay: both read as "this is clickable", and
                 nothing would happen. */
              className={`relative flex flex-col ${project.url ? 'group card-grow' : ''} ${
                i === 1 ? 'lg:mt-12' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-hairline">
                {/* 16:9 matches the screenshots exactly, so nothing is
                    cropped. These are browser captures with the logo and
                    headline hard-left; a 4:3 slot cut both off. */}
                <div className="aspect-video w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  {project.image ? (
                    <picture className="block h-full w-full">
                      <source srcSet={project.image.webp} type="image/webp" />
                      <img
                        src={project.image.jpg}
                        alt={`${project.name}, ${project.category}`}
                        width={800}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </picture>
                  ) : (
                    <ScreenshotPending name={project.name} />
                  )}
                </div>

                {/* Purely a hover treatment, and it repeats the name and
                    category already in the heading below, so keep it out of
                    the accessibility tree. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-scrim/85 via-scrim/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div className="p-6">
                    <p className="font-display text-xl uppercase text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-white/70">{project.category}</p>
                  </div>
                </div>

                {project.kind === 'concept' && (
                  <span className="absolute left-4 top-4 rounded-full bg-feature px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-on-feature">
                    Concept project
                  </span>
                )}
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-text">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase text-content md:text-2xl">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link transition-colors hover:text-ember-text"
                    >
                      {project.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * No real screenshots exist in the repo yet. A marked slot is honest;
 * a stock image or an invented mockup would not be. Drop a file into
 * public/ and set `image` on the project to replace this.
 */
function ScreenshotPending({ name }: { name: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, var(--hairline) 0 10px, var(--card) 10px 20px)',
      }}
    >
      <span className="rounded-full bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        Screenshot pending: {name}
      </span>
    </div>
  );
}
