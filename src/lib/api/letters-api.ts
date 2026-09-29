export interface LetterRequest {
  id: string;
  number?: string;
  letterTypeId: string;
  templateId?: string;
  requesterId: string;
  dynamicData?: any;
  qrCodeUrl?: string;
  verificationCode?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchLetters = async (): Promise<LetterRequest[]> => {
  return [];
};
