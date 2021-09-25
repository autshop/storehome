import { call, put } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";
import { parseStandardResponse } from "lib/api/util";

function* registerUserSaga({
    payload: { email, password, fullName, passwordAgain }
}: ReturnType<typeof AuthActions.registerUserRequest>) {
    try {
        type ResponseType = { token: string };
        const response: ApiResponse<ResponseType> = yield call(serverApi.post, "/auth/register", {
            email,
            password,
            fullName,
            passwordAgain
        });
        const { token } = parseStandardResponse<ResponseType>(response);

        LocalStorageService.set(LocalStorageKeys.JWT, token);
        serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        yield put(AuthActions.registerUserSuccess());
        yield put(AuthActions.initializeAuthRequest());
    } catch (e) {
        yield put(AuthActions.registerUserFailure(e));
        yield put(AuthActions.logoutUser());
    }
}

export default registerUserSaga;
