import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import Home from "components/pages/Home";
import NewStore from "components/pages/NewStore";
import MyShops from "components/pages/MyShops";
import { authActions } from "redux/auth/slice";
import RouteGuard from "components/common/RouteGuard";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.initializeAuthRequest());
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <RouteGuard inverse redirectTo={"/my-shops"}>
                        <Home />
                    </RouteGuard>
                </Route>
                <Route path="/new-store" exact>
                    <RouteGuard>
                        <NewStore />
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
