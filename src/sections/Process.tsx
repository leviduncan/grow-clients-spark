import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { process, steps } from '@/data/content';

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    revealOnScroll('[data-process-head]', { trigger: root.current!, stagger: 0.1 });
    revealOnScroll('[data-step]', { trigger: '[data-step-grid]', stagger: 0.12 });
  });

  return (
    <section id="process" ref={root} className="bg-ink py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p
            data-process-head
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ember"
          >
            {process.eyebrow}
          </p>
          <h2
            data-process-head
            className="mt-4 font-display text-3xl uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl"
          >
            {process.heading}
          </h2>
        </div>

        <ol
          data-step-grid
          className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:mt-16 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <li key={step.n} data-step className="flex flex-col bg-ink-soft p-7 md:p-8">
              <span className="font-display text-4xl text-ember md:text-5xl">{step.n}</span>
              <h3 className="mt-5 font-display text-xl uppercase text-white md:text-2xl">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
