// components/ErrorMessage.tsx
import React from 'react';
import styles from '../../styles/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.errorMessageContent}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;