import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LetterTemplate } from '@/lib/api/letter-templates-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: LetterTemplate }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Letter Templates" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">letterTypeId</div>
          <div className="text-body font-medium">{String(data.letterTypeId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">name</div>
          <div className="text-body font-medium">{String(data.name || '-')}</div>
        </div>
        <div>
          <div className="text-caption">contentHtml</div>
          <div className="text-body font-medium">{String(data.contentHtml || '-')}</div>
        </div>
        <div>
          <div className="text-caption">version</div>
          <div className="text-body font-medium">{String(data.version || '-')}</div>
        </div>
        <div>
          <div className="text-caption">isActive</div>
          <div className="text-body font-medium">{String(data.isActive || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
