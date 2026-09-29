import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Permission } from '@/lib/api/permissions-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Permission }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Permissions" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">group</div>
          <div className="text-body font-medium">{String(data.group || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
