import React from 'react';
import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({ label, error, helperText, className, id, ...props }: InputProps) {
  const inputId = id || label?.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label} {props.required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input 
        id={inputId} 
        className={`${styles.input} ${error ? styles.inputError : ''}`} 
        {...props} 
      />
      {error && <span className={styles.error}>{error}</span>}
      {helperText && !error && <span className={styles.helper}>{helperText}</span>}
    </div>
  );
}
