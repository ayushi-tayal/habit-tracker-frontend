import { createReducer, on } from '@ngrx/store';
import { UserHabitModels, UserHabit } from './user_habits.models';
import * as UserHabitAction from './user_habits.actions';

export const USER_HABIT_FEATURE_KEY = 'userHabits';

export const initialState: UserHabitModels = {
  userHabits: [],
  loading: false,
  error: null,
};

export const UserHabitReducer = createReducer(
  initialState,

  on(UserHabitAction.saveUserHabit, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserHabitAction.saveUserHabitSuccess, (state, { userHabits }) => ({
    ...state,
    loading: false,
    userHabits,
  })),
  on(UserHabitAction.saveUserHabitFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserHabitAction.loadUserHabits, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserHabitAction.loadUserHabitsSuccess, (state, { userHabits }) => ({
    ...state,
    userHabits,
    loading: false,
  })),
  on(UserHabitAction.loadUserHabitsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
