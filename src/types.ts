export interface Course {
  id: number;
  name: string;
  semester: number;
  credits: number;
  grade: number | null;
}

export interface Assignment {
  id: number;
  name: string;
  course: string;
  status: string;
  date?: Date | null;
}
