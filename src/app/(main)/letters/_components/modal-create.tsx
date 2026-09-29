import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letters" footer={
      <>
        <Button variant="outline" onClick={onClose}>Batal</Button>
        <Button onClick={onClose}>Simpan</Button>
      </>
    }>
      <form className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="number" placeholder="Masukkan number"  />
        <Input label="letterTypeId" placeholder="Masukkan letterTypeId" required />
        <Input label="templateId" placeholder="Masukkan templateId"  />
        <Input label="requesterId" placeholder="Masukkan requesterId" required />
        <Input label="dynamicData" placeholder="Masukkan dynamicData"  />
        <Input label="qrCodeUrl" placeholder="Masukkan qrCodeUrl"  />
        <Input label="verificationCode" placeholder="Masukkan verificationCode"  />
      </form>
    </Dialog>
  );
}
