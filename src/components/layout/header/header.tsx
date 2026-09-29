import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import styles from './header.module.css';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

export default function Header({ className, onToggleSidebar }: HeaderProps) {
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
            <span className={styles.name}>Admin RW</span>
            <span className={styles.role}>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
