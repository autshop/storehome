import { all, takeLeading } from "redux-saga/effects";
//
import { shopActions } from "redux/shop/slice";
import loadShopsSaga from "redux/shop/sagas/loadShopsSaga";

function* shopSaga() {
    yield all([takeLeading(shopActions.loadShopsRequest.type, loadShopsSaga)]);
}

export default shopSaga;
