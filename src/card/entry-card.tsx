import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from '@/forms/FormShell';
import BusinessCard from './BusinessCard';
import '@/index.css';

/**
 * FormShell despite the name: it is the chrome for any standalone document
 * on this site, not just the intake forms. Wordmark, theme toggle, thin
 * footer, no nav. That is exactly what the card wants, and reusing it is
 * what keeps the mark the same size here as everywhere else.
 */

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <StrictMode>
    {/* Served from /card/, so '../' is the marketing site. */}
    <FormShell homeHref="../">
      <BusinessCard />
    </FormShell>
  </StrictMode>,
);
