import { put, take } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import { AppActions } from "redux/app/slice";

function* initializeAppSaga() {
    yield put(AuthActions.initializeAuthRequest());

    yield take([AuthActions.initializeAuthSuccess.type, AuthActions.initializeAuthFailure.type]);

    yield put(AppActions.initializeAppSuccess());
}
export default initializeAppSaga;
