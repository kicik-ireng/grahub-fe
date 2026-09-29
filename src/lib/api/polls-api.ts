import { apiClient } from './client';

export interface Poll {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export const fetchPolls = async (): Promise<Poll[]> => {
  try {
    const res = await apiClient.get('/polls');
    return res.data;
  } catch (error) {
    console.error('Error fetching polls', error);
    return [];
  }
};

export const createPolls = async (data: Partial<Poll>): Promise<Poll> => {
  const res = await apiClient.post('/polls', data);
  return res.data;
};

export const updatePolls = async (id: string, data: Partial<Poll>): Promise<Poll> => {
  const res = await apiClient.put('/polls/' + id, data);
  return res.data;
};

export const deletePolls = async (id: string): Promise<void> => {
  await apiClient.delete('/polls/' + id);
};
