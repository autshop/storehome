export type AuthState = {
    user: { email: string };
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;
    registration: {
        isLoading: boolean;
        error: string;
    };
};

export const initialState: AuthState = {
    user: {
        email: ""
    },
    isLoggedIn: false,
    isLoading: false,
    error: null,
    registration: {
        isLoading: false,
        error: ""
    }
};
