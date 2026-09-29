import React from 'react';
import DataTable from './_components/data-table';
import { fetchAuditLogs } from '@/lib/api/audit-logs-api';

export default async function AuditLogsPage() {
  const data = await fetchAuditLogs();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="text-page-title">Audit Logs</h1>
        <p className="text-description">Kelola data audit logs Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
