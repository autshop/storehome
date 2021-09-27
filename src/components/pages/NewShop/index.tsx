import { FC, memo } from "react";
//
import CreateShopFormContent from "components/pages/NewShop/components/CreateShopFormContent";
import NewShopStatus from "components/pages/NewShop/components/NewShopStatus";
//
import css from "./style.module.scss";

const NewShop: FC = () => (
    <div className={css["NewShop"]}>
        <div className={css["content"]}>
            <NewShopStatus />
            <CreateShopFormContent />
        </div>
    </div>
);

export default memo(NewShop);
