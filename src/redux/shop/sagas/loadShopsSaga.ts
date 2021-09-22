import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { ShopActions } from "redux/shop/slice";
import { Shop } from "redux/shop/types";

function* loadShopsSaga() {
    try {
        const {
            data: {
                data: { shops }
            }
        }: ApiResponse<{ shops: Shop[] }> = yield call(serverApi.get, "/api/shop");

        yield put(ShopActions.loadShopsSuccess({ shops }));
    } catch (e) {
        yield put(ShopActions.loadShopsFailure({ error: e }));
    }
}

export default loadShopsSaga;
