import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//
import Home from "components/pages/Home";
import NewShop from "components/pages/NewShop";
import MyShops from "components/pages/MyShops";
import RouteGuard from "components/common/RouteGuard";
import { AppActions } from "redux/app/slice";
import appSelectors from "redux/app/selectors";
import LoadingScreen from "components/common/LoadingScreen";

const App: FC = () => {
    const isAppInitialized = useSelector(appSelectors.getIsInitialized);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AppActions.initializeAppRequest());
    }, [dispatch]);

    if (!isAppInitialized) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <RouteGuard inverse redirectTo={"/"}>
                        <Home />
                    </RouteGuard>
                </Route>
                <Route path="/new-shop" exact>
                    <RouteGuard>
                        <NewShop />
                    </RouteGuard>
                </Route>
                <Route path="/" exact>
                    <RouteGuard>
                        <MyShops />
                    </RouteGuard>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
