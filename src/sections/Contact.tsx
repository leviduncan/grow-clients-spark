import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { contact, site } from '@/data/content';

/**
 * Deliberately a CTA block, not the seven-field form in the Notion copy.
 *
 * The build ships as static files to Caddy with no backend, so a form
 * would post nowhere — and a form that silently swallows a lead is
 * worse than no form. Wiring it needs one decision from Darrin: post to
 * an n8n webhook (he already runs n8n.growclientsai.com, so this is the
 * natural fit) or to a hosted endpoint like Formspree. The form markup
 * goes in once that endpoint exists.
 */
export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const emailPending = site.email.startsWith('[');

  useGsap(root, () => {
    revealOnScroll('[data-contact-reveal]', { trigger: root.current!, stagger: 0.1 });
  });

  return (
    <section id="contact" ref={root} className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember/20 blur-[100px]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p
              data-contact-reveal
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ember"
            >
              {contact.eyebrow}
            </p>

            <h2
              data-contact-reveal
              className="mt-5 font-display text-3xl uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl"
            >
              {contact.heading}
            </h2>

            <div
              data-contact-reveal
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href={emailPending ? '#contact' : `mailto:${site.email}`}
                aria-disabled={emailPending || undefined}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ember px-8 text-base font-semibold text-ink transition-colors hover:bg-ember-dim sm:w-auto"
              >
                {contact.cta}
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

              {emailPending && (
                <span className="rounded-full border border-ember/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-ember">
                  Contact route TBC
                </span>
              )}
            </div>

            <p data-contact-reveal className="mt-6 text-sm text-white/50">
              {contact.support}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
