import { FC, memo, ReactNode } from "react";
import { useSelector } from "react-redux";
//
import shopSelectors from "redux/shop/selectors";
import { ShopStatus } from "redux/shop/types";
//
import css from "./style.module.scss";
import classNames from "classnames";

type Props = {
    id: number;
};

const ShopListItem: FC<Props> = ({ id }) => {
    const shop = useSelector(shopSelectors.createGetShopById(id));

    const isShopRunning = shop?.status === ShopStatus.RUNNING;

    const displayedStatus = (() => {
        switch (shop?.status) {
            case ShopStatus.PENDING:
                return "Pending";
            case ShopStatus.STOPPED:
                return "Stopped";
            case ShopStatus.RUNNING:
                return "Running";
            case ShopStatus.TERMINATED:
                return "Terminated";
            default:
                return "Error";
        }
    })();

    const tooltipText = isShopRunning ? `Click to enter your shop! (${shop?.url || ""})` : "";

    console.log(isShopRunning && !!shop?.url);

    const withLink = (children: ReactNode) =>
        isShopRunning && !!shop?.url ? (
            <a href={shop?.url} target="_blank">
                {children}
            </a>
        ) : (
            children
        );

    return (
        <div className={classNames(css["ShopListItem"], { [css["ShopListItem-is-clickable"]]: isShopRunning })}>
            {withLink(
                <div className={css["ShopListItem-content"]}>
                    <div className={css["ShopListItem-content-image-wrapper"]}>
                        <img
                            className={css["ShopListItem-content-image-wrapper-image"]}
                            src={"https://image.flaticon.com/icons/png/512/1057/1057478.png"}
                            alt={"Shop-image"}
                        />
                    </div>
                    <div className={css["ShopListItem-content-text"]}>{shop?.name || ""}</div>
                    <div>
                        <i>{displayedStatus}</i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(ShopListItem);
