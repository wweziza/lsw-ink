// components/Auth.tsx
'use client';
import React, { useState, createContext, useEffect } from 'react';
import NotificationMessage from './notificationMessage';
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
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'notification' | 'error'>('notification');
  const [isNotificationShow, setShowNotification] = useState(false);


  const login = (username: string, password: string) => {
    // Simple authentication check
    if (password === 'admin') {
      setIsAuthenticated(true);
      setUsername(username);
      showNotification('Logged in successfully!', 'notification');
    } else {
      // Show error message
      showNotification('Invalid username or password', 'error');
      console.error('Invalid username or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    showNotification('Logged out successfully!', 'notification');
  };

  const showNotification = (message: string, type: 'notification' | 'error') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
      {isNotificationShow && (
        <NotificationMessage message={notificationMessage} type={notificationType} />
      )}
    </AuthContext.Provider>
  );
};