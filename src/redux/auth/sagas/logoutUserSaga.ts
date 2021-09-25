import serverApi from "lib/api";
import LocalStorageService, { LocalStorageKeys } from "utils/LocalStorageService";

// eslint-disable-next-line require-yield
function* logoutUserSaga() {
    LocalStorageService.set(LocalStorageKeys.JWT, "");
    delete serverApi.defaults.headers.common["Authorization"];
}

export default logoutUserSaga;
