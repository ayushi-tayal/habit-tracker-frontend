import {createFeatureSelector, createSelector} from '@ngrx/store';
import { HabitsLogModels } from './user_habits_logs.models';
import { USER_HABIT_LOG_FEATURE_KEY } from './user_habits_logs.reducer';

export const selectHabitModels = createFeatureSelector<HabitsLogModels>(USER_HABIT_LOG_FEATURE_KEY);

export const selectUserHabitLog = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.userHabitLogs
);
export const selectUserHabitLogLoading = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.loading
);
export const selectUserHabitLogError = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.error    
);

export const selectHabitLogs = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.habitLogs
);
export const selectHabitLogsLoading = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.loading
);
export const selectHabitLogsError = createSelector(
    selectHabitModels,
    (state: HabitsLogModels) => state.error    
);