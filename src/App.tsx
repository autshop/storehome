import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import Home from "components/pages/Home";
import NewStore from "components/pages/NewStore";
import MyStores from "components/pages/MyStores";
//
import "./App.css";

function App() {
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
}

export default App;
