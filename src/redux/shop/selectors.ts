//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.shop;

const getShops = (state: StoreState) => getState(state).shops;

const getShopsIsLoading = (state: StoreState) => getState(state).isLoading;

const getShopsError = (state: StoreState) => getState(state).error;

const getNewShopIsSaving = (state: StoreState) => getState(state).newShop.isSaving;

const getNewShopError = (state: StoreState) => getState(state).newShop.error;

const shopSelectors = {
    getShops,
    getShopsIsLoading,
    getShopsError,
    getNewShopIsSaving,
    getNewShopError
};

export default shopSelectors;
