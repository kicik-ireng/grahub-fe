import { apiClient } from './client';

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
  try {
    const res = await apiClient.get('/audit-logs');
    return res.data;
  } catch (error) {
    console.error('Error fetching audit-logs', error);
    return [];
  }
};

export const createAuditLogs = async (data: Partial<AuditLog>): Promise<AuditLog> => {
  const res = await apiClient.post('/audit-logs', data);
  return res.data;
};

export const updateAuditLogs = async (id: string, data: Partial<AuditLog>): Promise<AuditLog> => {
  const res = await apiClient.put('/audit-logs/' + id, data);
  return res.data;
};

export const deleteAuditLogs = async (id: string): Promise<void> => {
  await apiClient.delete('/audit-logs/' + id);
};
