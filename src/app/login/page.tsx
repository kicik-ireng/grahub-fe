"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { apiClient } from '@/lib/api/client';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await apiClient.post('/auth/login', { email, password });
      
      // Assuming backend returns { accessToken: ... } or similar
      const token = res.data.accessToken || res.data.access_token || res.data.token;
      
      if (token) {
        localStorage.setItem('token', token);
      }
      
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error', err);
      setError(err.response?.data?.message || 'Invalid credentials or server error.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className="text-page-title">GRahub</h1>
          <p className="text-description">Login to manage your community</p>
        </div>
        <form className={styles.form} onSubmit={handleLogin}>
          {error && <div style={{ color: 'red', fontSize: '14px', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email or NIK</label>
            <input type="text" id="email" placeholder="Enter your email or NIK" required disabled={isLoading} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required disabled={isLoading} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
