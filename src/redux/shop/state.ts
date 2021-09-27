import { Shop } from "redux/shop/types";

export type ShopState = {
    shops: Shop[];
    isLoading: boolean;
    error: string;
    newShop: {
        isSaving: boolean;
        error: string;
        id: number | null;
    };
};

export const initialState: ShopState = {
    shops: [],
    isLoading: false,
    error: "",
    newShop: {
        isSaving: false,
        error: "",
        id: null
    }
};
