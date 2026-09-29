import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ResidentMutation } from '@/lib/api/resident-mutations-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: ResidentMutation }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Resident Mutations" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">residentId</div>
          <div className="text-body font-medium">{String(data.residentId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">reason</div>
          <div className="text-body font-medium">{String(data.reason || '-')}</div>
        </div>
        <div>
          <div className="text-caption">fromRtId</div>
          <div className="text-body font-medium">{String(data.fromRtId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">toRtId</div>
          <div className="text-body font-medium">{String(data.toRtId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">fromRwId</div>
          <div className="text-body font-medium">{String(data.fromRwId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">toRwId</div>
          <div className="text-body font-medium">{String(data.toRwId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">notes</div>
          <div className="text-body font-medium">{String(data.notes || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
