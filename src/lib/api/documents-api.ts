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
  return [];
};
