import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';

const SecondPage = () => {

  return (
    <div
      className={`${styles.newPageContent}`}
    >
      <h2>Explore Our Latest Collection</h2>
      <p>
        Indulge in our newest line of clothing, where style meets comfort. From casual weekend wear
        to sleek office attire, we've got you covered. Discover the perfect pieces to elevate your
        wardrobe and make a statement wherever you go.
      </p>
      <button className={styles.shopBtn}>Shop Now</button>
    </div>
  );
};

export default SecondPage;