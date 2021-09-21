import { call, put } from "redux-saga/effects";
//
import { authActions } from "redux/auth/slice";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";

function* loginUserSaga({ payload: { email, password } }: ReturnType<typeof authActions.loginUserRequest>) {
    try {
        const {
            data: {
                data: { token }
            }
        }: ApiResponse<{ token: string }> = yield call(serverApi.post, "/api/auth/login", { email, password });

        LocalStorageService.set(LocalStorageKeys.JWT, token);

        serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        yield put(authActions.loginUserSuccess());
        yield put(authActions.initializeAuthRequest());
    } catch (e) {
        yield put(authActions.loginUserFailure(e));
    }
}

export default loginUserSaga;
