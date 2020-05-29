// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(reducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));

import * as Api from "../axios";
import { setConfig } from "redux-alita";

const store = setConfig(Api);

export default store;

