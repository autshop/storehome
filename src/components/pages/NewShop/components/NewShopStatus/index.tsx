import { FC, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
//
import { CircularProgress } from "@material-ui/core";
import shopSelectors from "redux/shop/selectors";
//
import css from "./style.module.scss";
import { ShopStatus } from "../../../../../redux/shop/types";

const NewShopStatus: FC = () => {
    const newShopId = useSelector(shopSelectors.getNewShopId);
    const shop = useSelector(shopSelectors.createGetShopById(newShopId || -1));
    const shopName = shop?.name;
    const shopStatus = shop?.status;

    const handleRedirectToNewShop = useCallback(() => {
        const a = document.createElement("a");
        a.target = "_blank";
        a.href = `http://admin.${shopName}.shop.akosfi.com`;
        a.click();
    }, [shopName]);

    useEffect(() => {
        if (shopStatus !== ShopStatus.RUNNING || !shopName) {
            return;
        }

        handleRedirectToNewShop();
    }, [shopStatus, handleRedirectToNewShop, shopName]);

    if (newShopId === null) {
        return null;
    }

    return (
        <div className={css["NewShopStatus"]}>
            <p className={css["NewShopStatus__title"]}>
                Please wait! Your shop is being created, you will be redirected automatically.
            </p>
            <p className={css["NewShopStatus__status"]}>The status of your shop: {shop?.status || "N/A"}</p>
            <CircularProgress />
        </div>
    );
};

export default memo(NewShopStatus);
