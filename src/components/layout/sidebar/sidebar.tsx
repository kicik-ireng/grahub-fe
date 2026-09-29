import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, Users, UserPlus, 
  Baby, SearchX, Mail, DollarSign, CreditCard,
  ShieldAlert, Activity, AlertCircle, Phone,
  FileText, Bell, BarChart2, Shield, Settings,
  LogOut, X
} from 'lucide-react';
import styles from './sidebar.module.css';

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

const MENU_ITEMS = [
  { group: 'Overview', items: [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }
  ]},
  { group: 'Demographics', items: [
    { label: 'Residents', href: '/residents', icon: Users },
    { label: 'Families', href: '/families', icon: UserPlus },
    { label: 'Births', href: '/births', icon: Baby },
    { label: 'Deaths', href: '/deaths', icon: SearchX },
  ]},
  { group: 'Administration', items: [
    { label: 'Letters', href: '/letters', icon: Mail },
    { label: 'Documents', href: '/documents', icon: FileText },
  ]},
  { group: 'Finance', items: [
    { label: 'Dues', href: '/dues', icon: DollarSign },
    { label: 'Payments', href: '/payments', icon: CreditCard },
    { label: 'Finance', href: '/finance', icon: BarChart2 },
  ]},
  { group: 'Community', items: [
    { label: 'Patrol', href: '/patrol', icon: ShieldAlert },
    { label: 'Activities', href: '/activities', icon: Activity },
    { label: 'Complaints', href: '/complaints', icon: AlertCircle },
    { label: 'Emergency', href: '/emergency-contacts', icon: Phone },
  ]},
  { group: 'System', items: [
    { label: 'Notifications', href: '/notifications', icon: Bell },
    { label: 'Reports', href: '/reports', icon: BarChart2 },
    { label: 'Users', href: '/users', icon: Shield },
    { label: 'Settings', href: '/settings', icon: Settings },
  ]}
];

export default function Sidebar({ className, onClose }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${className || ''}`}>
      <div className={styles.brand}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className={styles.brandIcon}>GR</span>
          <span className={styles.brandText}>GRahub</span>
        </div>
        {onClose && (
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
            <X size={20} />
          </button>
        )}
      </div>
      <div className={styles.menuContainer}>
        {MENU_ITEMS.map((group, idx) => (
          <div key={idx} className={styles.menuGroup}>
            <div className={styles.groupLabel}>{group.group}</div>
            <div className={styles.items}>
              {group.items.map((item, iIdx) => (
                <Link key={iIdx} href={item.href} className={styles.menuItem}>
                  <item.icon className={styles.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <button className={styles.logoutButton}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
