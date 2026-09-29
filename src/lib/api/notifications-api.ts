import { apiClient } from './client';

export interface Notification {
  id: string;
  userId?: string;
  title: string;
  content: string;
  type: string;
  isRead: boolean;
  createdAt: string;
}

export const fetchNotifications = async (): Promise<Notification[]> => {
  try {
    const res = await apiClient.get('/notifications');
    return res.data;
  } catch (error) {
    console.error('Error fetching notifications', error);
    return [];
  }
};

export const createNotifications = async (data: Partial<Notification>): Promise<Notification> => {
  const res = await apiClient.post('/notifications', data);
  return res.data;
};

export const updateNotifications = async (id: string, data: Partial<Notification>): Promise<Notification> => {
  const res = await apiClient.put('/notifications/' + id, data);
  return res.data;
};

export const deleteNotifications = async (id: string): Promise<void> => {
  await apiClient.delete('/notifications/' + id);
};
