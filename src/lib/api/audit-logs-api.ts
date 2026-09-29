export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  module: string;
  entity: string;
  entityId?: string;
  before?: any;
  after?: any;
  ipAddress?: string;
  userAgent?: string;
  requestId?: string;
  createdAt: string;
}

export const fetchAuditLogs = async (): Promise<AuditLog[]> => {
  return [];
};
