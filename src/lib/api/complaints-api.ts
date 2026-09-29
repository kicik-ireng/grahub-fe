import { apiClient } from './client';

export interface Complaint {
  id: string;
  residentId: string;
  category: string;
  title: string;
  description: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchComplaints = async (): Promise<Complaint[]> => {
  try {
    const res = await apiClient.get('/complaints');
    return res.data;
  } catch (error) {
    console.error('Error fetching complaints', error);
    return [];
  }
};

export const createComplaints = async (data: Partial<Complaint>): Promise<Complaint> => {
  const res = await apiClient.post('/complaints', data);
  return res.data;
};

export const updateComplaints = async (id: string, data: Partial<Complaint>): Promise<Complaint> => {
  const res = await apiClient.put('/complaints/' + id, data);
  return res.data;
};

export const deleteComplaints = async (id: string): Promise<void> => {
  await apiClient.delete('/complaints/' + id);
};
