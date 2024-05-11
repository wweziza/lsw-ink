import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.style.backgroundColor = '#121212';
      body.style.color = '#f0f0f0';
    } else {
      body.style.backgroundColor = '#f0f0f0';
      body.style.color = '#121212';
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};