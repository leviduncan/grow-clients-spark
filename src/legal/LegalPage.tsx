import { Fragment, useRef, type ReactNode } from 'react';
import { CONTACT_EMAIL, type LegalDoc } from '@/data/legal';
import { site } from '@/data/content';
import { revealOnLoad, useGsap } from '@/lib/gsap';

/**
 * Renders a legal document. Shared by /privacy/ and /terms/, which differ
 * only in the data handed to them.
 *
 * Measure is max-w-2xl to match FormShell's header and footer, so the
 * column lines up with the chrome around it. Long-form legal text wants a
 * comfortable reading measure more than it wants to fill the viewport.
 */

/**
 * The entire Markdown support in this project: split on `**` and bold the
 * odd-indexed pieces.
 *
 * A parser would be a dependency for two documents that change once a year,
 * and the alternative of pre-splitting every string into runs in the data
 * would make legal copy painful to amend, which is when correctness matters
 * most. If a document ever needs more than bold, write the JSX by hand
 * rather than growing this.
 */
function inline(text: string): ReactNode {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-content">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const root = useRef<HTMLDivElement>(null);

  useGsap(root, () => {
    revealOnLoad('[data-legal-reveal]', { stagger: 0.06, y: 20 });
  });

  return (
    <div ref={root} className="mx-auto w-full max-w-2xl px-5 pb-16 pt-4 md:px-8 md:pt-8">
      <h1
        data-legal-reveal
        className="font-display text-3xl leading-[1.1] text-content sm:text-4xl"
      >
        {doc.title}
      </h1>

      <p data-legal-reveal className="mt-4 text-sm text-faint">
        <span className="font-semibold text-content">Effective Date:</span> {doc.effective}
      </p>

      <p
        data-legal-reveal
        className="mt-6 text-[1.0625rem] leading-relaxed text-lede"
      >
        {doc.intro}
      </p>

      {doc.sections.map((section) => (
        <section key={section.heading} data-legal-reveal className="mt-10">
          {/* h2 picks up font-display from the base layer. Kept at text-xl:
              these are numbered clauses in a long document, not headlines,
              and sizing them like headlines makes the page harder to scan,
              not easier. */}
          <h2 className="text-xl leading-snug text-content">{section.heading}</h2>

          {section.blocks.map((block, i) =>
            block.kind === 'p' ? (
              <p key={i} className="mt-4 text-[1rem] leading-relaxed text-muted">
                {inline(block.text)}
              </p>
            ) : (
              <ul key={i} className="mt-4 flex flex-col gap-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[1rem] leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.6875em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ember"
                    />
                    {inline(item)}
                  </li>
                ))}
              </ul>
            ),
          )}
        </section>
      ))}

      <section data-legal-reveal className="mt-10">
        <h2 className="text-xl leading-snug text-content">{doc.contact.heading}</h2>
        <p className="mt-4 text-[1rem] leading-relaxed text-muted">{doc.contact.lead}</p>

        <div className="mt-4 text-[1rem] leading-relaxed text-muted">
          <p className="font-semibold text-content">{doc.contact.org}</p>
          <p className="mt-1">
            Email:{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ember-text underline underline-offset-2 transition-colors hover:text-content"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-1">
            Website:{' '}
            <a
              href="../"
              className="text-ember-text underline underline-offset-2 transition-colors hover:text-content"
            >
              {site.domain}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
