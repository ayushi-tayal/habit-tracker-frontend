export interface ProfileState  {
    profile: Profile | null;
    loading: boolean;
    error: string | null;
}

export interface Profile {
        id: string;
        username: string;
        email?: string;
        phone?: string;
        address?: string;
        city?: string;
        state?: string;
        occupation?: string;
    }