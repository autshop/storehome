import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { authReducer } from "redux/auth/slice";

const combinedReducers = combineReducers<StoreState>({
    auth: authReducer
});

export default combinedReducers;
