import React from 'react';
import DataTable from './_components/data-table';
import { fetchResidentMutations } from '@/lib/api/resident-mutations-api';

export default async function ResidentMutationsPage() {
  const data = await fetchResidentMutations();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Resident Mutations</h1>
        <p className="text-description">Kelola data resident mutations Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
