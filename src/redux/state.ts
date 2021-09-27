import { AuthState, initialState as initialAuthState } from "redux/auth/state";
import { ShopState, initialState as initialShopState } from "redux/shop/state";
import { AppState, initialState as initialAppState } from "redux/app/state";

export type StoreState = { auth: AuthState; shop: ShopState; app: AppState };

const initialState: StoreState = { auth: initialAuthState, shop: initialShopState, app: initialAppState };

export default initialState;
