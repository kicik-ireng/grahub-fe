import { apiClient } from './client';

export interface PatrolSchedule {
  id: string;
  date: string;
  shift: string;
  notes?: string;
}

export const fetchPatrol = async (): Promise<PatrolSchedule[]> => {
  try {
    const res = await apiClient.get('/patrol');
    return res.data;
  } catch (error) {
    console.error('Error fetching patrol', error);
    return [];
  }
};

export const createPatrol = async (data: Partial<PatrolSchedule>): Promise<PatrolSchedule> => {
  const res = await apiClient.post('/patrol', data);
  return res.data;
};

export const updatePatrol = async (id: string, data: Partial<PatrolSchedule>): Promise<PatrolSchedule> => {
  const res = await apiClient.put('/patrol/' + id, data);
  return res.data;
};

export const deletePatrol = async (id: string): Promise<void> => {
  await apiClient.delete('/patrol/' + id);
};
