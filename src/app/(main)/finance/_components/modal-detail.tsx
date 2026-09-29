import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FinanceTransaction } from '@/lib/api/finance-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: FinanceTransaction }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Finance" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">accountId</div>
          <div className="text-body font-medium">{String(data.accountId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">categoryId</div>
          <div className="text-body font-medium">{String(data.categoryId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">amount</div>
          <div className="text-body font-medium">{String(data.amount || '-')}</div>
        </div>
        <div>
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">description</div>
          <div className="text-body font-medium">{String(data.description || '-')}</div>
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
