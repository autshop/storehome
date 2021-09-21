import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        },
        initializeAuthFailure: (state, action: PayloadAction<{ error: string | null }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        registerUserRequest: state => {
            state.isLoading = true;
        },
        registerUserSuccess: (state, action: PayloadAction<{ user: { email: string } }>) => {
            state.isLoading = false;
            state.user = action.payload.user;
        },
        registerUserFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const { actions: authActions, reducer: authReducer } = authSlice;
export type { AuthState } from "redux/auth/state";
export { initialState } from "redux/auth/state";
