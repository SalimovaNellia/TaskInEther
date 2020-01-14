export interface TaskForm {
  mediaId: number;
  startTime: Date;
  endTime: Date;
  duration: number;
  mediaOffset: number | null;
  playUntil: number;
}
