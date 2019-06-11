import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import bookReducer from "./book/reducer";

// Combine reducers into one reducer
const combinedReducer = combineReducers({
    book: bookReducer
});

// Enable Redux Devtools for advance debugging (You also need: "Chrome Redux Devtools Extension")
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store from that combinedReducer
const store = createStore(
    combinedReducer,
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    )
);

export default store;