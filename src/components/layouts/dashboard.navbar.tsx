// components/layouts/Navbar.tsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from './Auth';
import Link from 'next/link';
import styles from '../../app/page.module.css';
import { useThemeStorage } from '../functions/useThemeStorage';
import { useRandomLetters } from '../functions/useRandomLetters';
import { useNavbarOpacity } from '../functions/useNavbarOpacity';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const { randomLetters } = useRandomLetters();
  const { isNavbarOpaque } = useNavbarOpacity();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const body = document.querySelector('body');
  const { logout } = useContext(AuthContext);
  if (body) {
    body.style.backgroundColor = isDarkMode ? '#121212' : '#f0f0f0';
  }
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

    document.addEventListener('mousedown', handleClickOutside as any);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isNavbarOpaque ? styles.opaque : ''} ${isDarkMode ? styles.dark : styles.light}`}>
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
        <Link href="/dashboard" className={styles.sidebarLink}>
          Dashboard
        </Link>
        <Link href="/dashboard" className={styles.sidebarLink}>
          Stock Listing
        </Link>
        <Link href="/settings" className={styles.sidebarLink}>
          Order
        </Link>
        <Link href="/settings" className={styles.sidebarLink}>
          Settings
        </Link>
        <Link href="#" onClick={logout} className={styles.sidebarLink}>
      Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;