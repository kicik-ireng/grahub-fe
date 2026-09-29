import { apiClient } from './client';

export interface LetterType {
  id: string;
  code: string;
  name: string;
  category: string;
  description?: string;
  requiresRtApproval: boolean;
  requiresRwApproval: boolean;
  requiresKelurahanApproval: boolean;
  requiresSignature: boolean;
  requiresAttachment: boolean;
  isActive: boolean;
}

export const fetchLetterTypes = async (): Promise<LetterType[]> => {
  try {
    const res = await apiClient.get('/letter-types');
    return res.data;
  } catch (error) {
    console.error('Error fetching letter-types', error);
    return [];
  }
};

export const createLetterTypes = async (data: Partial<LetterType>): Promise<LetterType> => {
  const res = await apiClient.post('/letter-types', data);
  return res.data;
};

export const updateLetterTypes = async (id: string, data: Partial<LetterType>): Promise<LetterType> => {
  const res = await apiClient.put('/letter-types/' + id, data);
  return res.data;
};

export const deleteLetterTypes = async (id: string): Promise<void> => {
  await apiClient.delete('/letter-types/' + id);
};
