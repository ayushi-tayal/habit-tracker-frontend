import {createFeatureSelector, createSelector} from '@ngrx/store';
import { ProfileState } from './profile.models';
import { Profile_FEATURE_KEY } from './profile.reducer';

export const selectProfileState = createFeatureSelector<ProfileState>(Profile_FEATURE_KEY);

export const selectProfile = createSelector(
    selectProfileState,
    (state: ProfileState) => state.profile
);
export const selectProfileLoading = createSelector(
    selectProfileState,
    (state: ProfileState) => state.loading
);
export const selectProfileError = createSelector(
    selectProfileState,
    (state: ProfileState) => state.error    
);