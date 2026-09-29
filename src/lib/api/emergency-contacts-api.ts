export interface EmergencyContact {
  id: string;
  name: string;
  category: string;
  phone: string;
  address?: string;
  isActive: boolean;
}

export const fetchEmergencyContacts = async (): Promise<EmergencyContact[]> => {
  return [];
};
