import { apiClient } from './client';

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await apiClient.get('/users');
    return res.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};

export const createUsers = async (data: Partial<User>): Promise<User> => {
  const res = await apiClient.post('/users', data);
  return res.data;
};

export const updateUsers = async (id: string, data: Partial<User>): Promise<User> => {
  const res = await apiClient.put('/users/' + id, data);
  return res.data;
};

export const deleteUsers = async (id: string): Promise<void> => {
  await apiClient.delete('/users/' + id);
};
