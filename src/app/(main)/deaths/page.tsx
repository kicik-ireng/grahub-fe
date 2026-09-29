import React from 'react';
import DataTable from './_components/data-table';
import { fetchDeaths } from '@/lib/api/deaths-api';

export default async function DeathsPage() {
  const data = await fetchDeaths();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Deaths</h1>
        <p className="text-description">Kelola data deaths Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
