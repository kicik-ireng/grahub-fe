import React from 'react';
import DataTable from './_components/data-table';
import { fetchLetterTemplates } from '@/lib/api/letter-templates-api';

export default async function LetterTemplatesPage() {
  const data = await fetchLetterTemplates();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Letter Templates</h1>
        <p className="text-description">Kelola data letter templates Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
