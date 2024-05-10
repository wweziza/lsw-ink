'use client';
import React, { lazy, Suspense, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useTheme } from './functions/useTheme';
import { useRandomLetters } from './functions/useRandomLetters';
import { useNavbarOpacity } from './functions/useNavbarOpacity';

const SecondPage = lazy(() => import('./contents/secondPage'));

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { randomLetters } = useRandomLetters();
  const { isNavbarOpaque } = useNavbarOpacity();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <nav className={`${styles.navbar} ${isNavbarOpaque ? styles.opaque : ''}`}>
        <div className={styles.navbarInner}>
          <ul className={styles.navLinks}>
            <li>
              <button onClick={toggleTheme} className={styles.transparentButton}>
                LSW {randomLetters}
              </button>
            </li>
          </ul>
          <div className={styles.sidebarToggle} onClick={toggleSidebar}>
            <span>{isSidebarOpen ? '✕' : '☰'}</span>
          </div>
        </div>
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
          <div className={styles.sidebarHeader}>
            <button className={styles.sidebarCloseButton} onClick={closeSidebar}>
              ✕
            </button>
          </div>
          <Link href="/" className={styles.sidebarLink}>
            Home
          </Link>
          <Link href="/collections" className={styles.sidebarLink}>
            Collections
          </Link>
          <Link href="/login" className={styles.sidebarLink}>
            Login
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Don't miss the vibe</h1>
          <p>
            you think it's lorem ipsum? pee-poop bro, the string telling you to discover timeless fashion that empowers
            your confidence.
          </p>
          <a href="https://instagram.com/lsw.ink" className={styles.shopBtn}>
            Touch Us
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img src={isDarkMode ? 'image/display.webp' : 'image/displayWhite.webp'} alt="Clothing" />
        </div>
      </main>
      <div className={`${styles.newPageSection}`}>
        <SecondPage />
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerDisclaimer}>
          <p>&copy; 2024 LSW. All rights reserved.</p>
          <p>Embrace the essence of timeless style with LSW</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;