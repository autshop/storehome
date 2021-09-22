import { put, call } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";

function* initializeAuthSaga() {
    try {
        const token = LocalStorageService.get(LocalStorageKeys.JWT);

        if (!token) {
            yield put(AuthActions.initializeAuthFailure({ error: null }));
        } else {
            serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const {
                data: {
                    data: { user }
                }
            }: ApiResponse<{ user: { email: string } }> = yield call(serverApi.get, "/api/auth/me");

            yield put(AuthActions.initializeAuthSuccess({ user }));
        }
    } catch (e) {
        yield put(AuthActions.initializeAuthFailure({ error: e }));
    }
}

export default initializeAuthSaga;
