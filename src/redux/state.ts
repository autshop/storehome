import { AuthState, initialState as initialAuthState } from "redux/auth/state";

export type StoreState = { auth: AuthState };

const initialState: StoreState = { auth: initialAuthState };

export default initialState;