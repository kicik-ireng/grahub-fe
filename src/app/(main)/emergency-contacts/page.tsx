import React from 'react';
import DataTable from './_components/data-table';
import { fetchEmergencyContacts } from '@/lib/api/emergency-contacts-api';

export default async function EmergencyContactsPage() {
  const data = await fetchEmergencyContacts();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Emergency Contacts</h1>
        <p className="text-description">Kelola data emergency contacts Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
