import { apiClient } from './client';

export interface LetterRequest {
  id: string;
  number?: string;
  letterTypeId: string;
  templateId?: string;
  requesterId: string;
  dynamicData?: any;
  qrCodeUrl?: string;
  verificationCode?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchLetters = async (): Promise<LetterRequest[]> => {
  try {
    const res = await apiClient.get('/letters');
    return res.data;
  } catch (error) {
    console.error('Error fetching letters', error);
    return [];
  }
};

export const createLetters = async (data: Partial<LetterRequest>): Promise<LetterRequest> => {
  const res = await apiClient.post('/letters', data);
  return res.data;
};

export const updateLetters = async (id: string, data: Partial<LetterRequest>): Promise<LetterRequest> => {
  const res = await apiClient.put('/letters/' + id, data);
  return res.data;
};

export const deleteLetters = async (id: string): Promise<void> => {
  await apiClient.delete('/letters/' + id);
};
