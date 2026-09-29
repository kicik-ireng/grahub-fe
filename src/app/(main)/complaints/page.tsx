import React from 'react';
import DataTable from './_components/data-table';
import { fetchComplaints } from '@/lib/api/complaints-api';

export default async function ComplaintsPage() {
  const data = await fetchComplaints();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Complaints</h1>
        <p className="text-description">Kelola data complaints Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
