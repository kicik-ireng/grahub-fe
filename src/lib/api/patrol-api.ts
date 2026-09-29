export interface PatrolSchedule {
  id: string;
  date: string;
  shift: string;
  notes?: string;
}

export const fetchPatrol = async (): Promise<PatrolSchedule[]> => {
  return [];
};
