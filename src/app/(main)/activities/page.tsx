import React from 'react';
import DataTable from './_components/data-table';
import { fetchActivities } from '@/lib/api/activities-api';

export default async function ActivitiesPage() {
  const data = await fetchActivities();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Activities</h1>
        <p className="text-description">Kelola data activities Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
