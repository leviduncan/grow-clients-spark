import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from './FormShell';
import ThankYou from './ThankYou';
import { testimonialThanks } from '@/data/forms';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

// Served from /testimonial/thanks/, so the site root is two levels up.
const HOME = '../../';

createRoot(rootEl).render(
  <StrictMode>
    <FormShell homeHref={HOME}>
      <ThankYou copy={testimonialThanks} homeHref={HOME} />
    </FormShell>
  </StrictMode>,
);
