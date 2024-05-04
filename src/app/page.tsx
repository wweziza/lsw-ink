import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>LSW.</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Don't miss the vibe</h1>
          <p>you think it's lorem ipsum? pee-poop bro, the string telling you to discover timeless fashion that empowers your confidence.</p>
          {/* Use Link for button */}
          <a href="https://instagram.com/lsw.ink" className={styles.shopBtn}>Touch Us
          </a>

        </div>
        <div className={styles.imageContainer}>
          <img src="image/display.webp" alt="Clothing" />
        </div>
      </main>
    </div>
  );
};

export default Home;
