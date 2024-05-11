// components/layouts/Login.tsx
'use client';
import React, { useContext } from 'react';
import Navbar from '../../components/layouts/navbar';
import styles from '../../styles/Login.module.css';
import { useThemeStorage } from '../../components/functions/useThemeStorage';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/components/layouts/Auth';

const Login = () => {
  const { isDarkMode, toggleTheme } = useThemeStorage();
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleSubmit called');
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    login(username, password);
    if (password === 'admin') {
      router.push('/dashboard');
    }
  };

  return (
    <div className={`${styles.loginContainer} ${isDarkMode ? styles.dark : styles.light}`}>
      {isDarkMode !== null && (
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      )}
      <div className={styles.loginContentWrapper}>
        <div className={styles.loginContent}>
          <h2>Welcome back!</h2>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
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