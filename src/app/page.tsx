'use client';
import React, { lazy, Suspense, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useTheme } from './components/functions/useTheme';
import { useRandomLetters } from './components/functions/useRandomLetters';
import { useNavbarOpacity } from './components/functions/useNavbarOpacity';


import Footer from './components/layouts/footer';
import Navbar from './components/layouts/navbar';

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
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;