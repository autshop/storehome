import { put, call } from "redux-saga/effects";
//
import { authActions } from "redux/auth/slice";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { shopActions } from "../slice";

function* loadShopsSaga() {
    try {
        const {
            data: {
                data: { shops }
            }
        }: ApiResponse<{ shops: any[] }> = yield call(serverApi.get, "/api/shops");

        yield put(shopActions.loadShopsSuccess({ shops }));
    } catch (e) {
        yield put(shopActions.loadShopsFailure({ error: e }));
    }
}

export default loadShopsSaga;
