// SubmitEvent, not FormEvent: @types/react 19 deprecates FormEvent ("doesn't
// actually exist") and types the <form onSubmit> prop as SubmitEventHandler.
// Imported from react, so this is React's synthetic SubmitEvent and not the
// DOM global of the same name.
import { useCallback, useRef, useState, type SubmitEvent } from 'react';
import { HONEYPOT_NAME } from './fields';

export type SubmitState = 'idle' | 'sending' | 'error';

/** Abort a stalled request rather than sitting on "Sending" forever. */
const TIMEOUT_MS = 15_000;

/**
 * Posts an uncontrolled form to an n8n webhook and, on success, sends the
 * browser to the thank you page.
 *
 * Uncontrolled on purpose: no state per field means a failed post leaves
 * every answer sitting in the DOM exactly as typed, so "try again" is one
 * click and not a retype. React state would need explicit restoring to get
 * the same behaviour.
 *
 * There is no backend here, so the browser talks to n8n directly. Anything
 * that needs to be trusted has to be checked inside the workflow: see
 * `meta.elapsedMs` below.
 */
export function useWebhookForm({
  endpoint,
  redirectTo,
  toPayload,
}: {
  endpoint: string;
  /** Relative, so dist keeps working from any directory. */
  redirectTo: string;
  toPayload: (values: Record<string, string>) => Record<string, unknown>;
}) {
  const [state, setState] = useState<SubmitState>('idle');
  const openedAt = useRef(Date.now());

  const onSubmit = useCallback(
    async (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (state === 'sending') return;

      const raw = Object.fromEntries(
        new FormData(e.currentTarget).entries(),
      ) as Record<string, string>;

      // Honeypot filled: a human cannot reach that field, so drop the post
      // and send them on anyway. A bot sees success and stops retrying.
      const { [HONEYPOT_NAME]: trap, ...values } = raw;
      if (trap) {
        window.location.assign(redirectTo);
        return;
      }

      setState('sending');

      // Time on page rides along as data instead of gating the submit here.
      // A form filled in three seconds is a bot, but that call belongs in
      // the workflow, where a wrong guess can be reviewed rather than
      // silently losing a client's testimonial in their browser.
      const payload = {
        ...toPayload(values),
        submittedAt: new Date().toISOString(),
        meta: {
          elapsedMs: Date.now() - openedAt.current,
          page: window.location.href,
          referrer: document.referrer || null,
        },
      };

      const abort = new AbortController();
      const timer = window.setTimeout(() => abort.abort(), TIMEOUT_MS);

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: abort.signal,
        });

        if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

        window.location.assign(redirectTo);
      } catch {
        // Network failure, timeout, a non-2xx, or a missing CORS header on
        // the n8n Webhook node all land here and all mean the same thing to
        // the person filling it in: it did not send.
        setState('error');
      } finally {
        window.clearTimeout(timer);
      }
    },
    [endpoint, redirectTo, toPayload, state],
  );

  return { state, onSubmit };
}
