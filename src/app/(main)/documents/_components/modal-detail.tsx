import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Document } from '@/lib/api/documents-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Document }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Documents" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">category</div>
          <div className="text-body font-medium">{String(data.category || '-')}</div>
        </div>
        <div>
          <div className="text-caption">scope</div>
          <div className="text-body font-medium">{String(data.scope || '-')}</div>
        </div>
        <div>
          <div className="text-caption">isDeleted</div>
          <div className="text-body font-medium">{String(data.isDeleted || '-')}</div>
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
