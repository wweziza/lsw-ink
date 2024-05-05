'use client'; // Add this line at the top of the file
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  const [randomLetters, setRandomLetters] = useState('▶');
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
    <div>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>LSW {randomLetters}</li>
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
            <img src="image/display.webp" alt="Clothing" />
          </div>
        </main>
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
