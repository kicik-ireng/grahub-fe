import React from 'react';
import DataTable from './_components/data-table';
import { fetchSettings } from '@/lib/api/settings-api';

export default async function SettingsPage() {
  const data = await fetchSettings();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Settings</h1>
        <p className="text-description">Kelola data settings Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
