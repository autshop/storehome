import { FC, memo } from "react";
import { CircularProgress } from "@material-ui/core";
//
import css from "./style.module.scss";

const LoadingScreen: FC = () => (
    <div className={css["LoadingScreen"]}>
        <CircularProgress />
    </div>
);

export default memo(LoadingScreen);
