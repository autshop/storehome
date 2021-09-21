import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { authReducer } from "redux/auth/slice";
import { shopReducer } from "redux/shop/slice";

const combinedReducers = combineReducers<StoreState>({
    auth: authReducer,
    shop: shopReducer
});

export default combinedReducers;
