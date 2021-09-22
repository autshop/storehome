import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.shop;

const getShops = (state: StoreState) => getState(state).shops;

const createGetShopById = (id: number) => (state: StoreState) => find(getShops(state), ["id", id]);

const getShopsIsLoading = (state: StoreState) => getState(state).isLoading;

const getShopsError = (state: StoreState) => getState(state).error;

const getNewShopIsSaving = (state: StoreState) => getState(state).newShop.isSaving;

const getNewShopError = (state: StoreState) => getState(state).newShop.error;

const getNewShopId = (state: StoreState) => getState(state).newShop.id;

const shopSelectors = {
    getShops,
    getShopsIsLoading,
    getShopsError,
    getNewShopIsSaving,
    getNewShopError,
    createGetShopById,
    getNewShopId
};

export default shopSelectors;
