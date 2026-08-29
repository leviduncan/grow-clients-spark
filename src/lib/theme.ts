import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

/** Kept in sync with the anti-flash script in index.html. */
export const THEME_KEY = 'gcai-theme';

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    // Private mode, blocked storage: fall through to the default.
    return null;
  }
}

/**
 * The theme with nothing stored. Dark is the brand default, and the OS
 * preference is deliberately not consulted.
 *
 * This used to follow the OS live. It no longer does: a visitor on a
 * light-set machine now lands on the dark site, which is the point of
 * having a default. `prefers-color-scheme` still exists in index.css as
 * the fallback for the theoretical case where the anti-flash script has
 * not run, but nothing here reads it.
 */
export const DEFAULT_THEME: Theme = 'dark';

/** What the page is actually painting right now. */
export function resolveTheme(): Theme {
  return readStored() ?? DEFAULT_THEME;
}

/**
 * Theme state for the toggle.
 *
 * With no stored choice the page paints DEFAULT_THEME. The first explicit
 * toggle pins the choice to localStorage, and from then on that is what
 * every page of the site uses.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === 'undefined' ? DEFAULT_THEME : resolveTheme(),
  );

  useEffect(() => {
    // Reconcile with whatever the anti-flash script already applied.
    setThemeState(resolveTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Not persisting is survivable; the page still switches.
    }
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolveTheme() === 'dark' ? 'light' : 'dark');
  }, [setTheme]);

  return { theme, setTheme, toggle };
}
