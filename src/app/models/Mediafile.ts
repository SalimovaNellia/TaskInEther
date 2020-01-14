export interface Mediafile {
  id: number;
  type: MediafileType;
  name: string;
  duration: number | null;
}

export type MediafileType = 'video' | 'audio';
