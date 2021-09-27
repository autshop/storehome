//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.app;

const getIsInitialized = (state: StoreState) => getState(state).isInitialized;

const appSelectors = { getIsInitialized };

export default appSelectors;
