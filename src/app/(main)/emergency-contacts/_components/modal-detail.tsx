import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EmergencyContact } from '@/lib/api/emergency-contacts-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: EmergencyContact }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Emergency Contacts" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">name</div>
          <div className="text-body font-medium">{String(data.name || '-')}</div>
        </div>
        <div>
          <div className="text-caption">category</div>
          <div className="text-body font-medium">{String(data.category || '-')}</div>
        </div>
        <div>
          <div className="text-caption">phone</div>
          <div className="text-body font-medium">{String(data.phone || '-')}</div>
        </div>
        <div>
          <div className="text-caption">address</div>
          <div className="text-body font-medium">{String(data.address || '-')}</div>
        </div>
        <div>
          <div className="text-caption">isActive</div>
          <div className="text-body font-medium">{String(data.isActive || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
