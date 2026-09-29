import { apiClient } from './client';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  targetScope: string;
  priority: string;
  publishDate: string;
  expiryDate?: string;
  imageUrl?: string;
  attachmentUrl?: string;
  createdAt: string;
}

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  try {
    const res = await apiClient.get('/announcements');
    return res.data;
  } catch (error) {
    console.error('Error fetching announcements', error);
    return [];
  }
};

export const createAnnouncements = async (data: Partial<Announcement>): Promise<Announcement> => {
  const res = await apiClient.post('/announcements', data);
  return res.data;
};

export const updateAnnouncements = async (id: string, data: Partial<Announcement>): Promise<Announcement> => {
  const res = await apiClient.put('/announcements/' + id, data);
  return res.data;
};

export const deleteAnnouncements = async (id: string): Promise<void> => {
  await apiClient.delete('/announcements/' + id);
};
