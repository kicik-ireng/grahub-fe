import { apiClient } from './client';

export interface Kelurahan {
  id: string;
  code: string;
  name: string;
  postalCode?: string;
  address?: string;
}

export const fetchKelurahan = async (): Promise<Kelurahan[]> => {
  try {
    const res = await apiClient.get('/kelurahan');
    return res.data;
  } catch (error) {
    console.error('Error fetching kelurahan', error);
    return [];
  }
};

export const createKelurahan = async (data: Partial<Kelurahan>): Promise<Kelurahan> => {
  const res = await apiClient.post('/kelurahan', data);
  return res.data;
};

export const updateKelurahan = async (id: string, data: Partial<Kelurahan>): Promise<Kelurahan> => {
  const res = await apiClient.put('/kelurahan/' + id, data);
  return res.data;
};

export const deleteKelurahan = async (id: string): Promise<void> => {
  await apiClient.delete('/kelurahan/' + id);
};
