import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

/** Kept in sync with the anti-flash script in index.html. */
export const THEME_KEY = 'gcai-theme';

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    // Private mode, blocked storage: fall through to the OS preference.
    return null;
  }
}

function readSystem(): Theme {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/** What the page is actually painting right now. */
export function resolveTheme(): Theme {
  return readStored() ?? readSystem();
}

/**
 * Theme state for the toggle.
 *
 * With no stored choice the page follows the OS and keeps following it
 * live. Flipping the system setting repaints the site without a reload.
 * The first explicit toggle pins the choice and stops the site tracking
 * the OS.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === 'undefined' ? 'light' : resolveTheme(),
  );

  useEffect(() => {
    // Reconcile with whatever the anti-flash script already applied.
    setThemeState(resolveTheme());

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      if (readStored()) return; // an explicit choice outranks the OS
      const next = readSystem();
      document.documentElement.removeAttribute('data-theme');
      setThemeState(next);
    };

    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
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
