import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Resident Mutations" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="residentId" placeholder="Masukkan residentId" required />
        <Input label="date" placeholder="Masukkan date" required />
        <Input label="reason" placeholder="Masukkan reason"  />
        <Input label="fromRtId" placeholder="Masukkan fromRtId"  />
        <Input label="toRtId" placeholder="Masukkan toRtId"  />
        <Input label="fromRwId" placeholder="Masukkan fromRwId"  />
        <Input label="toRwId" placeholder="Masukkan toRwId"  />
        <Input label="notes" placeholder="Masukkan notes"  />
      </form>
    </Dialog>
  );
}
