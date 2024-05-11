'use client';
import React, { lazy, Suspense, useState } from 'react';
import styles from './page.module.css';
import { useTheme } from '../components/functions/useTheme';


import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';

const SecondPage = lazy(() => import('../components/layouts/secondPage'));

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();


  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
        <Navbar
        isDarkMode={isDarkMode} toggleTheme={toggleTheme} // Make sure toggleTheme is passed as a prop
      />
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