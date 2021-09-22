import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { AuthReducer } from "redux/auth/slice";
import { ShopReducer } from "redux/shop/slice";

const combinedReducers = combineReducers<StoreState>({
    auth: AuthReducer,
    shop: ShopReducer
});

export default combinedReducers;
