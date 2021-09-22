import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/shop/state";
import { Shop } from "redux/shop/types";

const shopSlice = createSlice({
    name: "SHOP",
    initialState,
    reducers: {
        loadShopsRequest: state => {
            state.isLoading = true;
        },
        loadShopsSuccess: (state, action: PayloadAction<{ shops: Shop[] }>) => {
            state.shops = action.payload.shops;
            state.isLoading = false;
        },
        loadShopsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        createShopRequest: (state, action: PayloadAction<{ name: string }>) => {
            state.newShop.isSaving = true;
        },
        createShopSuccess: state => {
            state.newShop.isSaving = false;
        },
        createShopFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.newShop.isSaving = false;
            state.newShop.error = action.payload.error;
        }
    }
});

export const { actions: shopActions, reducer: shopReducer } = shopSlice;
export type { ShopState } from "redux/shop/state";
export { initialState } from "redux/shop/state";
