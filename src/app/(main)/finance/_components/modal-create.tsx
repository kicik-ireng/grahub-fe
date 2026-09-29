import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Finance" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="accountId" placeholder="Masukkan accountId" required />
        <Input label="categoryId" placeholder="Masukkan categoryId" required />
        <Input label="amount" placeholder="Masukkan amount" required />
        <Input label="date" placeholder="Masukkan date" required />
        <Input label="description" placeholder="Masukkan description" required />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl"  />
      </form>
    </Dialog>
  );
}
