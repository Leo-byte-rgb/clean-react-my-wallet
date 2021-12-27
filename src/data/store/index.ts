import { createStore, applyMiddleware } from "redux";
import { combinedReducers } from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
