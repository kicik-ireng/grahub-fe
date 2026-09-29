import React, { useEffect, useState } from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import styles from './header.module.css';
import { apiClient } from '@/lib/api/client';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

export default function Header({ className, onToggleSidebar }: HeaderProps) {
  const [profile, setProfile] = useState<{ email?: string, role?: string }>({ email: 'Loading...', role: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiClient.get('/auth/me');
        if (res.data) {
          setProfile({
            email: res.data.email || 'User',
            role: res.data.roles ? res.data.roles.join(', ') : 'Warga'
          });
        }
      } catch (err) {
        console.error('Failed to load profile', err);
        setProfile({ email: 'Warga', role: 'Guest' });
      }
    };
    fetchProfile();
  }, []);

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.left}>
        <button className={styles.menuToggle} onClick={onToggleSidebar} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </button>
        <div className={styles.breadcrumb}>
          <span>Dashboard</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.search}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <button className={styles.iconButton}>
          <Bell size={20} />
          <span className={styles.notificationBadge} />
        </button>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <User size={18} />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.name}>{profile.email}</span>
            <span className={styles.role}>{profile.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
