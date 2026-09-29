import { apiClient } from './client';

export interface FinanceTransaction {
  id: string;
  accountId: string;
  categoryId: string;
  amount: number;
  date: string;
  description: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchFinance = async (): Promise<FinanceTransaction[]> => {
  try {
    const res = await apiClient.get('/finance');
    return res.data;
  } catch (error) {
    console.error('Error fetching finance', error);
    return [];
  }
};

export const createFinance = async (data: Partial<FinanceTransaction>): Promise<FinanceTransaction> => {
  const res = await apiClient.post('/finance', data);
  return res.data;
};

export const updateFinance = async (id: string, data: Partial<FinanceTransaction>): Promise<FinanceTransaction> => {
  const res = await apiClient.put('/finance/' + id, data);
  return res.data;
};

export const deleteFinance = async (id: string): Promise<void> => {
  await apiClient.delete('/finance/' + id);
};
