import { createAction, props } from '@ngrx/store';
import { HabitsLog } from './user_habits_logs.models';

export const saveUserHabitLog = createAction(
  '[UserHabitLogsModels] Save',
  props<{ userHabitLogs: HabitsLog }>(),
);

export const saveUserHabitLogSuccess = createAction(
  '[UserHabitLogsModels] Save Success',
  props<{ userHabitLogs: HabitsLog }>(),
);

export const saveUserHabitLogFailure = createAction(
  '[UserHabitLogsModels] Save Failure',
  props<{ error: string }>(),
);

export const updateUserHabitLog = createAction(
  '[UserHabitLogsModels] Update',
  props<{ userId: string, completed_habits: string[]}>(),
);

export const updateUserHabitLogSuccess = createAction(
  '[UserHabitLogsModels] Update Success',
  props<{ userHabitLogs: HabitsLog }>(),
);

export const updateUserHabitLogFailure = createAction(
  '[UserHabitLogsModels] Update Failure',
  props<{ error: string }>(),
);

export const loadUserTodayHabitLog = createAction(
  '[UserTodayHabitLogsModels] Load Today\'s Habit Log',
  props<{ userId: string }>(),
);

export const loadUserTodayHabitLogSuccess = createAction(
  '[UserTodayHabitLogsModels] Load Today Success',
  props<{ userHabitLogs: HabitsLog }>(),
);

export const loadUserTodayHabitLogFailure = createAction(
  '[UserTodayHabitLogsModels] Load Today Failure',
  props<{ error: string }>(),
);

export const loadUserAllHabitLogs = createAction(
  '[UserAllHabitLogsModels] Load All Habit Log',
  props<{ userId: string, start_date: string, end_date: string }>(),
);

export const loadUserAllHabitLogsSuccess = createAction(
  '[UserAllHabitLogsModels] Load All Habit Log Success',
  props<{ habitLogs: HabitsLog[] }>(),
);

export const loadUserAllHabitLogsFailure = createAction(
  '[UserAllHabitLogsModels] Load All Habit Log Failure',
  props<{ error: string }>(),
);
