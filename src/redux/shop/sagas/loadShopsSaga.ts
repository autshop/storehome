import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { ShopActions } from "redux/shop/slice";
import { Shop } from "redux/shop/types";
import { parseStandardResponse } from "lib/api/util";

function* loadShopsSaga() {
    try {
        type ResponseType = { shop: Shop[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/api/shop");
        const shops = parseStandardResponse<ResponseType>(response);

        yield put(ShopActions.loadShopsSuccess({ shops }));
    } catch (e) {
        yield put(ShopActions.loadShopsFailure({ error: e }));
    }
}

export default loadShopsSaga;
