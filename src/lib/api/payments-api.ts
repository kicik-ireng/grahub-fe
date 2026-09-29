export interface Payment {
  id: string;
  dueId: string;
  residentId: string;
  amount: number;
  method: string;
  proofUrl?: string;
  date: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchPayments = async (): Promise<Payment[]> => {
  return [];
};
