import { createReducer, on } from "@ngrx/store";
import { ProfileState } from './profile.models';
import * as ProfileActions from './profile.actions';

export const Profile_FEATURE_KEY = 'profile';

export const initialState: ProfileState = {
    profile: null,
    loading: false,
    error: null
}

export const profileReducer = createReducer(
    initialState,

    on(ProfileActions.loadProfile,  (state)=>({
        ...state,
        loading: true
    })),
    on(ProfileActions.loadProfileSuccess, (state, { profile })=>({
        ...state,
        profile,
        loading: false,
    })),
    on(ProfileActions.loadProfileFailure, ProfileActions.updateProfileFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(ProfileActions.updateProfileSuccess, (state, { profile })=>({
        ...state,
        profile,
        loading: false
    })),
    on(ProfileActions.updateProfile, (state, { userid, profile })=>({
        ...state,
        profile,
        userid,
        loading: false
    }))
)