import React from 'react';
import DataTable from './_components/data-table';
import { fetchFinance } from '@/lib/api/finance-api';

export default async function FinancePage() {
  const data = await fetchFinance();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Finance</h1>
        <p className="text-description">Kelola data finance Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
