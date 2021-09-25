import { call, put } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import { parseStandardResponse } from "lib/api/util";

function* loginUserSaga({ payload: { email, password } }: ReturnType<typeof AuthActions.loginUserRequest>) {
    try {
        type ResponseType = { token: string };
        const response: ApiResponse<ResponseType> = yield call(serverApi.post, "/api/auth/login", { email, password });
        const token = parseStandardResponse<ResponseType>(response);

        LocalStorageService.set(LocalStorageKeys.JWT, token);
        serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        yield put(AuthActions.loginUserSuccess());
        yield put(AuthActions.initializeAuthRequest());
    } catch (e) {
        yield put(AuthActions.loginUserFailure(e));
        yield put(AuthActions.logoutUser());
    }
}

export default loginUserSaga;
