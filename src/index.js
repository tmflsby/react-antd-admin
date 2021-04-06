import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider } from "redux-alita";
import Router from "./router";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import 'animate.css';
import './index.css';
import '../src/style/index.less';

ReactDOM.render(
  <AlitaProvider store={store}>
    <Router store={store}/>
  </AlitaProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
