import { FC, memo, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
//
import { shopActions } from "redux/shop/slice";
//
import css from "./style.module.scss";

const MyStores: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopActions.loadShopsRequest());
    }, [dispatch]);

    const history = useHistory();
    const images = [
        {
            imageUrl:
                "https://previews.123rf.com/images/val1982/val19821905/val1982190500008/125409784-example-of-modern-logo-zebra-head.jpg",
            text: "Zebra Store"
        }
    ];

    const redirectToHomePage = () => history.push("/");
    const redirectToNewStorePage = () => history.push("/new-store");

    return (
        <div className={css["MyStores"]}>
            <Button type="submit" variant="contained" color="primary" onClick={redirectToHomePage}>
                <b>Vissza</b>
            </Button>
            <div className={css["content"]}>
                <div className={css["store-list"]}>
                    {images.map(({ imageUrl, text }) => (
                        <div className={css["store"]}>
                            <img className={css["store-image"]} src={imageUrl} alt="" />
                            <div className={css["store-text"]}>{text}</div>
                        </div>
                    ))}
                    <div className={classNames(css["store"], css["store-clickable"])} onClick={redirectToNewStorePage}>
                        <img
                            className={css["store-image"]}
                            src={"https://gudfinnur.is/wp-content/uploads/2020/09/plus.png"}
                            alt=""
                        />
                        <div className={css["store-text"]}>
                            <b>Add new store</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(MyStores);
