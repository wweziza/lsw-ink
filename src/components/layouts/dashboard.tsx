// components/layouts/Dashboard.tsx
'use client';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../../components/layouts/dashboard.navbar';
import styles from '../../app/dashboard/Dashboard.module.css';
import { useThemeStorage } from '../../components/functions/useThemeStorage';
import axios from 'axios';
import { AuthContext } from './Auth';

const Dashboard = () => {
  const { isDarkMode, toggleTheme } = useThemeStorage();
  const { username } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState<{ username: string; userId: string; email: string; password: string }>({
    username: '',
    userId: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);
  return (
    <div className={`${styles.dashboardContainer} ${isDarkMode ? styles.dark : styles.light}`}>
      {isDarkMode !== null && <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      <div className={styles.dashboardHeader}>
        <div className={styles.welcomeMessage}>
          <h2>Welcome back, {userData.username}!</h2>
        </div>
      </div>
      <div className={styles.dashboardContentWrapper}>
        <div className={styles.dashboardContent}>
          <div className={styles.panelContainer}>
            <div className={`${styles.panel} ${styles.playerLoggedPanel}`}>
              <h3>Headline</h3>
              <p>Total Visitor : 1.229</p>
              <p>Engagements : 14</p>
              <p>Exposure : None</p>
            </div>
            <div className={`${styles.panel} ${styles.secondPanel}`}>
              <h3>Merchant Data</h3>
              <p>Product Sold : 0</p>
              <p>Product Stock : 4</p>
            </div>
            {userData ? (
        <div className={`${styles.panel} ${styles.secondPanel}`}>
          <h3>{userData.username}</h3>
          <p>LSWID: #{userData.userId}</p>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;