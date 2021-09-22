import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//
import store from "redux/store";
//
import App from "./App";
//
import "./public/styles/style.global.scss";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
