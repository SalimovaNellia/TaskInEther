export interface Mediafile {
  id: number;
  type: MediafileType;
  title: string;
  duration: number | null;
}

export type MediafileType = 'video' | 'audio';
