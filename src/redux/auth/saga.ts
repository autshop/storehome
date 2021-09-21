import { all, takeLeading } from "redux-saga/effects";
//
import { authActions } from "redux/auth/slice";
import initializeAuthSaga from "redux/auth/sagas/initializeAuthSaga";
import registerUserSaga from "redux/auth/sagas/registerUserSaga";

function* authSaga() {
    yield all([
        takeLeading(authActions.initializeAuthRequest.type, initializeAuthSaga),
        takeLeading(authActions.registerUserRequest.type, registerUserSaga)
    ]);
}

export default authSaga;
