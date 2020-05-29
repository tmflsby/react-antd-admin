import React from 'react';
import ReactDOM from 'react-dom';
import 'default-passive-events';
// import { Provider } from 'react-redux';
import { AlitaProvider } from "redux-alita";
import Views from "./views";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import 'animate.css';
import './index.css';
import '../src/style/index.less';
import '../src/style/antd/index.less'

ReactDOM.render(
  <AlitaProvider store={store}>
    <Views store={store}/>
  </AlitaProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
