//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.auth;

const getUser = (state: StoreState) => getState(state).user;

const getIsLoggedIn = (state: StoreState) => getState(state).isLoggedIn;

const authSelectors = {
    getUser,
    getIsLoggedIn
};

export default authSelectors;
