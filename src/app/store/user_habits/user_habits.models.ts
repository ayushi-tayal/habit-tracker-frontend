export interface UserHabitModels {
  userHabits: UserHabit[]| null;
  loading: boolean;
  error: string | null;
}

export interface UserHabit {
  _id: string;
  userId: string;
  habitIds: string[];
  status: string
}