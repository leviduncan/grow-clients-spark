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

export function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {/* appearance-none plus a drawn chevron: the native arrow is painted
          by the OS and ignores the theme, so on a dark ground it renders as
          a dark glyph on a dark control. pr-11 keeps long option text from
          running under the chevron. */}
      <div className="relative mt-2">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className={`${control} appearance-none pr-11`}
        >
          <option value="" disabled>
            {placeholder ?? 'Select one'}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-faint"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

/**
 * A required either/or, rendered as two large cards.
 *
 * Radios inside a fieldset, not buttons. The choice has to announce as one
 * grouped question with a selected state and move under arrow keys, and it
 * has to be able to fail native validation with a message pointing at the
 * right place. Two <button>s writing to a hidden input give none of that,
 * and a hidden input cannot receive focus when validation rejects it.
 *
 * The whole card is the label, so the hit target is the card rather than a
 * 16px dot. The radio itself is visually hidden but still focusable, and
 * the focus ring is drawn on the card via peer-focus-visible.
 */
export function ChoiceCards({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  options: { value: string; label: string; help?: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium leading-snug text-content">
        {legend}{' '}
        <span aria-hidden="true" className="text-ember-text">
          *
        </span>
        <span className="sr-only">(required)</span>
      </legend>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((o) => {
          const id = `${name}-${o.value.replace(/\W+/g, '-').toLowerCase()}`;
          const selected = value === o.value;

          return (
            <div key={o.value} className="relative">
              <input
                type="radio"
                id={id}
                name={name}
                value={o.value}
                required
                checked={selected}
                onChange={() => onChange(o.value)}
                className="peer sr-only"
              />
              <label
                htmlFor={id}
                className={`block cursor-pointer rounded-xl border p-4 transition-colors peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-[var(--ember)] ${
                  selected
                    ? 'border-ember bg-ember/10'
                    : 'border-hairline bg-card hover:border-muted/40'
                }`}
              >
                <span className="block text-sm font-semibold text-content">{o.label}</span>
                {o.help && (
                  <span className="mt-1.5 block text-xs leading-relaxed text-faint">
                    {o.help}
                  </span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
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
