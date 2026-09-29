"use client";
import React, { useState } from 'react';
import { Plus, Eye, Edit } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ModalCreate from './modal-create';
import ModalDetail from './modal-detail';
import { AuditLog } from '@/lib/api/audit-logs-api';

export default function DataTable({ data = [] }: { data: AuditLog[] }) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selected, setSelected] = useState<AuditLog | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div style={{ width: '300px' }}>
          <Input placeholder="Cari data..." />
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus size={16} className="mr-2" style={{ marginRight: '8px' }}/> Tambah
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>userId</TableHead>
            <TableHead>action</TableHead>
            <TableHead>module</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center" style={{ textAlign: 'center', padding: '2rem' }}>
                Data belum tersedia.
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.module}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setSelected(row)}>
                      <Eye size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <ModalCreate isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      {selected && <ModalDetail isOpen={!!selected} onClose={() => setSelected(null)} data={selected} />}
    </div>
  );
}
