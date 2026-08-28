import type { ReactNode } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { site } from '@/data/content';

/**
 * Page chrome for the unlisted form pages.
 *
 * Deliberately not <Nav />. These are links Darrin sends to one client, so
 * there are no section anchors to navigate to and no "Free audit" CTA to
 * push at someone who has already paid. What survives is the wordmark, so
 * the page is obviously his, and the theme toggle, so it respects whatever
 * the client's machine is set to.
 *
 * `homeHref` is relative because the built dist has to work from any
 * directory: '../' from /testimonial/, '../../' from /testimonial/thanks/.
 */
export default function FormShell({
  homeHref,
  children,
}: {
  homeHref: string;
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href={homeHref} className="text-content" aria-label={`${site.name} home`}>
          <Logo className="h-[15px] w-auto sm:h-[19px]" />
        </a>
        <ThemeToggle className="-mr-3" />
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="mx-auto w-full max-w-2xl px-5 pb-10 md:px-8">
        <div className="flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-ember-text"
          >
            {site.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
