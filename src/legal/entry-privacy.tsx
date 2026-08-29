import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from '@/forms/FormShell';
import { privacy } from '@/data/legal';
import LegalPage from './LegalPage';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <StrictMode>
    {/* Served from /privacy/, so '../' is the marketing site. */}
    <FormShell homeHref="../">
      <LegalPage doc={privacy} />
    </FormShell>
  </StrictMode>,
);
