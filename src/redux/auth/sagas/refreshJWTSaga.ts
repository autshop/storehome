import { call, delay, put, select } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import { parseStandardResponse } from "lib/api/util";
import authSelectors from "../selectors";

function* refreshJWTSaga() {
    while (true) {
        yield delay(300000);
        const isLoggedIn: boolean = yield select(authSelectors.getIsLoggedIn);

        if (!isLoggedIn) {
            return false;
        }

        try {
            type ResponseType = { token: string };
            const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/api/auth/refresh");
            const token = parseStandardResponse<ResponseType>(response);

            LocalStorageService.set(LocalStorageKeys.JWT, token);
            serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (e) {
            yield put(AuthActions.loginUserFailure(e));
            yield put(AuthActions.logoutUser());
        }
    }
}

export default refreshJWTSaga;
