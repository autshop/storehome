import { FC, memo, ReactNode } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
//
import shopSelectors from "redux/shop/selectors";
import { ShopStatus } from "redux/shop/types";
//
import css from "./style.module.scss";

type Props = {
    id: number;
};

const ShopListItem: FC<Props> = ({ id }) => {
    const shop = useSelector(shopSelectors.createGetShopById(id));

    if (!shop) {
        return null;
    }

    const isShopRunning = shop?.status === ShopStatus.RUNNING;

    const displayedStatus = (() => {
        switch (shop?.status) {
            case ShopStatus.PENDING:
                return (
                    <>
                        <i>Pending</i>
                    </>
                );
            case ShopStatus.CREATE_IN_PROGRESS:
                return (
                    <>
                        <i>Creating</i>
                        <span>❌</span>
                    </>
                );
            case ShopStatus.RUNNING:
                return (
                    <>
                        <i>Running</i>
                        <span>✓</span>
                    </>
                );
            case ShopStatus.STOPPED:
                return (
                    <>
                        <i>Stopped</i>
                        <span>❌</span>
                    </>
                );
            default:
                return (
                    <>
                        <i>Error</i>
                        <span>❌</span>
                    </>
                );
        }
    })();

    const withLink = (children: ReactNode) =>
        isShopRunning ? (
            <a href={`http://${shop.name}.shop.akosfi.com`} target="_blank" rel="noreferrer">
                {children}
            </a>
        ) : (
            children
        );

    return (
        <div className={classNames(css["ShopListItem"], { [css["ShopListItem-is-clickable"]]: isShopRunning })}>
            {withLink(
                <div className={css["ShopListItem__content"]}>
                    <div className={css["ShopListItem__content__image-wrapper"]}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img
                            className={css["ShopListItem__content__image-wrapper__image"]}
                            src={"https://image.flaticon.com/icons/png/512/1057/1057478.png"}
                            alt={"Shop-image"}
                        />
                    </div>
                    <div className={css["ShopListItem__content__text"]}>{shop?.name || ""}</div>
                    <div className={css["ShopListItem__content__status"]}>
                        <i>{displayedStatus}</i>
                        <span></span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(ShopListItem);
