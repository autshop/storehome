import { call, put } from "redux-saga/effects";
import slugify from "slugify";
//
import serverApi from "lib/api";
import { ShopActions } from "redux/shop/slice";
import ApiResponse from "lib/api/type";
import { Shop } from "redux/shop/types";
import { parseStandardResponse } from "lib/api/util";

function* createShopSaga({ payload: { name } }: ReturnType<typeof ShopActions.createShopRequest>) {
    try {
        const slugifiedName = slugify(name, { lower: true });
        type ResponseType = { shop: Shop };
        const response: ApiResponse<ResponseType> = yield call(serverApi.post, "/shop", { name: slugifiedName });
        const { id }: Shop = parseStandardResponse<ResponseType>(response);

        yield put(ShopActions.createShopSuccess({ id }));
        yield put(ShopActions.loadShopsRequest());
        yield put(ShopActions.pollShopCreationStatusRequest({ id }));
    } catch (e) {
        console.log(e);
        yield put(ShopActions.createShopFailure({ error: e }));
    }
}

export default createShopSaga;
