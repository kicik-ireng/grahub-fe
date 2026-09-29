import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AuditLog } from '@/lib/api/audit-logs-api';

export default function ModalDetail({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: AuditLog }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Detail Audit Logs" footer={<Button onClick={onClose}>Tutup</Button>}>
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
          <div className="text-caption">action</div>
          <div className="text-body font-medium">{String(data.action || '-')}</div>
        </div>
        <div>
          <div className="text-caption">module</div>
          <div className="text-body font-medium">{String(data.module || '-')}</div>
        </div>
        <div>
          <div className="text-caption">entity</div>
          <div className="text-body font-medium">{String(data.entity || '-')}</div>
        </div>
        <div>
          <div className="text-caption">entityId</div>
          <div className="text-body font-medium">{String(data.entityId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">before</div>
          <div className="text-body font-medium">{String(data.before || '-')}</div>
        </div>
        <div>
          <div className="text-caption">after</div>
          <div className="text-body font-medium">{String(data.after || '-')}</div>
        </div>
        <div>
          <div className="text-caption">ipAddress</div>
          <div className="text-body font-medium">{String(data.ipAddress || '-')}</div>
        </div>
        <div>
          <div className="text-caption">userAgent</div>
          <div className="text-body font-medium">{String(data.userAgent || '-')}</div>
        </div>
        <div>
          <div className="text-caption">requestId</div>
          <div className="text-body font-medium">{String(data.requestId || '-')}</div>
        </div>
        <div>
          <div className="text-caption">createdAt</div>
          <div className="text-body font-medium">{String(data.createdAt || '-')}</div>
        </div>
      </div>
    </Dialog>
  );
}
