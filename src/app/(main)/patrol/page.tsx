import React from 'react';
import DataTable from './_components/data-table';
import { fetchPatrol } from '@/lib/api/patrol-api';

export default async function PatrolPage() {
  const data = await fetchPatrol();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Patrol</h1>
        <p className="text-description">Kelola data patrol Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
