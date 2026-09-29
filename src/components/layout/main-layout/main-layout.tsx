"use client";

import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main-layout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar 
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`} 
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />
      )}

      <div className={styles.wrapper}>
        <Header 
          className={styles.header} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <main className={styles.main}>
          {children}
        </main>
        <Footer className={styles.footer} />
      </div>
    </div>
  );
}
