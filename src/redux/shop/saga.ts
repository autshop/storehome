import { all, takeLeading } from "redux-saga/effects";
//
import { ShopActions } from "redux/shop/slice";
import loadShopsSaga from "redux/shop/sagas/loadShopsSaga";
import createShopSaga from "redux/shop/sagas/createShopSaga";

function* shopSaga() {
    yield all([
        takeLeading(ShopActions.loadShopsRequest.type, loadShopsSaga),
        takeLeading(ShopActions.createShopRequest.type, createShopSaga)
    ]);
}

export default shopSaga;
