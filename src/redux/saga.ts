import { all } from "redux-saga/effects";
//
import authSaga from "redux/auth/saga";
import shopSaga from "redux/shop/saga";

function* rootSaga() {
    yield all([authSaga(), shopSaga()]);
}

export default rootSaga;
