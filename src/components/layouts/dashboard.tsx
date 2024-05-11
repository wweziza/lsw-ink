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
              <h3>Wan Cheng</h3>
              <p>Money : $31.229,00</p>
              <p>Level : 14</p>
              <p>Faction : None</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>New Character</h3>
              <p>Click me, to make a new character</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>New Character</h3>
              <p>Click me, to make a new character</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;