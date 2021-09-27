import { createSlice, CaseReducer } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/app/state";

const AppSlice = createSlice({
    name: "App",
    initialState,
    reducers: {
        initializeAppRequest: noop as CaseReducer,
        initializeAppSuccess: state => {
            state.isInitialized = true;
        }
    }
});

export const { actions: AppActions, reducer: AppReducer } = AppSlice;
export type { AppState } from "redux/app/state";
export { initialState } from "redux/app/state";
