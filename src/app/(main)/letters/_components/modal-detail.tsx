import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LetterRequest } from '@/lib/api/letters-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: LetterRequest }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Letters" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">number</div>
          <div className="text-body font-medium">{String(data.number || '-')}</div>
        </div>
        <div>
          <div className="text-caption">letterTypeId</div>
          <div className="text-body font-medium">{String(data.letterTypeId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">templateId</div>
          <div className="text-body font-medium">{String(data.templateId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requesterId</div>
          <div className="text-body font-medium">{String(data.requesterId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">dynamicData</div>
          <div className="text-body font-medium">{String(data.dynamicData || '-')}</div>
        </div>
        <div>
          <div className="text-caption">qrCodeUrl</div>
          <div className="text-body font-medium">{String(data.qrCodeUrl || '-')}</div>
        </div>
        <div>
          <div className="text-caption">verificationCode</div>
          <div className="text-body font-medium">{String(data.verificationCode || '-')}</div>
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
