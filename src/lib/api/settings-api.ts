export interface SystemSetting {
  id: string;
  key: string;
  value: string;
  description?: string;
  updatedAt: string;
}

export const fetchSettings = async (): Promise<SystemSetting[]> => {
  return [];
};
