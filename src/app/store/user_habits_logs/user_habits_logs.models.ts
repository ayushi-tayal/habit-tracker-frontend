export interface HabitsLogModels {
  userHabitLogs: HabitsLog| null;
  loading: boolean;
  habitLogs: HabitsLog[];   
  error: string | null;
}

export interface HabitsLog {
  userId: string;
  completed_habits: string[];
  date: number;
  month: number;
  year: number;
  complete_date: string;
  day_of_week: number;
} 