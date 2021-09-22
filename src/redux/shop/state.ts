import { Shop, ShopStatus } from "redux/shop/types";

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
    shops: [
        { id: 1, status: ShopStatus.RUNNING, name: "Nice shop 1.", url: "https://mui.com/components/material-icons/" },
        { id: 2, status: ShopStatus.RUNNING, name: "Nice shop 2.", url: "https://mui.com/components/material-icons/" },
        { id: 3, status: ShopStatus.PENDING, name: "Nice shop 3.", url: "" }
    ],
    isLoading: false,
    error: "",
    newShop: {
        isSaving: false,
        error: "",
        id: null
    }
};
