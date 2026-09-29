import { apiClient } from './client';

export interface Family {
  id: string;
  familyCardNumber: string;
  headResidentId?: string;
  address: string;
  rtId: string;
  rwId: string;
  kelurahanId: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchFamilies = async (): Promise<Family[]> => {
  try {
    const res = await apiClient.get('/families');
    return res.data;
  } catch (error) {
    console.error('Error fetching families', error);
    return [];
  }
};

export const createFamilies = async (data: Partial<Family>): Promise<Family> => {
  const res = await apiClient.post('/families', data);
  return res.data;
};

export const updateFamilies = async (id: string, data: Partial<Family>): Promise<Family> => {
  const res = await apiClient.put('/families/' + id, data);
  return res.data;
};

export const deleteFamilies = async (id: string): Promise<void> => {
  await apiClient.delete('/families/' + id);
};
