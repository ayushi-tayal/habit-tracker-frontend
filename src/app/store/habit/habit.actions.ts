import { createAction, props } from '@ngrx/store';
import { Habits, HabitsCategories } from './habit.models';

export const loadHabit = createAction('[Habit] Load');

export const loadHabitSuccess = createAction(
  '[Habit] Load Success',
  props<{ habits: Habits[] }>(),
);

export const loadHabitFailure = createAction(
  '[Habit] Load Failure',
  props<{ error: string }>(),
);
export const loadHabitCategories = createAction('[HabitCategories] Load');

export const loadHabitCategoriesSuccess = createAction(
  '[HabitCategories] Load Success',
  props<{ categories: HabitsCategories[] }>(),
);

export const loadHabitCategoriesFailure = createAction(
  '[HabitCategories] Load Failure',
  props<{ error: string }>(),
);
export const updateHabit = createAction('[Habit] Update',
   props<{habits: Habits[] }>()
);

export const updateHabitSuccess = createAction(
  '[Habit] Update Success',
  props<{ habits: Habits[] }>(),
);

export const updateHabitFailure = createAction(
  '[Habit] Update Failure',
  props<{ error: string }>(),
);
