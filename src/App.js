import React from "react";
import {Provider} from "react-redux";
import AppLayout from "./components/AppLayout/AppLayout";
import "./App.css";
import "./assets/scss/bootstrap.scss";
import "jquery";
import "bootstrap";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

// combine FontAwesome packs
library.add(fas, far, fab);

function App() {
    return (
        <Provider store={store}>

            <AppLayout />

        </Provider>
    );
}

export default App;
