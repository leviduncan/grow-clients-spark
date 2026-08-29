import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FormShell from '@/forms/FormShell';
import NotFound from './NotFound';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

/**
 * Reuses FormShell for the chrome. It is named for the forms but it is
 * really "minimal page chrome": wordmark, theme toggle, small footer, and
 * deliberately no <Nav />.
 *
 * That last part matters more here than on a form. The nav is anchor links
 * to sections of the homepage, and on a 404 those sections do not exist, so
 * every one of them would be a link that appears to work and does nothing.
 *
 * homeHref is root-absolute, unlike every other page in this repo, because
 * 404.html is served for arbitrary URL depths. See the <base> tag there.
 */
createRoot(rootEl).render(
  <StrictMode>
    <FormShell homeHref="/">
      <NotFound />
    </FormShell>
  </StrictMode>,
);
