export interface FinanceTransaction {
  id: string;
  accountId: string;
  categoryId: string;
  amount: number;
  date: string;
  description: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchFinance = async (): Promise<FinanceTransaction[]> => {
  return [];
};
