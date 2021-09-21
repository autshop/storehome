import { put, call } from "redux-saga/effects";
//
import { authActions } from "redux/auth/slice";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";

function* initializeAuthSaga() {
    try {
        const token = LocalStorageService.get(LocalStorageKeys.JWT);

        if (!token) {
            yield put(authActions.initializeAuthFailure({ error: null }));
        } else {
            serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const {
                data: {
                    data: { user }
                }
            }: ApiResponse<{ user: { email: string } }> = yield call(serverApi.get, "/api/auth/me");

            yield put(authActions.initializeAuthSuccess({ user }));
        }
    } catch (e) {
        yield put(authActions.initializeAuthFailure({ error: e }));
    }
}

export default initializeAuthSaga;
