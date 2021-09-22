import { FC, memo } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import shopSelectors from "redux/shop/selectors";
//
import css from "./style.module.scss";

const CreateShopButton: FC = () => {
    const newShopIsSaving = useSelector(shopSelectors.getNewShopIsSaving);

    const history = useHistory();

    const handleCreateNewShop = () => history.push("/new-store");

    return (
        <div className={css["CreateShopButton"]}>
            {newShopIsSaving ? (
                <CircularProgress className={css["CreateShopButton-spinner"]} />
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    className={css["CreateShopButton-button"]}
                    onClick={handleCreateNewShop}
                >
                    <b>Create your shop</b>
                </Button>
            )}
        </div>
    );
};

export default memo(CreateShopButton);
