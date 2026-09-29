export interface Birth {
  id: string;
  reporterId: string;
  bornResidentId?: string;
  date: string;
  place: string;
  notes?: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchBirths = async (): Promise<Birth[]> => {
  return [];
};
