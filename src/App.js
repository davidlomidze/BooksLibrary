import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import "./App.css";
import "./assets/scss/bootstrap.scss";
import "jquery";
import "bootstrap";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <AppLayout />

            </BrowserRouter>
        </Provider>
    );
}

export default App;
