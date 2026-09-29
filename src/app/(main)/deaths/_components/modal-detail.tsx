import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Death } from '@/lib/api/deaths-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Death }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Deaths" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">reporterId</div>
          <div className="text-body font-medium">{String(data.reporterId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">deceasedId</div>
          <div className="text-body font-medium">{String(data.deceasedId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">place</div>
          <div className="text-body font-medium">{String(data.place || '-')}</div>
        </div>
        <div>
          <div className="text-caption">cause</div>
          <div className="text-body font-medium">{String(data.cause || '-')}</div>
        </div>
        <div>
          <div className="text-caption">attachmentUrl</div>
          <div className="text-body font-medium">{String(data.attachmentUrl || '-')}</div>
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
