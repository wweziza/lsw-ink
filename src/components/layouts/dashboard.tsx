// components/layouts/Dashboard.tsx
'use client';
import React, { useContext } from 'react';
import Navbar from '../../components/layouts/dashboard.navbar';
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
              <h3>Headline</h3>
              <p>Total Visitoor : 1.229</p>
              <p>Engagements : 14</p>
              <p>Exposure : None</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>Merchant Data</h3>
              <p>Product Sold : 0</p>
              <p>Product Stock : 4</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>Empty</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;