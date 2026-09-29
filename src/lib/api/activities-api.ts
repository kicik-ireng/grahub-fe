export interface Activity {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  organizer?: string;
  budget?: number;
  scope: string;
  createdAt: string;
}

export const fetchActivities = async (): Promise<Activity[]> => {
  return [];
};
