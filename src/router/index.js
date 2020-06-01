import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import queryString from "query-string";
import DocumentTitle from "react-document-title";
import AllComponents from "../components";
import routerConfig from "./config";
import { checkLogin } from "../utils";

class Routers extends Component {
  getPermissions = () => {
    const { auth } = this.props;
    if (auth.data === null) {
      return <Redirect to={'/'} />;
    }
    return auth ? auth.data.permission : null
  };

  requireAuth = (permission, component) => {
    const permissions = this.getPermissions();
    if (!permissions || !permissions.includes(permission)) {
      return <Redirect to={'/404'} />;
    }
    return component;
  };

  requireLogin = (component, permission) => {
    const permissions = this.getPermissions();
    if (!checkLogin(permissions)) {
      // 线上环境判断是否登录
      return <Redirect to={'/login'} />;
    }
    return permission ? this.requireAuth(permission, component) : component;
  };

  render() {
    return (
      <Switch>
        {Object.keys(routerConfig).map(key =>
          routerConfig[key].map(item => {
            const route = item => {
              const Component = item.component && AllComponents[item.component];
              return (
                <Route exact key={item.key} path={item.key}
                       render={props => {
                         const regExp = /\?\S*/g;  // 匹配?及其以后字符串
                         const queryParams = window.location.hash.match(regExp);  // 去除?的参数

                         const {params} = props.match;
                         Object.keys(params).forEach(key => {
                           params[key] = params[key] && params[key].replace(regExp, '');
                         });

                         props.match.params = {...params};
                         const merge = {
                           ...props,
                           query: queryParams ? queryString.parse(queryParams[0]) : {}
                         };

                         // 重新包装组件
                         const wrappedComponent = (
                           <DocumentTitle title={item.title}>
                             <Component {...merge}/>
                           </DocumentTitle>
                         );
                         return item.login ? wrappedComponent : this.requireLogin(wrappedComponent, item.auth);
                       }}
                />
              );
            };

            const subRoute = (r) => {
              return r.subs && r.subs.map(subR => (subR.subs ? subRoute(subR) : route(subR)));
            };

            return item.component ? route(item) : subRoute(item);
          })
        )}

        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default Routers;
