import React, { useState, useEffect, useRef, MouseEvent } from 'react'; // Import MouseEvent
import Link from 'next/link';
import styles from '../../page.module.css';
import { useTheme } from '../functions/useTheme';
import { useRandomLetters } from '../functions/useRandomLetters';
import { useNavbarOpacity } from '../functions/useNavbarOpacity';
interface NavbarProps {
    toggleTheme: () => void; // Define the type of toggleTheme
    // Add other props here if needed
  }
  
  const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const { isDarkMode } = useTheme();
  const { randomLetters } = useRandomLetters();
  const { isNavbarOpaque } = useNavbarOpacity();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Add type annotation

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside as any); // Add 'as any' to address TypeScript error
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any); // Add 'as any' to address TypeScript error
    };
  }, []);
  

  return (
    <nav className={`${styles.navbar} ${isNavbarOpaque ? styles.opaque : ''}`}>
      <div className={styles.navbarInner}>
        <ul className={styles.navLinks}>
          <li>
            <button onClick={toggleTheme} className={styles.transparentButton}>
              LSW {randomLetters}
            </button>
          </li>
        </ul>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <span>{isSidebarOpen ? '✕' : '☰'}</span>
        </div>
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`} ref={sidebarRef}>
        <div className={styles.sidebarHeader}>
          <button className={styles.sidebarCloseButton} onClick={closeSidebar}>
            ✕
          </button>
        </div>
        <Link href="/" className={styles.sidebarLink}>
          Home
        </Link>
        <Link href="/collections" className={styles.sidebarLink}>
          Collections
        </Link>
        <Link href="/login" className={styles.sidebarLink}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
