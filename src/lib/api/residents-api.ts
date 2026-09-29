import { apiClient } from './client';

export interface Resident {
  id: string;
  nik: string;
  familyCardNumber: string;
  fullName: string;
  nickname?: string;
  birthPlace: string;
  birthDate: string;
  occupation?: string;
  education?: string;
  nationality: string;
  phone?: string;
  email?: string;
  address: string;
  photo?: string;
  moveInDate?: string;
  moveOutDate?: string;
  moveOutReason?: string;
  notes?: string;
  userId?: string;
  rtId: string;
  rwId: string;
  kelurahanId: string;
  familyId?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchResidents = async (): Promise<Resident[]> => {
  try {
    const res = await apiClient.get('/residents');
    return res.data;
  } catch (error) {
    console.error('Error fetching residents', error);
    return [];
  }
};

export const createResidents = async (data: Partial<Resident>): Promise<Resident> => {
  const res = await apiClient.post('/residents', data);
  return res.data;
};

export const updateResidents = async (id: string, data: Partial<Resident>): Promise<Resident> => {
  const res = await apiClient.put('/residents/' + id, data);
  return res.data;
};

export const deleteResidents = async (id: string): Promise<void> => {
  await apiClient.delete('/residents/' + id);
};
