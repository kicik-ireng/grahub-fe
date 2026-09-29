import { apiClient } from './client';

export interface Due {
  id: string;
  title: string;
  description?: string;
  amount: number;
  dueDate: string;
  residentId?: string;
  familyId?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchDues = async (): Promise<Due[]> => {
  try {
    const res = await apiClient.get('/dues');
    return res.data;
  } catch (error) {
    console.error('Error fetching dues', error);
    return [];
  }
};

export const createDues = async (data: Partial<Due>): Promise<Due> => {
  const res = await apiClient.post('/dues', data);
  return res.data;
};

export const updateDues = async (id: string, data: Partial<Due>): Promise<Due> => {
  const res = await apiClient.put('/dues/' + id, data);
  return res.data;
};

export const deleteDues = async (id: string): Promise<void> => {
  await apiClient.delete('/dues/' + id);
};
