import { FC, memo } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
//
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { NewShopFormTypes } from "utils/forms/types";
import { ShopActions } from "redux/shop/slice";
import shopSelectors from "redux/shop/selectors";
//
import css from "./style.module.scss";

const CreateShopFormContent: FC = () => {
    const newShopId = useSelector(shopSelectors.getNewShopId);

    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm<NewShopFormTypes>();

    const handleLoginSubmit = (formData: NewShopFormTypes) => dispatch(ShopActions.createShopRequest(formData));

    if (newShopId !== null) {
        return null;
    }

    return (
        <div className={css["CreateShopFormContent"]}>
            <p className={css["CreateShopFormContent__title"]}>Create your shop!</p>
            <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
                <TextField
                    className={css["CreateShopFormContent__input"]}
                    id="name"
                    name="name"
                    label="Name of your shop"
                    inputRef={register({ required: true })}
                    required={true}
                    {...createFieldErrorFromHookFromError("storeName", errors, "Please fill this field!")}
                />
                <div className={css["CreateShopFormContent__button-container"]}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={css["CreateShopFormContent__button_container__button"]}
                    >
                        <b>CREATE</b>
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default memo(CreateShopFormContent);
