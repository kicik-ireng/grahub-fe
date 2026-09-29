import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Family } from '@/lib/api/families-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Family }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Families" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">familyCardNumber</div>
          <div className="text-body font-medium">{String(data.familyCardNumber || '-')}</div>
        </div>
        <div>
          <div className="text-caption">headResidentId</div>
          <div className="text-body font-medium">{String(data.headResidentId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">address</div>
          <div className="text-body font-medium">{String(data.address || '-')}</div>
        </div>
        <div>
          <div className="text-caption">rtId</div>
          <div className="text-body font-medium">{String(data.rtId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">rwId</div>
          <div className="text-body font-medium">{String(data.rwId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">kelurahanId</div>
          <div className="text-body font-medium">{String(data.kelurahanId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">createdAt</div>
          <div className="text-body font-medium">{String(data.createdAt || '-')}</div>
        </div>
        <div>
          <div className="text-caption">updatedAt</div>
          <div className="text-body font-medium">{String(data.updatedAt || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
