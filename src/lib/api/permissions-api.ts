export interface Permission {
  id: string;
  code: string;
  name: string;
  group: string;
}

export const fetchPermissions = async (): Promise<Permission[]> => {
  return [];
};
