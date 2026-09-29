import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Announcements" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="title" placeholder="Masukkan title" required />
        <Input label="content" placeholder="Masukkan content" required />
        <Input label="targetScope" placeholder="Masukkan targetScope" required />
        <Input label="priority" placeholder="Masukkan priority" required />
        <Input label="publishDate" placeholder="Masukkan publishDate" required />
        <Input label="expiryDate" placeholder="Masukkan expiryDate"  />
        <Input label="imageUrl" placeholder="Masukkan imageUrl"  />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl"  />
      </form>
    </Dialog>
  );
}
