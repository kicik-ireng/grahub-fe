export interface Family {
  id: string;
  familyCardNumber: string;
  headResidentId?: string;
  address: string;
  rtId: string;
  rwId: string;
  kelurahanId: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchFamilies = async (): Promise<Family[]> => {
  return [];
};
