import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Complaints" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="residentId" placeholder="Masukkan residentId" required />
        <Input label="category" placeholder="Masukkan category" required />
        <Input label="title" placeholder="Masukkan title" required />
        <Input label="description" placeholder="Masukkan description" required />
        <Input label="assignedTo" placeholder="Masukkan assignedTo"  />
      </form>
    </Dialog>
  );
}
