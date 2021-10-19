import { call, delay, put } from "redux-saga/effects";
//
import { Shop, ShopStatus } from "redux/shop/types";
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import { ShopActions } from "redux/shop/slice";

function* pollShopCreationStatus({ payload: { id } }: ReturnType<typeof ShopActions.pollShopCreationStatusRequest>) {
    while (true) {
        const {
            data: {
                data: { status }
            }
        }: ApiResponse<Shop> = yield call(serverApi.get, `/shop/${id}`);

        if (status === ShopStatus.RUNNING) {
            return;
        } else if ([ShopStatus.CREATE_IN_PROGRESS, ShopStatus.PENDING].includes(status)) {
            yield delay(3000);
        } else {
            throw new Error(`Failed to create shop with ID: ${id}`);
        }

        yield put(ShopActions.loadShopsRequest());
    }
}

export default pollShopCreationStatus;
