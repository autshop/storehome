import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/auth/state";

const authSlice = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        initializeAuthRequest: state => {
            state.isLoading = true;
        },
        initializeAuthSuccess: (state, action: PayloadAction<{ user: { email: string } }>) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },
        initializeAuthFailure: (state, action: PayloadAction<{ error: string | null }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        registerUserRequest: (
            state,
            action: PayloadAction<{ email: string; fullName: string; password: string; passwordAgain: string }>
        ) => {
            state.registration.isLoading = true;
        },
        registerUserSuccess: state => {
            state.registration.isLoading = false;
        },
        registerUserFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.registration.isLoading = false;
            state.registration.error = action.payload.error;
        },
        loginUserRequest: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.login.isLoading = true;
        },
        loginUserSuccess: state => {
            state.login.isLoading = false;
        },
        loginUserFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.login.isLoading = false;
            state.login.error = action.payload.error;
        },
        logoutUser: state => {
            state.isLoggedIn = false;
            state.user = { email: "" };
        },
        refreshJWT: noop as CaseReducer
    }
});

export const { actions: AuthActions, reducer: AuthReducer } = authSlice;
export type { AuthState } from "redux/auth/state";
export { initialState } from "redux/auth/state";
