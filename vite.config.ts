import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths so the built dist/ works wherever Caddy serves it
  // from -- domain root or a subdirectory -- with no rewrite rules.
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    rollupOptions: {
      /*
        Multi-page build. The marketing site is still one page with anchor
        navigation; these extra entries are the unlisted client forms, which
        are separate documents rather than routes precisely because there is
        no router and no Caddy rewrite to lean on. Each one builds to
        dist/<dir>/index.html, which Caddy's file_server serves for a
        directory request, so /testimonial works with no server config.

        `index.html` has to be listed explicitly: naming any input at all
        replaces Vite's default, and leaving it out would drop the site.
      */
      input: {
        main: path.resolve(__dirname, 'index.html'),
        testimonial: path.resolve(__dirname, 'testimonial/index.html'),
        testimonialThanks: path.resolve(__dirname, 'testimonial/thanks/index.html'),
      },
    },
  },
});
