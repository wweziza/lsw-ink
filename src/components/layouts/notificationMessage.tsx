// components/NotificationMessage.tsx
import React from 'react';
import styles from '../../styles/notificationMessage.module.css';

interface NotificationMessageProps {
  message: string;
  type: 'notification' | 'error';
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({ message, type }) => {
  return (
    <div
      className={`${styles.notificationMessage} ${
        type === 'notification' ? styles.notificationColor : styles.errorColor
      }`}
    >
      <div className={styles.notificationMessageContent}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationMessage;