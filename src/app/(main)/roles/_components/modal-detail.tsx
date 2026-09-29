import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Role } from '@/lib/api/roles-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Role }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Roles" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">code</div>
          <div className="text-body font-medium">{String(data.code || '-')}</div>
        </div>
        <div>
          <div className="text-caption">name</div>
          <div className="text-body font-medium">{String(data.name || '-')}</div>
        </div>
        <div>
          <div className="text-caption">description</div>
          <div className="text-body font-medium">{String(data.description || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
