import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";
import App from "../App";

const Views = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
        <Route path="/app" component={App} />
        <Route path="/404" component={NotFound} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Views;
