import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LetterType } from '@/lib/api/letter-types-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: LetterType }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Letter Types" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">category</div>
          <div className="text-body font-medium">{String(data.category || '-')}</div>
        </div>
        <div>
          <div className="text-caption">description</div>
          <div className="text-body font-medium">{String(data.description || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requiresRtApproval</div>
          <div className="text-body font-medium">{String(data.requiresRtApproval || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requiresRwApproval</div>
          <div className="text-body font-medium">{String(data.requiresRwApproval || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requiresKelurahanApproval</div>
          <div className="text-body font-medium">{String(data.requiresKelurahanApproval || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requiresSignature</div>
          <div className="text-body font-medium">{String(data.requiresSignature || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requiresAttachment</div>
          <div className="text-body font-medium">{String(data.requiresAttachment || '-')}</div>
        </div>
        <div>
          <div className="text-caption">isActive</div>
          <div className="text-body font-medium">{String(data.isActive || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
