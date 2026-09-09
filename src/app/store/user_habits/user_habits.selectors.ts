import {createFeatureSelector, createSelector} from '@ngrx/store';
import { UserHabitModels } from './user_habits.models';
import { USER_HABIT_FEATURE_KEY } from './user_habits.reducer';

export const selectHabitModels = createFeatureSelector<UserHabitModels>(USER_HABIT_FEATURE_KEY);

export const selectUserHabit = createSelector(
    selectHabitModels,
    (state: UserHabitModels) => state.userHabits
);
export const selectUserHabitLoading = createSelector(
    selectHabitModels,
    (state: UserHabitModels) => state.loading
);
export const selectUserHabitError = createSelector(
    selectHabitModels,
    (state: UserHabitModels) => state.error    
);