import { apiClient } from './client';

export interface Document {
  id: string;
  title: string;
  description?: string;
  category: string;
  scope: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export const fetchDocuments = async (): Promise<Document[]> => {
  try {
    const res = await apiClient.get('/documents');
    return res.data;
  } catch (error) {
    console.error('Error fetching documents', error);
    return [];
  }
};

export const createDocuments = async (data: Partial<Document>): Promise<Document> => {
  const res = await apiClient.post('/documents', data);
  return res.data;
};

export const updateDocuments = async (id: string, data: Partial<Document>): Promise<Document> => {
  const res = await apiClient.put('/documents/' + id, data);
  return res.data;
};

export const deleteDocuments = async (id: string): Promise<void> => {
  await apiClient.delete('/documents/' + id);
};
