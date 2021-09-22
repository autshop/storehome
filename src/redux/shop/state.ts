import { Shop } from "redux/shop/types";

export type ShopState = {
    shops: Shop[];
    isLoading: boolean;
    error: string;
    newShop: {
        isSaving: boolean;
        error: string;
    };
};

export const initialState: ShopState = {
    shops: [],
    isLoading: false,
    error: "",
    newShop: {
        isSaving: false,
        error: ""
    }
};
