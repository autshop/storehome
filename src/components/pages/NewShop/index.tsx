import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import CreateShopFormContent from "components/pages/NewShop/components/CreateShopFormContent";
import NewShopStatus from "components/pages/NewShop/components/NewShopStatus";
import { ShopActions } from "redux/shop/slice";
//
import css from "./style.module.scss";

const NewShop: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ShopActions.setNewShopId({ id: null }));
    }, [dispatch]);

    return (
        <div className={css["NewShop"]}>
            <div className={css["content"]}>
                <NewShopStatus />
                <CreateShopFormContent />
            </div>
        </div>
    );
};

export default memo(NewShop);
