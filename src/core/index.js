import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { oneReducer } from "./oneReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const reducers = combineReducers({
  one: oneReducer
});

export const store = createStore(reducers);

