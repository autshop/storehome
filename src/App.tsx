import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import Home from "components/pages/Home";
import NewStore from "components/pages/NewStore";
import MyStores from "components/pages/MyStores";
import { authActions } from "./redux/auth/slice";
import RouteGuard from "./components/common/RouteGuard";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.initializeAuthRequest());
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <RouteGuard inverse redirectTo={"/my-stores"}>
                        <Home />
                    </RouteGuard>
                </Route>
                <Route path="/new-store" exact>
                    <RouteGuard>
                        <NewStore />
                    </RouteGuard>
                </Route>
                <Route path="/my-stores" exact>
                    <RouteGuard>
                        <MyStores />
                    </RouteGuard>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
