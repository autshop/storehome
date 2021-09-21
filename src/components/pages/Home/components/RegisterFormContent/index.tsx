import { FC } from "react";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//
import { RegisterFormTypes } from "utils/forms/types";
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { authActions } from "redux/auth/slice";

type OwnProps = {
    classes: any;
};

const RegisterFormContent: FC<OwnProps> = ({ classes }) => {
    const { register, handleSubmit, errors } = useForm<RegisterFormTypes>();

    const dispatch = useDispatch();

    const handleLoginSubmit = (formData: RegisterFormTypes) => dispatch(authActions.registerUserRequest(formData));

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
                label="Full Name"
                id="fullName"
                name="fullName"
                inputRef={register({ required: true })}
                required={true}
                {...createFieldErrorFromHookFromError("fullName", errors, "Please fill this field!")}
            />
            <TextField
                className={classes.input}
                label="Password"
                id="password"
                name="password"
                inputRef={register({ required: true })}
                required={true}
                type={"password"}
                {...createFieldErrorFromHookFromError("password", errors, "Please fill this field!")}
            />
            <TextField
                className={classes.input}
                label="Password again"
                id="passwordAgain"
                name="passwordAgain"
                inputRef={register({ required: true })}
                required={true}
                type={"password"}
                {...createFieldErrorFromHookFromError("passwordAgain", errors, "Please fill this field!")}
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
export default RegisterFormContent;
