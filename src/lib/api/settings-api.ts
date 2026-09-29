import { apiClient } from './client';

export interface SystemSetting {
  id: string;
  key: string;
  value: string;
  description?: string;
  updatedAt: string;
}

export const fetchSettings = async (): Promise<SystemSetting[]> => {
  try {
    const res = await apiClient.get('/settings');
    return res.data;
  } catch (error) {
    console.error('Error fetching settings', error);
    return [];
  }
};

export const createSettings = async (data: Partial<SystemSetting>): Promise<SystemSetting> => {
  const res = await apiClient.post('/settings', data);
  return res.data;
};

export const updateSettings = async (id: string, data: Partial<SystemSetting>): Promise<SystemSetting> => {
  const res = await apiClient.put('/settings/' + id, data);
  return res.data;
};

export const deleteSettings = async (id: string): Promise<void> => {
  await apiClient.delete('/settings/' + id);
};
