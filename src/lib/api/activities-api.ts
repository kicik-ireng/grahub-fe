import { apiClient } from './client';

export interface Activity {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  organizer?: string;
  budget?: number;
  scope: string;
  createdAt: string;
}

export const fetchActivities = async (): Promise<Activity[]> => {
  try {
    const res = await apiClient.get('/activities');
    return res.data;
  } catch (error) {
    console.error('Error fetching activities', error);
    return [];
  }
};

export const createActivities = async (data: Partial<Activity>): Promise<Activity> => {
  const res = await apiClient.post('/activities', data);
  return res.data;
};

export const updateActivities = async (id: string, data: Partial<Activity>): Promise<Activity> => {
  const res = await apiClient.put('/activities/' + id, data);
  return res.data;
};

export const deleteActivities = async (id: string): Promise<void> => {
  await apiClient.delete('/activities/' + id);
};
