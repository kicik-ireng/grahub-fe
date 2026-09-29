import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letter Templates" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="letterTypeId" placeholder="Masukkan letterTypeId" required />
        <Input label="name" placeholder="Masukkan name" required />
        <Input label="contentHtml" placeholder="Masukkan contentHtml" required />
        <Input label="version" placeholder="Masukkan version" required />
        <Input label="isActive" placeholder="Masukkan isActive" required />
      </form>
    </Dialog>
  );
}
