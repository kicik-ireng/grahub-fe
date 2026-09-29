import { apiClient } from './client';

export interface RT {
  id: string;
  number: string;
  rwId: string;
}

export const fetchRt = async (): Promise<RT[]> => {
  try {
    const res = await apiClient.get('/rt');
    return res.data;
  } catch (error) {
    console.error('Error fetching rt', error);
    return [];
  }
};

export const createRt = async (data: Partial<RT>): Promise<RT> => {
  const res = await apiClient.post('/rt', data);
  return res.data;
};

export const updateRt = async (id: string, data: Partial<RT>): Promise<RT> => {
  const res = await apiClient.put('/rt/' + id, data);
  return res.data;
};

export const deleteRt = async (id: string): Promise<void> => {
  await apiClient.delete('/rt/' + id);
};
