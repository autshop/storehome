import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "lib/auth/state";

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
        initializeAuthFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const { actions: authActions, reducer: authReducer } = authSlice;
export type { AuthState } from "lib/auth/state";
export { initialState } from "lib/auth/state";
