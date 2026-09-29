export interface Due {
  id: string;
  title: string;
  description?: string;
  amount: number;
  dueDate: string;
  residentId?: string;
  familyId?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchDues = async (): Promise<Due[]> => {
  return [];
};
