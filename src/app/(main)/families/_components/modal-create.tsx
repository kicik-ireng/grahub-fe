import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Families" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="familyCardNumber" placeholder="Masukkan familyCardNumber" required />
        <Input label="headResidentId" placeholder="Masukkan headResidentId"  />
        <Input label="address" placeholder="Masukkan address" required />
        <Input label="rtId" placeholder="Masukkan rtId" required />
        <Input label="rwId" placeholder="Masukkan rwId" required />
        <Input label="kelurahanId" placeholder="Masukkan kelurahanId" required />
      </form>
    </Dialog>
  );
}
