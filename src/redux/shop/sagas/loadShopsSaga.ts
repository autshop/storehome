import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { shopActions } from "redux/shop/slice";
import { Shop } from "redux/shop/types";

function* loadShopsSaga() {
    try {
        const {
            data: {
                data: { shops }
            }
        }: ApiResponse<{ shops: Shop[] }> = yield call(serverApi.get, "/api/shop");

        yield put(shopActions.loadShopsSuccess({ shops }));
    } catch (e) {
        yield put(shopActions.loadShopsFailure({ error: e }));
    }
}

export default loadShopsSaga;
