import { all, takeLeading } from "redux-saga/effects";
//
import { ShopActions } from "redux/shop/slice";
import loadShopsSaga from "redux/shop/sagas/loadShopsSaga";
import createShopSaga from "redux/shop/sagas/createShopSaga";
import pollShopCreationStatus from "redux/shop/sagas/pollShopCreationStatus";

function* shopSaga() {
    yield all([
        takeLeading(ShopActions.loadShopsRequest.type, loadShopsSaga),
        takeLeading(ShopActions.createShopRequest.type, createShopSaga),
        takeLeading(ShopActions.pollShopCreationStatusRequest.type, pollShopCreationStatus)
    ]);
}

export default shopSaga;
