import { call, delay, put } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { shopActions } from "redux/shop/slice";
import ApiResponse from "lib/api/type";
import { Shop, ShopStatus } from "redux/shop/types";

function* pollShopCreationStatus(id: number) {
    while (true) {
        const {
            data: {
                data: {
                    shop: { status }
                }
            }
        }: ApiResponse<{ shop: Shop }> = yield call(serverApi.get, `/api/shop/${id}`);

        if (status === ShopStatus.RUNNING) {
            return;
        } else if (status === ShopStatus.PENDING) {
            yield delay(3000);
        } else {
            throw new Error(`Failed to create shop with ID: ${id}`);
        }
    }
}

function* createShopSaga({ payload: { name } }: ReturnType<typeof shopActions.createShopRequest>) {
    try {
        const {
            data: {
                data: {
                    shop: { id }
                }
            }
        }: ApiResponse<{ shop: Shop }> = yield call(serverApi.post, "/api/shop", { name });

        yield call(pollShopCreationStatus, id);

        yield put(shopActions.createShopSuccess());
        yield put(shopActions.loadShopsRequest());
    } catch (e) {
        yield put(shopActions.loadShopsFailure({ error: e }));
    }
}

export default createShopSaga;
