import { apiClient } from './client';

export interface Role {
  id: string;
  code: string;
  name: string;
  description?: string;
}

export const fetchRoles = async (): Promise<Role[]> => {
  try {
    const res = await apiClient.get('/roles');
    return res.data;
  } catch (error) {
    console.error('Error fetching roles', error);
    return [];
  }
};

export const createRoles = async (data: Partial<Role>): Promise<Role> => {
  const res = await apiClient.post('/roles', data);
  return res.data;
};

export const updateRoles = async (id: string, data: Partial<Role>): Promise<Role> => {
  const res = await apiClient.put('/roles/' + id, data);
  return res.data;
};

export const deleteRoles = async (id: string): Promise<void> => {
  await apiClient.delete('/roles/' + id);
};
