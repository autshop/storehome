import { FC, memo } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { NewShopFormTypes } from "utils/forms/types";
import { ShopActions } from "redux/shop/slice";

type Props = {
    classes: any;
};

const CreateShopFormContent: FC<Props> = ({ classes }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm<NewShopFormTypes>();

    const handleLoginSubmit = (formData: NewShopFormTypes) => dispatch(ShopActions.createShopRequest(formData));

    return (
        <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
            <TextField
                className={classes.input}
                id="name"
                name="name"
                inputRef={register({ required: true })}
                required={true}
                {...createFieldErrorFromHookFromError("storeName", errors, "Please fill this field!")}
            />
            <div className={classes["button-container"]}>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    <b>CREATE</b>
                </Button>
            </div>
        </form>
    );
};
export default memo(CreateShopFormContent);
