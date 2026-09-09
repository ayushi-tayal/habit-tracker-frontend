export interface HabitModels {
  habits: Habits[] | null;
  categories: HabitsCategories[] | null;
  loading: boolean;
  error: string | null;
}

export interface Habits {
  _id: string;
  name: string;
  description?: string;
  category?: string;
  category_id?: string;
  display_order?: number;
}

export interface HabitsCategories {
  _id: string;
  categoryName: string;
  name?: string;
  description?: string;
  slug?: string;
  displayOrder?: number;
}
