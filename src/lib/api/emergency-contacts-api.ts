import { apiClient } from './client';

export interface EmergencyContact {
  id: string;
  name: string;
  category: string;
  phone: string;
  address?: string;
  isActive: boolean;
}

export const fetchEmergencyContacts = async (): Promise<EmergencyContact[]> => {
  try {
    const res = await apiClient.get('/emergency-contacts');
    return res.data;
  } catch (error) {
    console.error('Error fetching emergency-contacts', error);
    return [];
  }
};

export const createEmergencyContacts = async (data: Partial<EmergencyContact>): Promise<EmergencyContact> => {
  const res = await apiClient.post('/emergency-contacts', data);
  return res.data;
};

export const updateEmergencyContacts = async (id: string, data: Partial<EmergencyContact>): Promise<EmergencyContact> => {
  const res = await apiClient.put('/emergency-contacts/' + id, data);
  return res.data;
};

export const deleteEmergencyContacts = async (id: string): Promise<void> => {
  await apiClient.delete('/emergency-contacts/' + id);
};
