import { useRef } from 'react';
import { revealOnScroll, useGsap } from '@/lib/gsap';
import { footer, site } from '@/data/content';

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const emailPending = site.email.startsWith('[');
  const year = new Date().getFullYear();

  useGsap(root, () => {
    revealOnScroll('[data-footer-reveal]', { trigger: root.current!, stagger: 0.08 });
  });

  return (
    <footer ref={root} className="relative overflow-hidden bg-ink pt-20 md:pt-28">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div data-footer-reveal>
            <a href="#top" className="font-display text-xl tracking-tight text-white">
              GROWCLIENTS<span className="text-ember">AI</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {footer.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {emailPending ? (
                <span className="rounded-full border border-ember/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-ember">
                  Email + phone TBC
                </span>
              ) : (
                <>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-white/70 transition-colors hover:text-ember"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
                    className="text-sm text-white/70 transition-colors hover:text-ember"
                  >
                    {site.phone}
                  </a>
                </>
              )}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} data-footer-reveal aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-ember"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">{site.domain}</p>
        </div>
      </div>

      {/* Giant outline wordmark, cropped by the footer's bottom edge. */}
      <div aria-hidden="true" className="relative select-none overflow-hidden">
        {/* 9vw is the largest size at which the full phrase still fits one
            line in Archivo Black — above that it clips to "GROW CL". */}
        <p className="text-outline-ember translate-y-[18%] whitespace-nowrap text-center font-display text-[9vw] uppercase leading-none opacity-30">
          {footer.outlineText}
        </p>
      </div>
    </footer>
  );
}
