export interface ProfileState  {
    profile: Profile | null;
    loading: boolean;
    error: string | null;
}

export interface Profile {
        _id: string;
        username: string;
        email?: string;
        phone?: string;
        personal_info?: Object;
    }