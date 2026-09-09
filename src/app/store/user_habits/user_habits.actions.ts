import { createAction, props } from '@ngrx/store';
import { UserHabitModels, UserHabit} from './user_habits.models';

export const saveUserHabit = createAction('[UserHabitModels] Save',
    props<{ userId: string, habitIds:string[], status: string }>()
);

export const saveUserHabitSuccess = createAction(
  '[UserHabitModels] Save Success',
  props<{ userHabits: UserHabit[] }>(),
);

export const saveUserHabitFailure = createAction(
  '[UserHabitModels] Save Failure',
  props<{ error: string }>(),
);

export const updateUserHabit = createAction('[UserHabitModels] Update',
    props<{ userId: string, habitIds:string[], status: string }>()
);

export const updateUserHabitSuccess = createAction(
  '[UserHabitModels] Update Success',
  props<{ userHabits: UserHabit[] }>(),
);

export const updateUserHabitFailure = createAction(
  '[UserHabitModels] Update Failure',
  props<{ error: string }>(),
);

export const loadUserHabits = createAction('[UserHabitModels] Load',
    props<{ userId: string }>()
);

export const loadUserHabitsSuccess = createAction(
  '[UserHabitModels] Load Success',
  props<{ userHabits: UserHabit[] }>(),
);

export const loadUserHabitsFailure = createAction(
  '[UserHabitModels] Load Failure',
  props<{ error: string }>(),
);
