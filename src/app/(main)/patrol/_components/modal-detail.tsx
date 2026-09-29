import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PatrolSchedule } from '@/lib/api/patrol-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: PatrolSchedule }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Patrol" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">shift</div>
          <div className="text-body font-medium">{String(data.shift || '-')}</div>
        </div>
        <div>
          <div className="text-caption">notes</div>
          <div className="text-body font-medium">{String(data.notes || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
