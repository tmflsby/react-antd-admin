import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
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
import Dashboard from "./components/dashboard/Dashboard";
import Modals from "./components/ui/Modals";
import Notifications from "./components/ui/Notifications";
import TabsCustom from "./components/ui/Tabs";
import Banners from "./components/ui/banners";
import Drags from "./components/ui/Draggable";
import Gallery from "./components/ui/Gallery";
import BasicAnimations from "./components/animation/BasicAnimations";
import ExampleAnimations from "./components/animation/ExampleAnimations";

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null;
  }
};

// 按需加载富文本配置
const Wysiwyg = Loadable({
  loader: () => import('./components/ui/Wysiwyg'),
  loading: MyLoadingComponent
});

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Views>
          <App>
            <Redirect to='/app/dashboard/index'/>
            <Route path='/app/dashboard/index' component={Dashboard}/>
            <Route path='/app/ui' render={() =>
              <Switch>
                <Route path='/app/ui/buttons' component={Buttons} />
                <Route path='/app/ui/icons' component={Icons} />
                <Route path='/app/ui/spins' component={Spins} />
                <Route path='/app/ui/modals' component={Modals} />
                <Route path='/app/ui/notifications' component={Notifications} />
                <Route path='/app/ui/tabs' component={TabsCustom} />
                <Route path='/app/ui/banners' component={Banners} />
                <Route path='/app/ui/wysiwyg' component={Wysiwyg} />
                <Route path='/app/ui/draggable' component={Drags} />
                <Route path='/app/ui/gallery' component={Gallery} />
              </Switch>
            }/>
            <Route path='/app/animation' render={() =>
              <Switch>
                <Route path='/app/animation/basicAnimations' component={BasicAnimations} />
                <Route path='/app/animation/exampleAnimations' component={ExampleAnimations} />
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
        </Views>
      </HashRouter>
    );
  }
}

export default Router;
