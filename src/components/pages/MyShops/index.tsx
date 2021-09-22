import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import { shopActions } from "redux/shop/slice";
import ShopList from "components/pages/MyShops/components/ShopList";
import CreateShopButton from "components/pages/MyShops/components/CreateShopButton";
//
import css from "./style.module.scss";

const MyShops: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopActions.loadShopsRequest());
    }, [dispatch]);

    return (
        <div className={css["MyShops"]}>
            <div className={css["content"]}>
                <ShopList />
                <CreateShopButton />
            </div>
        </div>
    );
};

export default memo(MyShops);
