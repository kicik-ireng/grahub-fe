import React from 'react';
import DataTable from './_components/data-table';
import { fetchDues } from '@/lib/api/dues-api';

export default async function DuesPage() {
  const data = await fetchDues();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Dues</h1>
        <p className="text-description">Kelola data dues Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
