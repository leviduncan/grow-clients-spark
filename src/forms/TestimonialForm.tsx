import { useRef } from 'react';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import { site } from '@/data/content';
import { endpoints, testimonial } from '@/data/forms';
import { Honeypot, TextAreaField, TextField } from './fields';
import { useWebhookForm } from './useWebhookForm';

/**
 * Shape the workflow receives. Kept out of the component so its identity is
 * stable across renders and the submit handler is not rebuilt on each one.
 *
 * Empty optionals go over as null rather than "": Notion treats an empty
 * string as a value and would write a blank property, where null can be
 * skipped outright.
 */
const blankToNull = (v: string | undefined) => (v?.trim() ? v.trim() : null);

function toPayload(values: Record<string, string>) {
  return {
    form: 'testimonial',
    name: values.name?.trim(),
    email: values.email?.trim(),
    business: blankToNull(values.business),
    phone: blankToNull(values.phone),
    answers: Object.fromEntries(
      testimonial.questions.map((q) => [q.name, blankToNull(values[q.name])]),
    ),
  };
}

export default function TestimonialForm() {
  const root = useRef<HTMLDivElement>(null);
  const { state, onSubmit } = useWebhookForm({
    endpoint: endpoints.testimonial,
    // Relative: /testimonial/ -> /testimonial/thanks/, and still correct if
    // the whole dist is ever served from a subdirectory.
    redirectTo: './thanks/',
    toPayload,
  });

  useGsap(root, () => {
    revealOnLoad('[data-form-reveal]', { stagger: 0.08, y: 24 });
  });

  const sending = state === 'sending';

  return (
    <div ref={root} className="mx-auto w-full max-w-2xl px-5 pb-16 pt-4 md:px-8 md:pt-8">
      <p
        data-form-reveal
        className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
      >
        {testimonial.eyebrow}
      </p>

      <h1
        data-form-reveal
        className="mt-4 font-display text-3xl leading-[1.1] text-content sm:text-4xl"
      >
        {testimonial.heading}
      </h1>

      <p
        data-form-reveal
        className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted"
      >
        {testimonial.intro}
      </p>

      <noscript>
        <p className="mt-6 rounded-xl border border-hairline bg-card p-4 text-sm leading-relaxed text-content">
          This form needs JavaScript to send. With it switched off, email your
          answers to {site.email} instead and I will take it from there.
        </p>
      </noscript>

      {/* Native validation is left on: the browser's own "please fill in
          this field" is localised, announced, and scrolls the field into
          view, which is more than a hand-rolled version would do here. */}
      <form data-form-reveal onSubmit={onSubmit} className="relative mt-12">
        <Honeypot />

        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint">
          {testimonial.aboutHeading}
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {testimonial.fields.map((f) => (
            <TextField key={f.name} {...f} />
          ))}
        </div>

        <h2 className="mt-12 border-t border-hairline pt-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint">
          {testimonial.questionsHeading}
        </h2>

        <div className="mt-6 flex flex-col gap-7">
          {testimonial.questions.map((q) => (
            <TextAreaField key={q.name} {...q} />
          ))}
        </div>

        <p className="mt-10 border-l-2 border-ember/40 pl-4 text-sm leading-relaxed text-muted">
          {testimonial.note}
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ember px-8 text-[1rem] font-semibold text-on-ember transition-colors hover:bg-ember-dim disabled:cursor-progress disabled:opacity-70 sm:w-auto sm:self-start"
          >
            {sending ? testimonial.submitting : testimonial.submit}
            {sending ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
                className="animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.2-8.6" />
              </svg>
            ) : (
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
            )}
          </button>

          {/* The live region is always in the DOM so it exists before it
              has anything to say: a region injected at the same moment as
              its text is not reliably announced. The message itself is
              `text-content`, not ember. Ember as text on a light ground is
              4.3:1, which is fine for a decorative eyebrow and not fine for
              the one sentence that has to be read. The border carries the
              alarm instead. */}
          <div role="alert" aria-live="polite">
            {state === 'error' && (
              <p className="rounded-xl border border-ember/50 bg-card p-4 text-sm leading-relaxed text-content">
                {testimonial.error}{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium underline underline-offset-2 hover:text-ember-text"
                >
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
