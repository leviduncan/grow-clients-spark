import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from '@/components/Nav';
import Footer from '@/sections/Footer';
import NotFound from './NotFound';
import '@/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

/**
 * Same chrome as the homepage: full nav, full footer.
 *
 * Those links all work from here, and they work *because* of the
 * `<base href="/">` in 404.html. Every nav and footer href is fragment-only
 * (`#services`), and a fragment-only URL resolves against the document base,
 * so each one becomes `https://growclientsai.com/#services`: back to the
 * homepage, scrolled to that section. Without the base tag they would
 * resolve against whatever bad path the visitor landed on and go nowhere.
 *
 * The homepage's "Skip to content" link is deliberately NOT copied here.
 * That same base-tag behaviour would turn its `#main` into a link to the
 * homepage's main, sending someone off this page instead of past the nav.
 * The page is three tab stops deep, so the link earns nothing anyway.
 */
createRoot(rootEl).render(
  <StrictMode>
    <Nav />

    <main id="main">
      <NotFound />
    </main>

    <Footer />
  </StrictMode>,
);
