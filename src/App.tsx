import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import Home from "components/pages/Home";
import NewShop from "components/pages/NewShop";
import MyShops from "components/pages/MyShops";
import { AuthActions } from "redux/auth/slice";
import RouteGuard from "components/common/RouteGuard";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AuthActions.initializeAuthRequest());
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <RouteGuard inverse redirectTo={"/my-shops"}>
                        <Home />
                    </RouteGuard>
                </Route>
                <Route path="/new-shop" exact>
                    <RouteGuard>
                        <NewShop />
                    </RouteGuard>
                </Route>
                <Route path="/my-shops" exact>
                    <RouteGuard>
                        <MyShops />
                    </RouteGuard>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
