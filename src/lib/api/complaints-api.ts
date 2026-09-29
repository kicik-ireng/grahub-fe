export interface Complaint {
  id: string;
  residentId: string;
  category: string;
  title: string;
  description: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchComplaints = async (): Promise<Complaint[]> => {
  return [];
};
