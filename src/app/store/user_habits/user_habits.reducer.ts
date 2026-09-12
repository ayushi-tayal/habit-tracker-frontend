import { createReducer, on } from '@ngrx/store';
import { UserHabitModels } from './user_habits.models';
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
    error: null,
  })),
  on(UserHabitAction.saveUserHabitSuccess, (state, { userHabits }) => ({
    ...state,
    loading: false,
    userHabits,
    error: null,
  })),
  on(UserHabitAction.saveUserHabitFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserHabitAction.updateUserHabit, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserHabitAction.updateUserHabitSuccess, (state, { userHabits }) => ({
    ...state,
    userHabits,
    loading: false,
    error: null,
  })),
  on(UserHabitAction.updateUserHabitFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserHabitAction.loadUserHabits, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserHabitAction.loadUserHabitsSuccess, (state, { userHabits }) => ({
    ...state,
    userHabits,
    loading: false,
    error: null,
  })),
  on(UserHabitAction.loadUserHabitsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
