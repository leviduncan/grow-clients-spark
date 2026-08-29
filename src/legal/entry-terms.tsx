import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from '@/forms/FormShell';
import { terms } from '@/data/legal';
import LegalPage from './LegalPage';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <StrictMode>
    {/* Served from /terms/, so '../' is the marketing site. */}
    <FormShell homeHref="../">
      <LegalPage doc={terms} />
    </FormShell>
  </StrictMode>,
);
