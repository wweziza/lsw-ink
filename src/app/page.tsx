'use client'; // Add this line at the top of the file
// page.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  const [randomLetters, setRandomLetters] = useState('▶');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const characters = ['ᓚ₍ ^. .^₎', '(¬_¬")', '❤️', '(╥﹏╥)', '•⩊•', '•ᴗ•','(•ᴖ•｡)','( ˘͈ ᵕ ˘͈♡)','"૮₍ ˶•⤙•˶ ₎ა'];

    const interval = setInterval(() => {
      const randomChars = Array.from({ length: 1 }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      ).join('');
      setRandomLetters(randomChars);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>LSW {randomLetters}</li>
          <li>
            <button onClick={toggleTheme}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Don't miss the vibe</h1>
          <p>you think it's lorem ipsum? pee-poop bro, the string telling you to discover timeless fashion that empowers your confidence.</p>
          {/* Use Link for button */}
          <a href="https://instagram.com/lsw.ink" className={styles.shopBtn}>Touch Us</a>
        </div>
        <div className={styles.imageContainer}>
          <img src="image/displayWhite.webp" alt="Clothing" />
        </div>
      </main>
      <footer className={styles.footer}>
          <p>&copy; 2024 LSW. All rights reserved.</p>
          <p>Designed by weziza</p>
      </footer>
    </div>
  );
};

export default Home;
