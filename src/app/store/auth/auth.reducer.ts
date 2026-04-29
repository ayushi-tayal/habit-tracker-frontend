import { createReducer, on } from "@ngrx/store";
import { AuthState } from './auth.models';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    isLoggedIn: false
}

export const authReducer = createReducer(
    initialState,

    on(AuthActions.register, AuthActions.login,  (state)=>({
        ...state,
        loading: true,
        error: null
    })),
    on(AuthActions.registerSuccess, AuthActions.loginSuccess, (state, { user, token })=>({
        ...state,
        user,
        token,
        loading: false,
        error: null,
        isLoggedIn: true
    })),
    on(AuthActions.registerFailure, AuthActions.loginFailure ,(state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(AuthActions.loadSession, (state)=>({
        ...state,
        loading: true,
        error: null
    })),
    on(AuthActions.loadSessionSuccess, (state, { user, token })=>({
        ...state,
        user,
        token,
        loading: false,
        isLoggedIn: true,
        error: null
    })),
    on(AuthActions.loadSessionFailure, (state, { error })=>({
        ...state,
        error,
        loading: false
    })),
    on(AuthActions.logout, ()=> ({
        ...initialState
    }))
)