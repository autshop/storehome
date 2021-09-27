import { call, delay, put } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { ShopActions } from "redux/shop/slice";
import ApiResponse from "lib/api/type";
import { Shop, ShopStatus } from "redux/shop/types";
import { parseStandardResponse } from "lib/api/util";

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

function* createShopSaga({ payload: { name } }: ReturnType<typeof ShopActions.createShopRequest>) {
    try {
        type ResponseType = { shop: Shop };
        const response: ApiResponse<ResponseType> = yield call(serverApi.post, "/shop", { name });
        const { id }: Shop = parseStandardResponse<ResponseType>(response);

        //yield call(pollShopCreationStatus, id);

        yield put(ShopActions.createShopSuccess({ id }));
    } catch (e) {
        console.log(e);
        yield put(ShopActions.createShopFailure({ error: e }));
    }
}

export default createShopSaga;
