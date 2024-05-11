// components/functions/useThemeStorage.js
import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'theme';

const useThemeStorage = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};

export { useThemeStorage };