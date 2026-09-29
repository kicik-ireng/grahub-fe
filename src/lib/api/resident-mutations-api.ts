export interface ResidentMutation {
  id: string;
  residentId: string;
  date: string;
  reason?: string;
  fromRtId?: string;
  toRtId?: string;
  fromRwId?: string;
  toRwId?: string;
  notes?: string;
}

export const fetchResidentMutations = async (): Promise<ResidentMutation[]> => {
  return [];
};
