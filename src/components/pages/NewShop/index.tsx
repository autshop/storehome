import { FC, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import CreateShopFormContent from "components/pages/NewShop/components/CreateShopFormContent";
import { useSelector } from "react-redux";
//
import shopSelectors from "redux/shop/selectors";
//
import css from "./style.module.scss";

const useStyles = makeStyles({
    input: {
        width: "100%",
        "padding-bottom": "14px"
    },
    "button-container": {
        display: "flex",
        "justify-content": "flex-end"
    },
    button: {
        background: "#FFB775"
    },
    progress: {
        color: "#FFB775"
    }
});

const NewShop: FC = () => {
    const isNewShopSaving = useSelector(shopSelectors.getNewShopIsSaving);
    const newShopId = useSelector(shopSelectors.getNewShopId) || -1;

    const shop = useSelector(shopSelectors.createGetShopById(newShopId));

    const classes = useStyles();

    return (
        <div className={css["NewShop"]}>
            <div className={css["content"]}>
                {isNewShopSaving ? (
                    <>
                        <p className={css["title"]}>
                            Please wait! Your shop is being created, you will be redirected automatically.
                        </p>
                        <p className={css["status"]}>The status of your shop: {shop?.status || "N/A"}</p>
                        <CircularProgress />
                    </>
                ) : (
                    <div className={css["form"]}>
                        <p className={css["title"]}>Create your shop.</p>
                        <CreateShopFormContent classes={classes} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(NewShop);
