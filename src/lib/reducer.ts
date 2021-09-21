import { combineReducers } from "redux";
//
import { StoreState } from "lib/state";
import { authReducer } from "lib/auth/slice";

const combinedReducers = combineReducers<StoreState>({
    auth: authReducer
});

export default combinedReducers;
