import { apiClient } from './client';

export interface Permission {
  id: string;
  code: string;
  name: string;
  group: string;
}

export const fetchPermissions = async (): Promise<Permission[]> => {
  try {
    const res = await apiClient.get('/permissions');
    return res.data;
  } catch (error) {
    console.error('Error fetching permissions', error);
    return [];
  }
};

export const createPermissions = async (data: Partial<Permission>): Promise<Permission> => {
  const res = await apiClient.post('/permissions', data);
  return res.data;
};

export const updatePermissions = async (id: string, data: Partial<Permission>): Promise<Permission> => {
  const res = await apiClient.put('/permissions/' + id, data);
  return res.data;
};

export const deletePermissions = async (id: string): Promise<void> => {
  await apiClient.delete('/permissions/' + id);
};
