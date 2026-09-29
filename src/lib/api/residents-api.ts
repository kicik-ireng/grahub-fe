// This represents the integration with grahub-api

export interface Resident {
  id: string;
  nik: string;
  name: string;
  gender: 'MALE' | 'FEMALE';
  status: 'ACTIVE' | 'INACTIVE';
  rt: string;
  rw: string;
  phone?: string;
  familyId?: string;
}

export const fetchResidents = async (): Promise<Resident[]> => {
  // Mocking the API response for now until backend is fully hooked up
  return [
    { id: '1', nik: '3273123456780001', name: 'Wissa Gamma', gender: 'MALE', status: 'ACTIVE', rt: '03', rw: '08', phone: '08123456789' },
    { id: '2', nik: '3273123456780002', name: 'Ahmad Faisal', gender: 'MALE', status: 'ACTIVE', rt: '01', rw: '08' },
    { id: '3', nik: '3273123456780003', name: 'Siti Nurhaliza', gender: 'FEMALE', status: 'INACTIVE', rt: '03', rw: '08', phone: '08987654321' },
  ];
};
