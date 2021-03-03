import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import PromoCard from "./components/pages/Home/components/PromoCard";
import Home from "./components/pages/Home";
//
import "./App.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/card" exact>
                    <PromoCard />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
