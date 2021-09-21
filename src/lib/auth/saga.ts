import { all, takeLeading } from "redux-saga/effects";
//
import initializeAuthSagaRequest from "lib/auth/sagas/initializeAuthSagaRequest";
import { authActions } from "lib/auth/slice";

function* authSaga() {
    yield all([takeLeading(authActions.initializeAuthRequest.type, initializeAuthSagaRequest)]);
}

export default authSaga;
