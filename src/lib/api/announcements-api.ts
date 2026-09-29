export interface Announcement {
  id: string;
  title: string;
  content: string;
  targetScope: string;
  priority: string;
  publishDate: string;
  expiryDate?: string;
  imageUrl?: string;
  attachmentUrl?: string;
  createdAt: string;
}

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  return [];
};
