import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/shop/state";

const shopSlice = createSlice({
    name: "SHOP",
    initialState,
    reducers: {
        loadShopsRequest: state => {
            state.isLoading = true;
        },
        loadShopsSuccess: (state, action: PayloadAction<{ shops: any[] }>) => {
            state.shops = action.payload.shops;
            state.isLoading = false;
        },
        loadShopsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const { actions: shopActions, reducer: shopReducer } = shopSlice;
export type { ShopState } from "redux/shop/state";
export { initialState } from "redux/shop/state";
