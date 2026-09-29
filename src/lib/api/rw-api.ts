import { apiClient } from './client';

export interface RW {
  id: string;
  number: string;
  kelurahanId: string;
}

export const fetchRw = async (): Promise<RW[]> => {
  try {
    const res = await apiClient.get('/rw');
    return res.data;
  } catch (error) {
    console.error('Error fetching rw', error);
    return [];
  }
};

export const createRw = async (data: Partial<RW>): Promise<RW> => {
  const res = await apiClient.post('/rw', data);
  return res.data;
};

export const updateRw = async (id: string, data: Partial<RW>): Promise<RW> => {
  const res = await apiClient.put('/rw/' + id, data);
  return res.data;
};

export const deleteRw = async (id: string): Promise<void> => {
  await apiClient.delete('/rw/' + id);
};
