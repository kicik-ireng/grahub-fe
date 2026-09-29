import React from 'react';
import { Users, UserPlus, DollarSign, Activity } from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const kpis = [
    { title: 'Total Warga', value: '1,240', icon: Users, trend: '+5% dari bulan lalu' },
    { title: 'Keluarga', value: '380', icon: UserPlus, trend: '+2 keluarga baru' },
    { title: 'Kas RT', value: 'Rp 15.400.000', icon: DollarSign, trend: '+Rp 2.000.000 bulan ini' },
    { title: 'Aduan Aktif', value: '4', icon: Activity, trend: '2 butuh verifikasi' },
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
