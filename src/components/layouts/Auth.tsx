// components/Auth.tsx
'use client';
import React, { useState, createContext, useEffect } from 'react';
import ErrorMessage from './errorMessage';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  username: string;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  username: '',
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const login = (username: string, password: string) => {
    // Simple authentication check
    if (password === 'admin') {
      setIsAuthenticated(true);
      setUsername(username);
      setErrorMessage('');
      setShowError(false);
    } else {
      // Show error message
      setErrorMessage('Invalid username or password');
      setShowError(true);
      console.error('Invalid username or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 3000); // Hide the error message after 3 seconds

    return () => clearTimeout(timer);
  }, [showError]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
      {showError && <ErrorMessage message={errorMessage} />}
    </AuthContext.Provider>
  );
};