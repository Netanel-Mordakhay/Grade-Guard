export interface Assignment {
  id: number;
  name: string;
  course: string;
  status: string;
  date?: Date | null;
}
