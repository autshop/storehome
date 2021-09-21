//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.shop;

const getShops = (state: StoreState) => getState(state).shops;

const shopSelectors = {
    getShops
};

export default shopSelectors;
