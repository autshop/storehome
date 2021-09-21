import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import Home from "components/pages/Home";
import NewStore from "components/pages/NewStore";
import MyStores from "components/pages/MyStores";
import { authActions } from "./redux/auth/slice";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.initializeAuthRequest());
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/new-store" exact>
                    <NewStore />
                </Route>
                <Route path="/my-stores" exact>
                    <MyStores />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
