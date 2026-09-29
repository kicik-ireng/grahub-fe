import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Births" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="reporterId" placeholder="Masukkan reporterId" required />
        <Input label="bornResidentId" placeholder="Masukkan bornResidentId"  />
        <Input label="date" placeholder="Masukkan date" required />
        <Input label="place" placeholder="Masukkan place" required />
        <Input label="notes" placeholder="Masukkan notes"  />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl"  />
      </form>
    </Dialog>
  );
}
