import { apiClient } from './client';

export interface ResidentMutation {
  id: string;
  residentId: string;
  date: string;
  reason?: string;
  fromRtId?: string;
  toRtId?: string;
  fromRwId?: string;
  toRwId?: string;
  notes?: string;
}

export const fetchResidentMutations = async (): Promise<ResidentMutation[]> => {
  try {
    const res = await apiClient.get('/resident-mutations');
    return res.data;
  } catch (error) {
    console.error('Error fetching resident-mutations', error);
    return [];
  }
};

export const createResidentMutations = async (data: Partial<ResidentMutation>): Promise<ResidentMutation> => {
  const res = await apiClient.post('/resident-mutations', data);
  return res.data;
};

export const updateResidentMutations = async (id: string, data: Partial<ResidentMutation>): Promise<ResidentMutation> => {
  const res = await apiClient.put('/resident-mutations/' + id, data);
  return res.data;
};

export const deleteResidentMutations = async (id: string): Promise<void> => {
  await apiClient.delete('/resident-mutations/' + id);
};
