export interface AuthState {
    user: AppUser | null;
    loading: boolean;
    error: string | null;
    isLoggedIn: boolean;
    token: string | null;
    initialized: boolean;
}

export interface AppUser {
        _id: string;
        username: string;
        email?: string;
        phone?: string
    }