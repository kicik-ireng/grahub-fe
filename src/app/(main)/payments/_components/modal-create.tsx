import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Payments" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="dueId" placeholder="Masukkan dueId" required />
        <Input label="residentId" placeholder="Masukkan residentId" required />
        <Input label="amount" placeholder="Masukkan amount" required />
        <Input label="method" placeholder="Masukkan method" required />
        <Input label="proofUrl" placeholder="Masukkan proofUrl"  />
        <Input label="date" placeholder="Masukkan date" required />
        <Input label="notes" placeholder="Masukkan notes"  />
      </form>
    </Dialog>
  );
}
