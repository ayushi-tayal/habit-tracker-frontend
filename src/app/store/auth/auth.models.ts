export interface AuthState {
    user: AppUser | null;
    loading: boolean;
    error: string | null;
    isLoggedIn: boolean;
    token: string | null;
}

export interface AppUser {
        id: string;
        username: string;
        email?: string;
        phone?: string
    }