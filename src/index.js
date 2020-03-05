import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import 'default-passive-events';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from "./store";
import { AppContainer } from "react-hot-loader";

const render = (Component) => {  // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router store={store}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(Router);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./Router', () => {
    // if you are using harmony modules ({modules:false})
    render(Router);
    // in all other cases - re-require App manually
    render(require('./Router'));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
