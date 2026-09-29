import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letter Types" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="code" placeholder="Masukkan code" required />
        <Input label="name" placeholder="Masukkan name" required />
        <Input label="category" placeholder="Masukkan category" required />
        <Input label="description" placeholder="Masukkan description"  />
        <Input label="requiresRtApproval" placeholder="Masukkan requiresRtApproval" required />
        <Input label="requiresRwApproval" placeholder="Masukkan requiresRwApproval" required />
        <Input label="requiresKelurahanApproval" placeholder="Masukkan requiresKelurahanApproval" required />
        <Input label="requiresSignature" placeholder="Masukkan requiresSignature" required />
        <Input label="requiresAttachment" placeholder="Masukkan requiresAttachment" required />
        <Input label="isActive" placeholder="Masukkan isActive" required />
      </form>
    </Dialog>
  );
}
