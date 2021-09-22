import { all, takeLeading } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import initializeAuthSaga from "redux/auth/sagas/initializeAuthSaga";
import registerUserSaga from "redux/auth/sagas/registerUserSaga";

function* authSaga() {
    yield all([
        takeLeading(AuthActions.initializeAuthRequest.type, initializeAuthSaga),
        takeLeading(AuthActions.registerUserRequest.type, registerUserSaga)
    ]);
}

export default authSaga;
