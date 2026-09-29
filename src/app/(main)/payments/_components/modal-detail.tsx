import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Payment } from '@/lib/api/payments-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Payment }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Payments" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">dueId</div>
          <div className="text-body font-medium">{String(data.dueId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">residentId</div>
          <div className="text-body font-medium">{String(data.residentId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">amount</div>
          <div className="text-body font-medium">{String(data.amount || '-')}</div>
        </div>
        <div>
          <div className="text-caption">method</div>
          <div className="text-body font-medium">{String(data.method || '-')}</div>
        </div>
        <div>
          <div className="text-caption">proofUrl</div>
          <div className="text-body font-medium">{String(data.proofUrl || '-')}</div>
        </div>
        <div>
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">notes</div>
          <div className="text-body font-medium">{String(data.notes || '-')}</div>
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
