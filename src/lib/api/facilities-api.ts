import { apiClient } from './client';

export interface Facility {
  id: string;
  name: string;
  description?: string;
  location: string;
  condition: string;
  isActive: boolean;
}

export const fetchFacilities = async (): Promise<Facility[]> => {
  try {
    const res = await apiClient.get('/facilities');
    return res.data;
  } catch (error) {
    console.error('Error fetching facilities', error);
    return [];
  }
};

export const createFacilities = async (data: Partial<Facility>): Promise<Facility> => {
  const res = await apiClient.post('/facilities', data);
  return res.data;
};

export const updateFacilities = async (id: string, data: Partial<Facility>): Promise<Facility> => {
  const res = await apiClient.put('/facilities/' + id, data);
  return res.data;
};

export const deleteFacilities = async (id: string): Promise<void> => {
  await apiClient.delete('/facilities/' + id);
};
