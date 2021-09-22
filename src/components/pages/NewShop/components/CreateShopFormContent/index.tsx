import { FC, memo } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { NewShopFormTypes } from "utils/forms/types";
import { shopActions } from "redux/shop/slice";

type Props = {
    classes: any;
};

const CreateShopFormContent: FC<Props> = ({ classes }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm<NewShopFormTypes>();

    const handleLoginSubmit = (formData: NewShopFormTypes) => dispatch(shopActions.createShopRequest(formData));

    return (
        <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
            <TextField
                className={classes.input}
                id="storeName"
                name="storeName"
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
