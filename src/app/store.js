import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index" 
import createSagaMiddleware from "@redux-saga/core";
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers= rootReducer




const store = createStore(reducers, composeEnhancers(enhancer));

sagaMiddleware.run(sagas);
export default store;

