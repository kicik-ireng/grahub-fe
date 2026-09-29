export interface LetterType {
  id: string;
  code: string;
  name: string;
  category: string;
  description?: string;
  requiresRtApproval: boolean;
  requiresRwApproval: boolean;
  requiresKelurahanApproval: boolean;
  requiresSignature: boolean;
  requiresAttachment: boolean;
  isActive: boolean;
}

export const fetchLetterTypes = async (): Promise<LetterType[]> => {
  return [];
};
