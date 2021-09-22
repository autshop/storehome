import { call, put } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";

function* registerUserSaga({
    payload: { email, password, fullName, passwordAgain }
}: ReturnType<typeof AuthActions.registerUserRequest>) {
    try {
        const {
            data: {
                data: { token }
            }
        }: ApiResponse<{ token: string }> = yield call(serverApi.post, "/api/auth/register", {
            email,
            password,
            fullName,
            passwordAgain
        });

        LocalStorageService.set(LocalStorageKeys.JWT, token);

        serverApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        yield put(AuthActions.registerUserSuccess());
        yield put(AuthActions.initializeAuthRequest());
    } catch (e) {
        yield put(AuthActions.registerUserFailure(e));
    }
}

export default registerUserSaga;
