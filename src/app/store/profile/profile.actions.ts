import { createAction, props } from '@ngrx/store';
import { Profile } from './profile.models';

export const loadProfile = createAction('[Profile] Load');

export const loadProfileSuccess = createAction(
  '[Profile] Load Success',
  props<{ profile: Profile }>(),
);

export const loadProfileFailure = createAction(
  '[Profile] Load Failure',
  props<{ error: string }>(),
);
export const updateProfile = createAction('[Profile] Update');

export const updateProfileSuccess = createAction(
  '[Profile] Update Success',
  props<{ profile: Profile }>(),
);

export const updateProfileFailure = createAction(
  '[Profile] Update Failure',
  props<{ error: string }>(),
);
