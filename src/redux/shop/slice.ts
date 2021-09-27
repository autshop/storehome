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
            state.newShop.id = null;
        },
        createShopSuccess: (state, action: PayloadAction<{ id: number }>) => {
            state.newShop.isSaving = false;
            state.newShop.id = action.payload.id;
        },
        createShopFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.newShop.isSaving = false;
            state.newShop.error = action.payload.error;
            state.newShop.id = null;
        },
        setNewShopId: (state, action: PayloadAction<{ id: number }>) => {
            state.newShop.id = action.payload.id;
        }
    }
});

export const { actions: ShopActions, reducer: ShopReducer } = shopSlice;
export type { ShopState } from "redux/shop/state";
export { initialState } from "redux/shop/state";
