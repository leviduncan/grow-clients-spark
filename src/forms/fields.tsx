/**
 * Form controls, styled once so every form built on top of these looks like
 * the same page.
 *
 * Surface choice: controls paint `bg-card` on the page's `base` ground. In
 * light that is white on warm grey, in dark it is #1A2436 on #131C2B, so
 * the control reads as a distinct slot in both themes without needing a
 * per-theme override. There is no card panel wrapping the form for exactly
 * this reason: `card` on `card` would make the inputs disappear in light.
 *
 * Focus is left to the global `:focus-visible` rule in index.css (3px
 * ember, 3px offset). Do not add a ring utility here, it would double up.
 *
 * The size is `text-[1rem]`, not `text-base`. This project defines a
 * `--color-base` token, which makes Tailwind resolve `text-base` to
 * `color: var(--base)` instead of to a font size: it sets no size at all,
 * and the colour it does set is harmless only because `.text-content`
 * happens to sort after it in the sheet. 16px matters here specifically,
 * since iOS zooms the viewport on focus for anything smaller.
 */

import type { ReactNode } from 'react';

const control =
  'w-full rounded-xl border border-hairline bg-card px-4 py-3 text-[1rem] text-content transition-colors placeholder:text-faint/60 hover:border-muted/40';

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium leading-snug text-content">
      {children}
      {required && (
        <>
          {' '}
          <span aria-hidden="true" className="text-ember-text">
            *
          </span>
          <span className="sr-only">(required)</span>
        </>
      )}
    </label>
  );
}

function Help({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-xs leading-relaxed text-faint">
      {children}
    </p>
  );
}

export function TextField({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`${control} mt-2`}
      />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  help,
  required,
  rows = 3,
}: {
  name: string;
  label: string;
  help?: string;
  required?: boolean;
  rows?: number;
}) {
  const helpId = help ? `${name}-help` : undefined;

  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {help && <Help id={helpId!}>{help}</Help>}
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        aria-describedby={helpId}
        className={`${control} mt-2 resize-y leading-relaxed`}
      />
    </div>
  );
}

/**
 * Honeypot. Positioned off-screen rather than `display: none`, because the
 * cruder bots skip anything that is outright hidden but will happily fill a
 * field they can see in the DOM.
 *
 * The name is `hp-website`, not `website`: browsers and password managers
 * autofill on recognised tokens, and a real client whose manager helpfully
 * filled in "website" would be silently binned. `hp-website` matches no
 * autofill heuristic. `aria-hidden` plus `tabindex="-1"` keeps it off the
 * keyboard and out of a screen reader.
 */
export const HONEYPOT_NAME = 'hp-website';

export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
      <label htmlFor={HONEYPOT_NAME}>Leave this field blank</label>
      <input
        id={HONEYPOT_NAME}
        name={HONEYPOT_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
