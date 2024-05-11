// components/layouts/Dashboard.tsx
'use client';
import React, { useContext } from 'react';
import Navbar from '../../components/layouts/navbar';
import styles from '../../app/dashboard/Dashboard.module.css';
import { useThemeStorage } from '../../components/functions/useThemeStorage';
import { AuthContext } from './Auth';

const Dashboard = () => {
  const { isDarkMode, toggleTheme } = useThemeStorage();
  const { username } = useContext(AuthContext);

  return (
    <div className={`${styles.dashboardContainer} ${isDarkMode ? styles.dark : styles.light}`}>
      {isDarkMode !== null && <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      <div className={styles.dashboardHeader}>
        <div className={styles.welcomeMessage}>
          <h2>Welcome back, {username}!</h2>
        </div>
      </div>
      <div className={styles.dashboardContentWrapper}>
        <div className={styles.dashboardContent}>
          <div className={styles.panelContainer}>
            <div className={`${styles.panel} ${styles.playerLoggedPanel}`}>
              <h3>Player Logged</h3>
              <p>123</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>Second Panel</h3>
              <p>This is a second panel for displaying additional information or statistics.</p>
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <ul>
            <li>Dashboard</li>
            <li onClick={() => { /* Handle logout functionality */ }}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;