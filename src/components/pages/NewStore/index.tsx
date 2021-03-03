import { FC, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
//
import CreateStoreFormContent from "components/pages/NewStore/components/CreateStoreFormContent";
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

const NewStore: FC = () => {
    const classes = useStyles();

    return (
        <div className={css["NewStore"]}>
            <div className={css["content"]}>
                <div className={css["form"]}>
                    <p className={css["title"]}>Create your store.</p>
                    <CreateStoreFormContent classes={classes} />
                </div>
            </div>
        </div>
    );
};

export default memo(NewStore);
