import { apiClient } from './client';

export interface Payment {
  id: string;
  dueId: string;
  residentId: string;
  amount: number;
  method: string;
  proofUrl?: string;
  date: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchPayments = async (): Promise<Payment[]> => {
  try {
    const res = await apiClient.get('/payments');
    return res.data;
  } catch (error) {
    console.error('Error fetching payments', error);
    return [];
  }
};

export const createPayments = async (data: Partial<Payment>): Promise<Payment> => {
  const res = await apiClient.post('/payments', data);
  return res.data;
};

export const updatePayments = async (id: string, data: Partial<Payment>): Promise<Payment> => {
  const res = await apiClient.put('/payments/' + id, data);
  return res.data;
};

export const deletePayments = async (id: string): Promise<void> => {
  await apiClient.delete('/payments/' + id);
};
