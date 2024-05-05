
import { useIntersectionObserver } from '../functions/useIntersectionObserver';
import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';

const SecondPage = () => {
  const secondPageRef = useRef(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [, isSecondPageIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    target: secondPageRef,
  });

  useEffect(() => {
    if (isSecondPageIntersecting) {
      setIsFirstLoad(false);
    }
  }, [isSecondPageIntersecting]);

  return (
    <div ref={secondPageRef} className={`${styles.newPageContent} ${isFirstLoad ? styles.hidden : ''}`}>
      <h2>Explore Our Latest Collection</h2>
      <p>
        Indulge in our newest line of clothing, where style meets comfort. From casual weekend wear to sleek office
        attire, we've got you covered. Discover the perfect pieces to elevate your wardrobe and make a statement
        wherever you go.
      </p>
      <button className={styles.shopBtn}>Shop Now</button>
    </div>
  );
};

export default SecondPage;