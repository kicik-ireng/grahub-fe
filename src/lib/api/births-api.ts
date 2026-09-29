import { apiClient } from './client';

export interface Birth {
  id: string;
  reporterId: string;
  bornResidentId?: string;
  date: string;
  place: string;
  notes?: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchBirths = async (): Promise<Birth[]> => {
  try {
    const res = await apiClient.get('/births');
    return res.data;
  } catch (error) {
    console.error('Error fetching births', error);
    return [];
  }
};

export const createBirths = async (data: Partial<Birth>): Promise<Birth> => {
  const res = await apiClient.post('/births', data);
  return res.data;
};

export const updateBirths = async (id: string, data: Partial<Birth>): Promise<Birth> => {
  const res = await apiClient.put('/births/' + id, data);
  return res.data;
};

export const deleteBirths = async (id: string): Promise<void> => {
  await apiClient.delete('/births/' + id);
};
