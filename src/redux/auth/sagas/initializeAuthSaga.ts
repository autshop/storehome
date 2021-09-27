import { put, call } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";

function* initializeAuthSaga() {
    try {
        const token = LocalStorageService.get(LocalStorageKeys.JWT);

        if (!token) {
            yield put(AuthActions.initializeAuthFailure({ error: null }));
        } else {
            serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            type ResponseType = { user: { email: string } };
            const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/auth/me");
            const user = parseStandardResponse<ResponseType>(response);

            yield put(AuthActions.initializeAuthSuccess({ user }));
        }
    } catch (e) {
        yield put(AuthActions.initializeAuthFailure({ error: e }));
        yield put(AuthActions.logoutUser());
    }
}

export default initializeAuthSaga;
