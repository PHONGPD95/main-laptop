'use client';

import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  const stopTransition = () => {
    const page = document.documentElement;
    page.classList.add('no-transition');
    setTimeout(() => page.classList.remove('no-transition'), 100);
  };

  const savePreferences = (theme: string) => {
    localStorage.setItem('preferences', JSON.stringify({ theme }));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    stopTransition();
  };

  const setAppHeight = () => {
    const page = document.documentElement;
    page.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    const browserTheme = window.matchMedia('(prefers-color-scheme: light)');
    const persisted = JSON.parse(localStorage.getItem('preferences') || '{}');

    setTheme(persisted && persisted.theme ? persisted.theme : browserTheme.matches ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    const page = document.documentElement;
    page.dataset.ratio = `${window.devicePixelRatio}`;
    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    return () => {
      window.removeEventListener('resize', setAppHeight);
    };
  }, []);

  useEffect(() => {
    if (!theme) return;

    savePreferences(theme);

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
      event.matches ? setTheme('light') : setTheme('dark');
      stopTransition();
      savePreferences(theme);
    });

    const page = document.documentElement;
    page.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (!theme) return null;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;
