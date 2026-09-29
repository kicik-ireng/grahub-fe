"use client";
import React, { useState, useEffect } from "react";
import { Plus, Eye, Trash, RefreshCw } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ModalCreate from "./modal-create";
import ModalDetail from "./modal-detail";
import { EmergencyContact, fetchEmergencyContacts, deleteEmergencyContacts } from "@/lib/api/emergency-contacts-api";

export default function DataTable() {
  const [data, setData] = useState<EmergencyContact[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selected, setSelected] = useState<EmergencyContact | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    const result = await fetchEmergencyContacts();
    setData(Array.isArray(result) ? result : []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await deleteEmergencyContacts(id);
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
            <TableHead>name</TableHead>
            <TableHead>category</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
          <TableRow>
            <TableHead><Input placeholder="Filter id..." style={{ height: '32px', fontSize: '12px' }} value={filters['id'] || ''} onChange={(e) => setFilters({...filters, 'id': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter name..." style={{ height: '32px', fontSize: '12px' }} value={filters['name'] || ''} onChange={(e) => setFilters({...filters, 'name': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter category..." style={{ height: '32px', fontSize: '12px' }} value={filters['category'] || ''} onChange={(e) => setFilters({...filters, 'category': e.target.value})} /></TableHead>
            <TableHead><Input placeholder="Filter phone..." style={{ height: '32px', fontSize: '12px' }} value={filters['phone'] || ''} onChange={(e) => setFilters({...filters, 'phone': e.target.value})} /></TableHead>
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
                <TableCell>{row.name?.toString() || '-'}</TableCell>
                <TableCell>{row.category?.toString() || '-'}</TableCell>
                <TableCell>{row.phone?.toString() || '-'}</TableCell>
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
