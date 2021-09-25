import { put, call, delay } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";

function* refreshTokenInBackground() {
    while (true) {
        yield delay(300000);
        yield put(AuthActions.refreshJWT());
    }
}

function* initializeAuthSaga() {
    try {
        const token = LocalStorageService.get(LocalStorageKeys.JWT);

        if (!token) {
            yield put(AuthActions.initializeAuthFailure({ error: null }));
        } else {
            serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            type ResponseType = { user: { email: string } };
            const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/api/auth/me");
            const user = parseStandardResponse<ResponseType>(response);

            yield call(refreshTokenInBackground);

            yield put(AuthActions.initializeAuthSuccess({ user }));
        }
    } catch (e) {
        yield put(AuthActions.initializeAuthFailure({ error: e }));
        yield put(AuthActions.logoutUser());
    }
}

export default initializeAuthSaga;
