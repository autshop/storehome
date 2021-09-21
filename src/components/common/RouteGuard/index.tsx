import { FC, memo, ReactNode } from "react";
import { useSelector } from "react-redux";
//
import authSelectors from "redux/auth/selectors";
import { Redirect } from "react-router-dom";

type Props = {
    children: ReactNode;
    redirectTo?: string;
    inverse?: boolean;
};

const RouteGuard: FC<Props> = ({ children, inverse = false, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    const condition = inverse ? !isLoggedIn : isLoggedIn;

    if (condition) {
        return <>{children}</>;
    }

    return <Redirect to={redirectTo} />;
};

export default memo(RouteGuard);
