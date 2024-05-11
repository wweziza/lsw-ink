// components/layouts/Login.tsx
'use client';
import React from 'react';
import Navbar from '../../components/layouts/navbar';
import styles from '../../styles/Login.module.css';
import { useThemeStorage } from '../../components/functions/useThemeStorage';

const Login = () => {
  const { isDarkMode, toggleTheme } = useThemeStorage();

  return (
    <div className={`${styles.loginContainer} ${isDarkMode ? styles.dark : styles.light}`}>
            {isDarkMode !== null && (
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      )}
      <div className={styles.loginContentWrapper}>
        <div className={styles.loginContent}>
          <h2>Welcome back!</h2>
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;