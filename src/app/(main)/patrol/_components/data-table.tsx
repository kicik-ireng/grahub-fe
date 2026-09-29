"use client";
import React, { useState, useEffect } from "react";
import { Plus, Eye, Trash, RefreshCw } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ModalCreate from "./modal-create";
import ModalDetail from "./modal-detail";
import { PatrolSchedule, fetchPatrol, deletePatrol } from "@/lib/api/patrol-api";

export default function DataTable() {
  const [data, setData] = useState<PatrolSchedule[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selected, setSelected] = useState<PatrolSchedule | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    const result = await fetchPatrol();
    setData(Array.isArray(result) ? result : []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await deletePatrol(id);
      loadData();
    }
  };

  const filteredData = data.filter((row: any) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      const rowVal = row[key]?.toString().toLowerCase() || "";
      return rowVal.includes(value.toLowerCase());
    });
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end items-center mb-2">
        <div className="flex gap-2">
          <Button variant="outline" onClick={loadData} isLoading={isLoading}>
            <RefreshCw size={16} />
          </Button>
          <Button onClick={() => setIsCreateOpen(true)}>
            <Plus size={16} className="mr-2" style={{ marginRight: "8px" }}/> Tambah
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>date</TableHead>
            <TableHead>shift</TableHead>
            <TableHead>notes</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
          <TableRow>
            <TableHead><Input placeholder="Filter id..." style={{ height: '32px', fontSize: '12px' }} value={filters['id'] || ''} onChange={(e) => setFilters({...filters, 'id': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter date..." style={{ height: '32px', fontSize: '12px' }} value={filters['date'] || ''} onChange={(e) => setFilters({...filters, 'date': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter shift..." style={{ height: '32px', fontSize: '12px' }} value={filters['shift'] || ''} onChange={(e) => setFilters({...filters, 'shift': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter notes..." style={{ height: '32px', fontSize: '12px' }} value={filters['notes'] || ''} onChange={(e) => setFilters({...filters, 'notes': e.target.value})} /></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center" style={{ textAlign: "center", padding: "2rem" }}>
                Loading data...
              </TableCell>
            </TableRow>
          ) : filteredData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center" style={{ textAlign: "center", padding: "2rem" }}>
                Data tidak ditemukan.
              </TableCell>
            </TableRow>
          ) : (
            filteredData.map((row: any, i: number) => (
              <TableRow key={i}>
                <TableCell>{row.id?.toString() || '-'}</TableCell>
                <TableCell>{row.date?.toString() || '-'}</TableCell>
                <TableCell>{row.shift?.toString() || '-'}</TableCell>
                <TableCell>{row.notes?.toString() || '-'}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setSelected(row)}>
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(row.id as string)}>
                      <Trash size={16} className="text-danger" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <ModalCreate isOpen={isCreateOpen} onClose={() => { setIsCreateOpen(false); loadData(); }} />
      {selected && <ModalDetail isOpen={!!selected} onClose={() => setSelected(null)} data={selected} />}
    </div>
  );
}
