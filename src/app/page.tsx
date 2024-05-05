'use client';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

import { useTheme } from './functions/useTheme';
import { useRandomLetters } from './functions/useRandomLetters';
import { useNavbarOpacity } from './functions/useNavbarOpacity';
import { useIntersectionObserver } from './functions/useIntersectionObserver';

const SecondPage = lazy(() => import('./contents/secondPage'));

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { randomLetters } = useRandomLetters();
  const { isNavbarOpaque } = useNavbarOpacity();
  const [newPageSectionRef, isNewPageSectionIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  const [isScreenWidthSmall, setIsScreenWidthSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthSmall(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <nav className={`${styles.navbar} ${isNavbarOpaque ? styles.opaque : ''}`}>
        <ul className={styles.navLinks}>
          <li>
            <button onClick={toggleTheme} className={styles.transparentButton}>
              LSW {randomLetters}
            </button>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Don't miss the vibe</h1>
          <p>
            you think it's lorem ipsum? pee-poop bro, the string telling you to discover timeless fashion that empowers
            your confidence.
          </p>
          {/* Use Link for button */}
          <a href="https://instagram.com/lsw.ink" className={styles.shopBtn}>
            Touch Us
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img src={isDarkMode ? 'image/display.webp' : 'image/displayWhite.webp'} alt="Clothing" />
        </div>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          ref={newPageSectionRef}
          className={`${styles.newPageSection} ${
            isNewPageSectionIntersecting || !isScreenWidthSmall ? '' : styles.secondPageHidden
          }`}
        >
          <SecondPage />
        </div>
      </Suspense>
      <div className={styles.semiFooter}>
        <p>Embrace the essence of timeless style with LSW.</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerDisclaimer}>
          <p>&copy; 2024 LSW. All rights reserved.</p>
          <p>Designed by weziza</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
/*
      <div className={styles.newContentSection}>
        <p>Embrace the essence of timeless style with LSW.</p>
      </div>*/