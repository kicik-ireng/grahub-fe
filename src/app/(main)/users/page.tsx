import React from 'react';
import DataTable from './_components/data-table';
import { fetchUsers } from '@/lib/api/users-api';

export default async function UsersPage() {
  const data = await fetchUsers();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Users</h1>
        <p className="text-description">Kelola data users Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
