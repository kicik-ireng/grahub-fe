export interface Role {
  id: string;
  code: string;
  name: string;
  description?: string;
}

export const fetchRoles = async (): Promise<Role[]> => {
  return [];
};
