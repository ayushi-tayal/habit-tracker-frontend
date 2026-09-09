import { createReducer, on } from "@ngrx/store";
import { HabitModels } from './habit.models';
import * as HabitActions from './habit.actions';

export const HABIT_FEATURE_KEY = 'habit';

export const initialState: HabitModels = {
    habits: [],
    categories: [],
    loading: false,
    error: null
}

export const HabitReducer = createReducer(
    initialState,

    on(HabitActions.loadHabit,  (state)=>({
        ...state,
        loading: true
    })),
    on(HabitActions.loadHabitSuccess, (state, { habits })=>({
        ...state,
        habits,
        loading: false,
    })),
    on(HabitActions.loadHabitFailure, HabitActions.updateHabitFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(HabitActions.loadHabitCategories, (state)=>({
        ...state,
        loading: true
    })),
    on(HabitActions.loadHabitCategoriesSuccess, (state, { categories })=>({
        ...state,
        categories,
        loading: false,
    })),
    on(HabitActions.loadHabitCategoriesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(HabitActions.updateHabitSuccess, (state, { habits })=>({
        ...state,
        habits,
        loading: false
    })),
    on(HabitActions.updateHabit, (state, { habits })=>({
        ...state,
        habits,
        loading: true
    }))
)