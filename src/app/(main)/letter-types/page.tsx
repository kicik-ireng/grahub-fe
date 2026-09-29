import React from 'react';
import DataTable from './_components/data-table';
import { fetchLetterTypes } from '@/lib/api/letter-types-api';

export default async function LetterTypesPage() {
  const data = await fetchLetterTypes();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Letter Types</h1>
        <p className="text-description">Kelola data letter types Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
