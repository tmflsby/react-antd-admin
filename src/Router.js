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
import Echarts from "./components/charts/Echarts";
import Recharts from "./components/charts/Recharts";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Views from "./views/Views";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' component={Views}>
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
            <Route path='/app/chart' render={() =>
              <Switch>
                <Route path='/app/chart/echarts' component={Echarts}/>
                <Route path='/app/chart/recharts' component={Recharts}/>
              </Switch>
            }/>
            <Route render={() =>
              <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/404' component={NotFound}/>
              </Switch>
            }/>
          </App>
        </Route>
      </HashRouter>
    );
  }
}

export default Router;
