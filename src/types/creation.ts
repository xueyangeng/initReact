export type TCreation = {
  id: string;
  title: string;
  description?: string;
  cover?: string;
  status: number;
  progress?: {
    checking: number;
    dubbing: number;
    total: number;
  },
};