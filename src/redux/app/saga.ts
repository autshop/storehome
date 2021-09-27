import { all, takeLeading } from "redux-saga/effects";
import initializeAppSaga from "redux/app/sagas/initializeAppSaga";
import { AppActions } from "redux/app/slice";
//

function* appSaga() {
    yield all([takeLeading(AppActions.initializeAppRequest.type, initializeAppSaga)]);
}

export default appSaga;
