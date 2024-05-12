// components/Auth.tsx
'use client';
import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NotificationMessage from './notificationMessage';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  username: string;
  token: string;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  username: '',
  token: '',
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'notification' | 'error'>('notification');
  const [isNotificationShow, setShowNotification] = useState(false);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email: username, password });
      const token = response.data.token;
      // Save token to localStorage
      localStorage.setItem('token', token);
      // Set token and username in context
      setToken(token);
      setUsername(username);
      setIsAuthenticated(true);
      showNotification('Logged in successfully!', 'notification');
      router.push('/dashboard');
    } catch (error) {
      showNotification('Invalid username or password', 'error');
      console.error('Invalid username or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsername('');
    setIsAuthenticated(false);
    showNotification('Logged out successfully!', 'notification');
    router.push('/login');
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
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
      {children}
      {isNotificationShow && (
        <NotificationMessage message={notificationMessage} type={notificationType} />
      )}
    </AuthContext.Provider>
  );
};
