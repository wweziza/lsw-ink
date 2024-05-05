import { useEffect, useState } from 'react';

export const useNavbarOpacity = () => {
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarOpaque(true);
      } else {
        setIsNavbarOpaque(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isNavbarOpaque };
};