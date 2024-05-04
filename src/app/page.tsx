import React from 'react';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Don't miss the vibe</h1>
          <p>Discover timeless fashion that empowers your confidence.</p>
          <button className={styles.shopBtn}>Shop Now</button>
        </div>
        <div className={styles.imageContainer}>
          <img src="image/display.webp" alt="Clothing" />
        </div>
      </main>
    </div>
  );
};

export default Home;