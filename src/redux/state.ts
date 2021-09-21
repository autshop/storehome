import { AuthState, initialState as initialAuthState } from "redux/auth/state";
import { ShopState, initialState as initialShopState } from "redux/shop/state";

export type StoreState = { auth: AuthState; shop: ShopState };

const initialState: StoreState = { auth: initialAuthState, shop: initialShopState };

export default initialState;
