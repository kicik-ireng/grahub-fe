"use client";

import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash, Eye } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Resident } from '@/lib/api/residents-api';
import ModalCreate from './modal-create';
import ModalDetail from './modal-detail';

interface DataTableProps {
  data: Resident[];
}

export default function DataTable({ data }: DataTableProps) {
  const [search, setSearch] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedResident, setSelectedResident] = useState<Resident | null>(null);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.nik.includes(search)
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div style={{ width: '300px' }}>
          <Input 
            placeholder="Cari warga berdasarkan NIK atau Nama..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus size={16} className="mr-2" style={{ marginRight: '8px' }}/> Tambah Warga
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NIK</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>RT/RW</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center" style={{ textAlign: 'center', padding: '2rem' }}>
                Belum ada data warga yang cocok.
              </TableCell>
            </TableRow>
          ) : (
            filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.nik}</TableCell>
                <TableCell style={{ fontWeight: 500 }}>{row.name}</TableCell>
                <TableCell>{row.gender === 'MALE' ? 'Laki-laki' : 'Perempuan'}</TableCell>
                <TableCell>{row.rt} / {row.rw}</TableCell>
                <TableCell>
                  <Badge variant={row.status === 'ACTIVE' ? 'success' : 'default'}>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedResident(row)}>
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <ModalCreate isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      {selectedResident && (
        <ModalDetail 
          isOpen={!!selectedResident} 
          onClose={() => setSelectedResident(null)} 
          resident={selectedResident} 
        />
      )}
    </div>
  );
}
