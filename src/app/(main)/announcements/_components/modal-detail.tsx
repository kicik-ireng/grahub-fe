import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Announcement } from '@/lib/api/announcements-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: Announcement }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Announcements" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">content</div>
          <div className="text-body font-medium">{String(data.content || '-')}</div>
        </div>
        <div>
          <div className="text-caption">targetScope</div>
          <div className="text-body font-medium">{String(data.targetScope || '-')}</div>
        </div>
        <div>
          <div className="text-caption">priority</div>
          <div className="text-body font-medium">{String(data.priority || '-')}</div>
        </div>
        <div>
          <div className="text-caption">publishDate</div>
          <div className="text-body font-medium">{String(data.publishDate || '-')}</div>
        </div>
        <div>
          <div className="text-caption">expiryDate</div>
          <div className="text-body font-medium">{String(data.expiryDate || '-')}</div>
        </div>
        <div>
          <div className="text-caption">imageUrl</div>
          <div className="text-body font-medium">{String(data.imageUrl || '-')}</div>
        </div>
        <div>
          <div className="text-caption">attachmentUrl</div>
          <div className="text-body font-medium">{String(data.attachmentUrl || '-')}</div>
        </div>
        <div>
          <div className="text-caption">createdAt</div>
          <div className="text-body font-medium">{String(data.createdAt || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
