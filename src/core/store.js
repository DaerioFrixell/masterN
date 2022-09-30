import { createStore, combineReducers, compose } from "redux";
import { planetsReducer } from "../models/planets/planet.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const reducers = combineReducers({
  planets: planetsReducer
});

const store = createStore(reducers);

export default store;

