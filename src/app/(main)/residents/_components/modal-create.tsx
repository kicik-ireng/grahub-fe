import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ModalCreateProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreate({ isOpen, onClose }: ModalCreateProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call logic here
    onClose();
  };

  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Tambah Warga Baru"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Batal</Button>
          <Button onClick={handleSubmit}>Simpan</Button>
        </>
      }
    >
      <form id="create-resident-form" onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="NIK" required placeholder="Masukkan 16 digit NIK" />
        <Input label="Nama Lengkap" required placeholder="Sesuai KTP" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="RT" required />
          <Input label="RW" required />
        </div>
        <Input label="Nomor Telepon" placeholder="08..." />
      </form>
    </Dialog>
  );
}
