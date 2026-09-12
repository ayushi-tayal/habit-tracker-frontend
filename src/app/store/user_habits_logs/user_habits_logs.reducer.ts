import { createReducer, on } from '@ngrx/store';
import { HabitsLogModels } from './user_habits_logs.models';
import * as UserHabitLogAction from './user_habits_logs.actions';

export const USER_HABIT_LOG_FEATURE_KEY = 'userHabitLogs';

export const initialState: HabitsLogModels = {
  userHabitLogs: null,
  habitLogs: [],   
  loading: false,
  error: null,
};

export const UserHabitLogReducer = createReducer(
  initialState,

  on(UserHabitLogAction.saveUserHabitLog, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserHabitLogAction.saveUserHabitLogSuccess, (state, { userHabitLogs }) => ({
    ...state,
    loading: false,
    userHabitLogs,
  })),
  on(UserHabitLogAction.saveUserHabitLogFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserHabitLogAction.loadUserTodayHabitLog, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserHabitLogAction.loadUserTodayHabitLogSuccess, (state, { userHabitLogs }) => ({
    ...state,
    userHabitLogs,
    loading: false,
  })),
  on(UserHabitLogAction.loadUserTodayHabitLogFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserHabitLogAction.loadUserAllHabitLogs, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserHabitLogAction.loadUserAllHabitLogsSuccess, (state, { habitLogs }) => ({
    ...state,
    habitLogs,
    loading: false,
  })),
  on(UserHabitLogAction.loadUserAllHabitLogsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
