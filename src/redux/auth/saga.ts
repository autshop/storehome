import { all, takeLeading } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import initializeAuthSaga from "redux/auth/sagas/initializeAuthSaga";
import registerUserSaga from "redux/auth/sagas/registerUserSaga";
import logoutUserSaga from "redux/auth/sagas/logoutUserSaga";
import loginUserSaga from "redux/auth/sagas/loginUserSaga";

function* authSaga() {
    yield all([
        takeLeading(AuthActions.initializeAuthRequest.type, initializeAuthSaga),
        takeLeading(AuthActions.registerUserRequest.type, registerUserSaga),
        takeLeading(AuthActions.logoutUser.type, logoutUserSaga),
        takeLeading(AuthActions.loginUserRequest.type, loginUserSaga)
    ]);
}

export default authSaga;
