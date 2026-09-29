import { apiClient } from './client';

export interface LetterTemplate {
  id: string;
  letterTypeId: string;
  name: string;
  contentHtml: string;
  version: number;
  isActive: boolean;
}

export const fetchLetterTemplates = async (): Promise<LetterTemplate[]> => {
  try {
    const res = await apiClient.get('/letter-templates');
    return res.data;
  } catch (error) {
    console.error('Error fetching letter-templates', error);
    return [];
  }
};

export const createLetterTemplates = async (data: Partial<LetterTemplate>): Promise<LetterTemplate> => {
  const res = await apiClient.post('/letter-templates', data);
  return res.data;
};

export const updateLetterTemplates = async (id: string, data: Partial<LetterTemplate>): Promise<LetterTemplate> => {
  const res = await apiClient.put('/letter-templates/' + id, data);
  return res.data;
};

export const deleteLetterTemplates = async (id: string): Promise<void> => {
  await apiClient.delete('/letter-templates/' + id);
};
