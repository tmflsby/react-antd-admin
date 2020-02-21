import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Buttons from "./components/ui/Buttons";
import Icons from "./components/ui/Icons";
import Spins from "./components/ui/Spins";
import BasicTables from "./components/tables/BasicTables";
import AdvancedTables from "./components/tables/AdvancedTables";
import AsynchronousTable from "./components/tables/AsynchronousTable";
import BasicForm from "./components/forms/BasicForm";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/app/ui' render={() =>
            <Switch>
              <Route path='/app/ui/buttons' component={Buttons} />
              <Route path='/app/ui/icons' component={Icons} />
              <Route path='/app/ui/spins' component={Spins} />
            </Switch>
          }/>
          <Route path='/app/table' render={() =>
            <Switch>
              <Route path='/app/table/basicTable' component={BasicTables} />
              <Route path='/app/table/advancedTable' component={AdvancedTables} />
              <Route path='/app/table/asynchronousTable' component={AsynchronousTable} />
            </Switch>
          }/>
          <Route path='/app/form' render={() =>
            <Switch>
              <Route path='/app/form/basicForm' component={BasicForm} />
            </Switch>
          }/>
        </App>
      </HashRouter>
    );
  }
}

export default Router;
