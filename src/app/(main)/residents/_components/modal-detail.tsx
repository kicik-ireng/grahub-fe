import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Resident } from '@/lib/api/residents-api';
import { Badge } from '@/components/ui/badge';

interface ModalDetailProps {
  isOpen: boolean;
  onClose: () => void;
  resident: Resident;
}

export default function ModalDetail({ isOpen, onClose, resident }: ModalDetailProps) {
  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Detail Warga"
      footer={
        <Button variant="outline" onClick={onClose}>Tutup</Button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h3 className="text-section-title" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Informasi Personal</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <div className="text-caption">NIK</div>
              <div className="text-body font-medium">{resident.nik}</div>
            </div>
            <div>
              <div className="text-caption">Nama</div>
              <div className="text-body font-medium">{resident.name}</div>
            </div>
            <div>
              <div className="text-caption">Gender</div>
              <div className="text-body font-medium">{resident.gender === 'MALE' ? 'Laki-laki' : 'Perempuan'}</div>
            </div>
            <div>
              <div className="text-caption">Status</div>
              <div><Badge variant={resident.status === 'ACTIVE' ? 'success' : 'default'}>{resident.status}</Badge></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-section-title" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Alamat & Kontak</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <div className="text-caption">RT / RW</div>
              <div className="text-body font-medium">{resident.rt} / {resident.rw}</div>
            </div>
            <div>
              <div className="text-caption">No. HP</div>
              <div className="text-body font-medium">{resident.phone || '-'}</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
