import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Audit Logs" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="userId" placeholder="Masukkan userId"  />
        <Input label="action" placeholder="Masukkan action" required />
        <Input label="module" placeholder="Masukkan module" required />
        <Input label="entity" placeholder="Masukkan entity" required />
        <Input label="entityId" placeholder="Masukkan entityId"  />
        <Input label="before" placeholder="Masukkan before"  />
        <Input label="after" placeholder="Masukkan after"  />
        <Input label="ipAddress" placeholder="Masukkan ipAddress"  />
        <Input label="userAgent" placeholder="Masukkan userAgent"  />
        <Input label="requestId" placeholder="Masukkan requestId"  />
      </form>
    </Dialog>
  );
}
