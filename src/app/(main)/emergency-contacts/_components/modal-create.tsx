import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Emergency Contacts" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="name" placeholder="Masukkan name" required />
        <Input label="category" placeholder="Masukkan category" required />
        <Input label="phone" placeholder="Masukkan phone" required />
        <Input label="address" placeholder="Masukkan address"  />
        <Input label="isActive" placeholder="Masukkan isActive" required />
      </form>
    </Dialog>
  );
}
