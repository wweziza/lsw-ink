import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';

const SecondPage = () => {
  const secondPageRef = useRef(null);
  const [isSecondPageIntersecting, setIsSecondPageIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSecondPageIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (secondPageRef.current) {
      observer.observe(secondPageRef.current);
    }

    return () => {
      if (secondPageRef.current) {
        observer.unobserve(secondPageRef.current);
      }
    };
  }, []);

  return (
    <div ref={secondPageRef} className={`${styles.newPageContent} ${isSecondPageIntersecting ? '' : styles.hidden}`}>
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
