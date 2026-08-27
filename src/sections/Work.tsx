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
    <section id="work" ref={root} className="bg-paper pb-20 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p
            data-work-head
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-dim"
          >
            {work.eyebrow}
          </p>
          <h2
            data-work-head
            className="mt-4 font-display text-3xl uppercase leading-[1.05] text-ink sm:text-4xl lg:text-5xl"
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
              className={`group flex flex-col ${i === 1 ? 'lg:mt-12' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <div className="aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.category}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ScreenshotPending name={project.name} />
                  )}
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-6">
                    <p className="font-display text-xl uppercase text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-white/70">{project.category}</p>
                  </div>
                </div>

                {project.kind === 'concept' && (
                  <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    Concept project
                  </span>
                )}
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-dim">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase text-ink md:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{project.blurb}</p>
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
          'repeating-linear-gradient(135deg, var(--color-slate-100) 0 10px, #DDDAD1 10px 20px)',
      }}
    >
      <span className="rounded-full bg-paper px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate">
        Screenshot pending — {name}
      </span>
    </div>
  );
}
