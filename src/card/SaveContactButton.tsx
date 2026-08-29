import { useEffect, useRef, useState } from 'react';
import { downloadVCard, type Contact } from '@/lib/vcard';

/**
 * The card's primary action.
 *
 * A real <button>, because it performs an action rather than navigating,
 * and because a div would have to reimplement the keyboard and focus
 * behaviour it gets for free here.
 *
 * The button label never changes. Swapping it to "Saved" would rewrite the
 * accessible name of the control the user is still sitting on, which reads
 * to a screen reader as the button having turned into a different button.
 * The outcome is announced from a separate live region instead.
 */
export default function SaveContactButton({
  contact,
  label,
  confirmation,
  className = '',
}: {
  contact: Contact;
  label: string;
  confirmation: string;
  className?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'saved' | 'failed'>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function save() {
    try {
      downloadVCard(contact);
      setStatus('saved');
    } catch {
      // Nothing to log to, and nothing the visitor can do about the cause.
      // Point them at the details already on the page instead, which are
      // tappable and do not depend on any of this working.
      setStatus('failed');
    }

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), 6000);
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={save}
        className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ember px-8 text-[1rem] font-semibold text-on-ember transition-colors hover:bg-ember-dim"
      >
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
          className="transition-transform group-hover:translate-y-0.5"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
          <path d="M12 15V3" />
        </svg>
        {label}
      </button>

      {/* Always in the DOM: a live region inserted at the same moment as its
          text is not reliably announced, since there was no region present
          to observe the change. */}
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-center text-sm">
        {status === 'saved' && <span className="text-ember-text">{confirmation}</span>}
        {status === 'failed' && (
          <span className="text-muted">
            That download did not start. The details above all work on a tap.
          </span>
        )}
      </p>
    </div>
  );
}
