import React from 'react';
//import styles from '../../styles/footer.module.css';
import styles from '../../app/page.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDisclaimer}>
        <p>&copy; 2024 LSW. All rights reserved.</p>
        <p>Embrace the essence of timeless style with LSW</p>
      </div>
    </footer>
  );
};

export default Footer;