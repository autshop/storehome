import { FC, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
//
import PromoCard from "components/pages/Home/components/PromoCard";
import LoginFormContent from "components/pages/Home/components/LoginFormContent";
import RegisterFormContent from "components/pages/Home/components/RegisterFormContent";
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

const Home: FC = () => {
    const classes = useStyles();

    return (
        <div className={css["Home"]}>
            <div className={css["content"]}>
                <div className={css["form-wrapper"]}>
                    <div className={css["form"]}>
                        <p className={css["title"]}>Register</p>
                        <RegisterFormContent classes={classes} />
                    </div>
                    <div className={css["form"]}>
                        <p className={css["title"]}>Login</p>
                        <LoginFormContent classes={classes} />
                    </div>
                </div>
                <div />
                <div>
                    <PromoCard />
                </div>
            </div>
        </div>
    );
};

export default memo(Home);
