import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Notifications" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="userId" placeholder="Masukkan userId"  />
        <Input label="title" placeholder="Masukkan title" required />
        <Input label="content" placeholder="Masukkan content" required />
        <Input label="type" placeholder="Masukkan type" required />
        <Input label="isRead" placeholder="Masukkan isRead" required />
      </form>
    </Dialog>
  );
}
