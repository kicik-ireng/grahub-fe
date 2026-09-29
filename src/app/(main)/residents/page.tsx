import React from 'react';
import DataTable from './_components/data-table';
import { fetchResidents } from '@/lib/api/residents-api';

export default async function ResidentsPage() {
  const data = await fetchResidents();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Data Warga</h1>
        <p className="text-description">Kelola data warga komunitas secara terpusat.</p>
      </header>

      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
