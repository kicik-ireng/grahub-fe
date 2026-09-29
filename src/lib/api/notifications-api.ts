export interface Notification {
  id: string;
  userId?: string;
  title: string;
  content: string;
  type: string;
  isRead: boolean;
  createdAt: string;
}

export const fetchNotifications = async (): Promise<Notification[]> => {
  return [];
};
