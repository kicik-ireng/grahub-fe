export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  return [];
};
