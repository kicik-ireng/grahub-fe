import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Due } from '@/lib/api/dues-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Due }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Dues" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">title</div>
          <div className="text-body font-medium">{String(data.title || '-')}</div>
        </div>
        <div>
          <div className="text-caption">description</div>
          <div className="text-body font-medium">{String(data.description || '-')}</div>
        </div>
        <div>
          <div className="text-caption">amount</div>
          <div className="text-body font-medium">{String(data.amount || '-')}</div>
        </div>
        <div>
          <div className="text-caption">dueDate</div>
          <div className="text-body font-medium">{String(data.dueDate || '-')}</div>
        </div>
        <div>
          <div className="text-caption">residentId</div>
          <div className="text-body font-medium">{String(data.residentId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">familyId</div>
          <div className="text-body font-medium">{String(data.familyId || '-')}</div>
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
