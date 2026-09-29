import { apiClient } from './client';

export interface Volunteer {
  id: string;
  residentId: string;
  skills: string;
  availability: string;
}

export const fetchVolunteers = async (): Promise<Volunteer[]> => {
  try {
    const res = await apiClient.get('/volunteers');
    return res.data;
  } catch (error) {
    console.error('Error fetching volunteers', error);
    return [];
  }
};

export const createVolunteers = async (data: Partial<Volunteer>): Promise<Volunteer> => {
  const res = await apiClient.post('/volunteers', data);
  return res.data;
};

export const updateVolunteers = async (id: string, data: Partial<Volunteer>): Promise<Volunteer> => {
  const res = await apiClient.put('/volunteers/' + id, data);
  return res.data;
};

export const deleteVolunteers = async (id: string): Promise<void> => {
  await apiClient.delete('/volunteers/' + id);
};
