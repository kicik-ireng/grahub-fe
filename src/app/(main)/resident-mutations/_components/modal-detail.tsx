import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: any }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Resident Mutations" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ padding: '1rem 0' }}>Detail informasi resident mutations akan ditampilkan di sini.</div>
    </Dialog>
  );
}
