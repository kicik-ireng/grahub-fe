import { apiClient } from './client';

export interface Death {
  id: string;
  reporterId: string;
  deceasedId: string;
  date: string;
  place: string;
  cause?: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchDeaths = async (): Promise<Death[]> => {
  try {
    const res = await apiClient.get('/deaths');
    return res.data;
  } catch (error) {
    console.error('Error fetching deaths', error);
    return [];
  }
};

export const createDeaths = async (data: Partial<Death>): Promise<Death> => {
  const res = await apiClient.post('/deaths', data);
  return res.data;
};

export const updateDeaths = async (id: string, data: Partial<Death>): Promise<Death> => {
  const res = await apiClient.put('/deaths/' + id, data);
  return res.data;
};

export const deleteDeaths = async (id: string): Promise<void> => {
  await apiClient.delete('/deaths/' + id);
};
