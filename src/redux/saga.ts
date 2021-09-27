import { all } from "redux-saga/effects";
//
import authSaga from "redux/auth/saga";
import shopSaga from "redux/shop/saga";
import appSaga from "redux/app/saga";

function* rootSaga() {
    yield all([appSaga(), authSaga(), shopSaga()]);
}

export default rootSaga;
