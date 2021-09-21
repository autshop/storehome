import { all } from "redux-saga/effects";
//
import authSaga from "redux/auth/saga";

function* rootSaga() {
    yield all([authSaga()]);
}

export default rootSaga;
