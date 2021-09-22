import { all, takeLeading } from "redux-saga/effects";
//
import { shopActions } from "redux/shop/slice";
import loadShopsSaga from "redux/shop/sagas/loadShopsSaga";
import createShopSaga from "redux/shop/sagas/createShopSaga";

function* shopSaga() {
    yield all([
        takeLeading(shopActions.loadShopsRequest.type, loadShopsSaga),
        takeLeading(shopActions.createShopRequest.type, createShopSaga)
    ]);
}

export default shopSaga;
