import {createFeatureSelector, createSelector} from '@ngrx/store';
import { HabitModels } from './habit.models';
import { HABIT_FEATURE_KEY } from './habit.reducer';

export const selectHabitModels = createFeatureSelector<HabitModels>(HABIT_FEATURE_KEY);

export const selectHabits = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.habits
);
export const selectHabitLoading = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.loading
);
export const selectHabitError = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.error    
);
export const selectHabitsCategories = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.categories
);
export const selectHabitCategoriesLoading = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.loading
);
export const selectHabitCategoriesError = createSelector(
    selectHabitModels,
    (state: HabitModels) => state.error    
);