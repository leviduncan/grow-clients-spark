import { useEffect, useState } from 'react';
import { nav, site } from '@/data/content';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes the mobile sheet
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      /* Three states, not two. The mobile sheet below paints an opaque
         bg-band, so the bar has to go opaque with it or the seam between
         them shows; the glass is only for the scrolled desktop bar. */
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? 'bg-band'
          : scrolled
            ? 'bg-band/65 backdrop-blur-xl backdrop-saturate-150'
            : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="text-content"
          aria-label={`${site.name}, back to top`}
        >
          {/* Only lg gets the large mark. From md the nav links are shown
              and the bar is full: at 768 the links, toggle and CTA already
              take ~494px of the 704px measure, so anything past ~190px of
              logo collides with "Services". */}
          <Logo className="h-[15px] w-auto lg:h-[26px]" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-content"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full bg-ember px-5 py-3 text-sm font-semibold text-on-ember transition-colors hover:bg-ember-dim"
          >
            Free audit
          </a>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-content"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-hairline bg-band px-5 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-13 items-center border-b border-hairline font-display text-xl text-content"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex min-h-13 items-center justify-center rounded-full bg-ember px-6 font-semibold text-on-ember"
          >
            Get a free website audit
          </a>
        </nav>
      )}
    </header>
  );
}
