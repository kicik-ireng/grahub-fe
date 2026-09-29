"use client";
import React, { useState, useEffect } from 'react';
import { Users, UserPlus, DollarSign, Activity } from 'lucide-react';
import styles from './dashboard.module.css';
import { fetchResidents } from '@/lib/api/residents-api';
import { fetchFamilies } from '@/lib/api/families-api';
import { fetchComplaints } from '@/lib/api/complaints-api';

export default function DashboardPage() {
  const [stats, setStats] = useState({ residents: 0, families: 0, complaints: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      setIsLoading(true);
      try {
        const [res, fam, comp] = await Promise.all([
          fetchResidents().catch(() => []),
          fetchFamilies().catch(() => []),
          fetchComplaints().catch(() => []),
        ]);
        
        setStats({
          residents: Array.isArray(res) ? res.length : 0,
          families: Array.isArray(fam) ? fam.length : 0,
          complaints: Array.isArray(comp) ? (comp as any[]).filter((c: any) => c.status === 'PENDING').length : 0,
        });
      } catch (err) {
        console.error("Error loading dashboard stats", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadStats();
  }, []);

  const kpis = [
    { title: 'Total Warga', value: isLoading ? '...' : stats.residents.toString(), icon: Users, trend: 'Total penduduk terdaftar' },
    { title: 'Keluarga', value: isLoading ? '...' : stats.families.toString(), icon: UserPlus, trend: 'Total kartu keluarga' },
    { title: 'Kas RT', value: 'Lihat Keuangan', icon: DollarSign, trend: 'Modul transaksi' },
    { title: 'Aduan Pending', value: isLoading ? '...' : stats.complaints.toString(), icon: Activity, trend: 'Butuh tindak lanjut' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="text-page-title">Dashboard</h1>
        <p className="text-description">Selamat datang, berikut ringkasan informasi komunitas Anda.</p>
      </header>

      <div className={styles.kpiGrid}>
        {kpis.map((kpi, idx) => (
          <div key={idx} className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiTitle}>{kpi.title}</span>
              <div className={styles.kpiIcon}>
                <kpi.icon size={20} />
              </div>
            </div>
            <div className={styles.kpiValue}>{kpi.value}</div>
            <div className={styles.kpiTrend}>{kpi.trend}</div>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.mainCard}>
          <h2 className="text-card-title mb-4">Aktivitas Terkini</h2>
          <div className={styles.emptyState}>
            Belum ada aktivitas hari ini.
          </div>
        </div>
        <div className={styles.sideCard}>
          <h2 className="text-card-title mb-4">Tugas Pending</h2>
          <div className={styles.emptyState}>
            Semua tugas sudah diselesaikan!
          </div>
        </div>
      </div>
    </div>
  );
}
