import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
import { CircularProgress } from "@material-ui/core";
import shopSelectors from "redux/shop/selectors";
//
import css from "./style.module.scss";

const NewShopStatus: FC = () => {
    const newShopId = useSelector(shopSelectors.getNewShopId);
    const shop = useSelector(shopSelectors.createGetShopById(newShopId || -1));

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
