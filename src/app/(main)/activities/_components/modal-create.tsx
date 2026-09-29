import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Activities" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="title" placeholder="Masukkan title" required />
        <Input label="description" placeholder="Masukkan description"  />
        <Input label="date" placeholder="Masukkan date" required />
        <Input label="location" placeholder="Masukkan location" required />
        <Input label="organizer" placeholder="Masukkan organizer"  />
        <Input label="budget" placeholder="Masukkan budget"  />
        <Input label="scope" placeholder="Masukkan scope" required />
      </form>
    </Dialog>
  );
}
