export interface Death {
  id: string;
  reporterId: string;
  deceasedId: string;
  date: string;
  place: string;
  cause?: string;
  attachmentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchDeaths = async (): Promise<Death[]> => {
  return [];
};
