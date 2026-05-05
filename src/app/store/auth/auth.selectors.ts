import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AuthState } from './auth.models';
import { AUTH_FEATURE_KEY } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state: AuthState) => state.isLoggedIn
)

export const selectLoading = createSelector(
    selectAuthState,
    (state: AuthState) =>  state.loading
)

export const selectError = createSelector(
    selectAuthState,
    (state: AuthState) =>  state.error
)

export const selectInitialized = createSelector(
    selectAuthState,
    (state: AuthState) =>  state.initialized
)