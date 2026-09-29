import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Notification } from '@/lib/api/notifications-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Notification }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Notifications" footer={<Button onClick={onClose}>Tutup</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        <div>
          <div className="text-caption">id</div>
          <div className="text-body font-medium">{String(data.id || '-')}</div>
        </div>
        <div>
          <div className="text-caption">userId</div>
          <div className="text-body font-medium">{String(data.userId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">title</div>
          <div className="text-body font-medium">{String(data.title || '-')}</div>
        </div>
        <div>
          <div className="text-caption">content</div>
          <div className="text-body font-medium">{String(data.content || '-')}</div>
        </div>
        <div>
          <div className="text-caption">type</div>
          <div className="text-body font-medium">{String(data.type || '-')}</div>
        </div>
        <div>
          <div className="text-caption">isRead</div>
          <div className="text-body font-medium">{String(data.isRead || '-')}</div>
        </div>
        <div>
          <div className="text-caption">createdAt</div>
          <div className="text-body font-medium">{String(data.createdAt || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
