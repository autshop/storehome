import { FC } from "react";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { LoginFormTypes } from "utils/forms/types";
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";

type OwnProps = {
    classes: any;
};

const LoginFormContent: FC<OwnProps> = ({ classes }) => {
    const { register, handleSubmit, errors } = useForm<LoginFormTypes>();

    const handleLoginSubmit = (formData: LoginFormTypes) => {};

    return (
        <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
            <TextField
                className={classes.input}
                label="Email"
                id="email"
                name="email"
                inputRef={register({ required: true })}
                required={true}
                {...createFieldErrorFromHookFromError("email", errors, "Please fill this field!")}
            />
            <TextField
                className={classes.input}
                label="Password"
                id="password"
                name="password"
                inputRef={register({ required: true })}
                required={true}
                {...createFieldErrorFromHookFromError("password", errors, "Please fill this field!")}
            />
            <div className={classes["button-container"]}>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    <b>Register</b>
                </Button>
                {false && <CircularProgress className={classes.progress} />}
            </div>
        </form>
    );
};
export default LoginFormContent;
