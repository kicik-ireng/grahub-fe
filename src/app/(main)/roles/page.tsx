import React from 'react';
import DataTable from './_components/data-table';
import { fetchRoles } from '@/lib/api/roles-api';

export default async function RolesPage() {
  const data = await fetchRoles();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Roles</h1>
        <p className="text-description">Kelola data roles Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
