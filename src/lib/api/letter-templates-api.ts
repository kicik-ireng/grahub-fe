export interface LetterTemplate {
  id: string;
  letterTypeId: string;
  name: string;
  contentHtml: string;
  version: number;
  isActive: boolean;
}

export const fetchLetterTemplates = async (): Promise<LetterTemplate[]> => {
  return [];
};
