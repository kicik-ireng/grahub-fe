import React from 'react';
import DataTable from './_components/data-table';
import { fetchAnnouncements } from '@/lib/api/announcements-api';

export default async function AnnouncementsPage() {
  const data = await fetchAnnouncements();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Announcements</h1>
        <p className="text-description">Kelola data announcements Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
