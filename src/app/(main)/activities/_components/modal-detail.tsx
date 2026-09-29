import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Activity } from '@/lib/api/activities-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Activity }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Activities" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">date</div>
          <div className="text-body font-medium">{String(data.date || '-')}</div>
        </div>
        <div>
          <div className="text-caption">location</div>
          <div className="text-body font-medium">{String(data.location || '-')}</div>
        </div>
        <div>
          <div className="text-caption">organizer</div>
          <div className="text-body font-medium">{String(data.organizer || '-')}</div>
        </div>
        <div>
          <div className="text-caption">budget</div>
          <div className="text-body font-medium">{String(data.budget || '-')}</div>
        </div>
        <div>
          <div className="text-caption">scope</div>
          <div className="text-body font-medium">{String(data.scope || '-')}</div>
        </div>
        <div>
          <div className="text-caption">createdAt</div>
          <div className="text-body font-medium">{String(data.createdAt || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
