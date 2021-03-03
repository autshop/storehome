import { FC, memo } from "react";

import css from "./style.module.scss";

const PromoCard: FC = () => (
    <div className={css["PromoCard"]}>
        <img className={css["image"]} src="./promo_image.jpg" alt="promo_image" />
        <span className={css["text"]}>Create your own Online Store!</span>
        <div className={css["blur"]} />
    </div>
);

export default memo(PromoCard);
