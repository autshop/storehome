export type ShopState = {
    shops: any[];
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
