import { FC, memo } from "react";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { NewStoreFormTypes } from "utils/forms/types";

type Props = {
    classes: any;
};

const CreateShopFormContent: FC<Props> = ({ classes }) => {
    const { register, handleSubmit, errors } = useForm<NewStoreFormTypes>();

    const handleLoginSubmit = (formData: NewStoreFormTypes) => {};

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
