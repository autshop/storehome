import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
import shopSelectors from "redux/shop/selectors";
import ShopListItem from "components/pages/MyShops/components/ShopList/components/ShopListItem";
//
import css from "./style.module.scss";

const ShopList: FC = () => {
    const shops = useSelector(shopSelectors.getShops);

    return (
        <div className={css["ShopList"]}>
            {shops.map(({ id }) => (
                <ShopListItem key={id} id={id} />
            ))}
        </div>
    );
};

export default memo(ShopList);
