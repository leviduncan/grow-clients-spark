import { useRef, useState } from 'react';
import { revealOnLoad, useGsap } from '@/lib/gsap';
import { site } from '@/data/content';
import { AUDIT, endpoints, getStarted } from '@/data/forms';
import { ChoiceCards, Honeypot, SelectField, TextAreaField, TextField } from './fields';
import { blankToNull, useWebhookForm } from './useWebhookForm';

/**
 * Both branches name their textarea `details`, and only one is ever
 * rendered, so the payload carries a single field and the workflow never
 * has to know which branch produced it. `website` is likewise only present
 * on the audit branch.
 */
function toPayload(values: Record<string, string>) {
  return {
    form: 'lead-intake',
    leadType: values.leadType,
    name: values.name?.trim(),
    email: values.email?.trim(),
    business: blankToNull(values.business),
    phone: blankToNull(values.phone),
    website: blankToNull(values.website),
    details: blankToNull(values.details),
    source: values.source,
  };
}

export default function GetStartedForm() {
  const root = useRef<HTMLDivElement>(null);

  /**
   * The one piece of controlled state on the page: which branch is chosen
   * drives which fields exist. Everything else stays uncontrolled so a
   * failed post leaves every answer in the DOM as typed.
   */
  const [path, setPath] = useState('');

  const { state, onSubmit } = useWebhookForm({
    endpoint: endpoints.leadIntake,
    redirectTo: './thanks/',
    toPayload,
  });

  useGsap(root, () => {
    revealOnLoad('[data-form-reveal]', { stagger: 0.08, y: 24 });
  });

  const sending = state === 'sending';
  const isAudit = path === AUDIT;

  return (
    <div ref={root} className="mx-auto w-full max-w-2xl px-5 pb-16 pt-4 md:px-8 md:pt-8">
      <p
        data-form-reveal
        className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-text"
      >
        {getStarted.eyebrow}
      </p>

      <h1
        data-form-reveal
        className="mt-4 font-display text-3xl leading-[1.1] text-content sm:text-4xl"
      >
        {getStarted.heading}
      </h1>

      <p data-form-reveal className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
        {getStarted.intro}
      </p>

      <noscript>
        <p className="mt-6 rounded-xl border border-hairline bg-card p-4 text-sm leading-relaxed text-content">
          This form needs JavaScript to send. With it switched off, email me at {site.email} and
          I will pick it up from there.
        </p>
      </noscript>

      <form data-form-reveal onSubmit={onSubmit} className="relative mt-12">
        <Honeypot />

        <ChoiceCards
          name="leadType"
          legend={getStarted.branch.legend}
          options={getStarted.branch.options}
          value={path}
          onChange={setPath}
        />

        {/* Progressive disclosure: the rest of the form does not exist until
            a branch is chosen. It keeps the first screen to one question
            rather than a wall of fields, and it makes the branch
            unskippable without needing to police it on submit. */}
        {path && (
          <>
            <h2 className="mt-12 border-t border-hairline pt-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              {getStarted.aboutHeading}
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {getStarted.fields.map((f) => (
                <TextField key={f.name} {...f} />
              ))}
            </div>

            <h2 className="mt-12 border-t border-hairline pt-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              {getStarted.detailsHeading}
            </h2>

            <div className="mt-6 flex flex-col gap-7">
              {/* Switching branches unmounts the other textarea and drops
                  what was typed in it. That is correct: the two branches
                  ask different questions, so carrying an answer across
                  would attach it to a question nobody was asked. */}
              {isAudit ? (
                <>
                  <TextField {...getStarted.audit.website} />
                  <TextAreaField {...getStarted.audit.details} />
                </>
              ) : (
                <TextAreaField {...getStarted.newSite.details} />
              )}

              <SelectField {...getStarted.source} />
            </div>

            <p className="mt-10 border-l-2 border-ember/40 pl-4 text-sm leading-relaxed text-muted">
              {getStarted.note}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ember px-8 text-[1rem] font-semibold text-on-ember transition-colors hover:bg-ember-dim disabled:cursor-progress disabled:opacity-70 sm:w-auto sm:self-start"
              >
                {sending ? getStarted.submitting : getStarted.submit}
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

              <div role="alert" aria-live="polite">
                {state === 'error' && (
                  <p className="rounded-xl border border-ember/50 bg-card p-4 text-sm leading-relaxed text-content">
                    {getStarted.error}{' '}
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
          </>
        )}
      </form>
    </div>
  );
}
