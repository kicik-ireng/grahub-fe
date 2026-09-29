import React from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className || ''}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className={styles.loader}></span> : children}
    </button>
  );
}
