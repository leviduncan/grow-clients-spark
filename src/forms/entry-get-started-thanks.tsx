import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from './FormShell';
import ThankYou from './ThankYou';
import { getStartedThanks } from '@/data/forms';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

// Served from /get-started/thanks/, so the site root is two levels up.
const HOME = '../../';

createRoot(rootEl).render(
  <StrictMode>
    <FormShell homeHref={HOME}>
      {/* The closing block points at the work, not home: someone who just
          raised their hand should not be sold to again on a confirmation
          screen, but they may well want to see finished projects. */}
      <ThankYou copy={getStartedThanks} homeHref={HOME} ctaHref={`${HOME}#work`} />
    </FormShell>
  </StrictMode>,
);
