import { createAction, props } from '@ngrx/store';
import { AppUser } from './auth.models';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>(),
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: AppUser; token: string }>(),
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>(),
);
export const register = createAction(
  '[Auth] Register',
  props<{ username: string; email: string; phone: string; password: string }>(),
);
export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: AppUser; token: string }>(),
);
export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>(),
);
export const logout = createAction('[Auth] Logout');

export const loadSession = createAction('[Auth] Load Session');

export const loadSessionSuccess = createAction(
  '[Auth] Load Session Success',
  props<{ user: AppUser; token: string }>(),
);

export const loadSessionFailure = createAction(
  '[Auth] Load Session Failure',
  props<{ error: string }>(),
);

export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ email: string, password: string }>(),
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success',
  props<{ message: string }>(),
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: string }>(),
);
