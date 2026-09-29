import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ModalUpdate({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: any }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Ubah Rw" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan Perubahan</Button>
      </>
    }>
      <div style={{ padding: '1rem 0' }}>Form ubah rw akan ditampilkan di sini.</div>
    </Dialog>
  );
}
