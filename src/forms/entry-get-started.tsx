import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from './FormShell';
import GetStartedForm from './GetStartedForm';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <StrictMode>
    {/* Served from /get-started/, so '../' is the marketing site. */}
    <FormShell homeHref="../">
      <GetStartedForm />
    </FormShell>
  </StrictMode>,
);
