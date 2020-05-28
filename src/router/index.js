import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import queryString from "query-string";
import Buttons from "../components/ui/Buttons";
import Icons from "../components/ui/Icons";
import Spins from "../components/ui/Spins";
import BasicTables from "../components/tables/BasicTables";
import AdvancedTables from "../components/tables/AdvancedTables";
import AsynchronousTable from "../components/tables/AsynchronousTable";
import BasicForm from "../components/forms/BasicForm";
import Echarts from "../components/charts/Echarts";
import Recharts from "../components/charts/Recharts";
import Dashboard from "../components/dashboard/Dashboard";
import Modals from "../components/ui/Modals";
import Notifications from "../components/ui/Notifications";
import TabsCustom from "../components/ui/Tabs";
import Banners from "../components/ui/banners";
import Drags from "../components/ui/Draggable";
import Gallery from "../components/ui/Gallery";
import BasicAnimations from "../components/animation/BasicAnimations";
import ExampleAnimations from "../components/animation/ExampleAnimations";
import BasicAuth from "../components/auth/Basic";
import RouterEnter from "../components/auth/RouterEnter";
import CssModule from "../components/cssModule";
import Map from "../components/ui/map/Map";
import Loading from "../components/widget/Loading";
import QueryParams from "../components/extension/QueryParams";

// 按需加载富文本配置
const Wysiwyg = Loadable({
  loader: () => import('../components/ui/Wysiwyg'),
  loading: Loading
});

class Routers extends Component {
  requireAuth = (permission, component) => {
    const { auth } = this.props;
    const { permissions } = auth.data;
    if (!permissions || !permissions.includes(permission)) {
      return <Redirect to={'/404'} />;
    }
    return component;
  };

  render() {
    return (
      <Switch>
        <Route exact path='/app/dashboard/index' component={Dashboard}/>

        <Route path='/app/ui/buttons' component={Buttons} />
        <Route path='/app/ui/icons' component={Icons} />
        <Route path='/app/ui/spins' component={Spins} />
        <Route path='/app/ui/modals' component={Modals} />
        <Route path='/app/ui/notifications' component={Notifications} />
        <Route path='/app/ui/tabs' component={TabsCustom} />
        <Route path='/app/ui/banners' component={Banners} />
        <Route path='/app/ui/wysiwyg' component={Wysiwyg} />
        <Route path='/app/ui/drags' component={Drags} />
        <Route path='/app/ui/gallery' component={Gallery} />
        <Route path='/app/ui/map' component={Map} />

        <Route path='/app/animation/basicAnimations' component={BasicAnimations} />
        <Route path='/app/animation/exampleAnimations' component={ExampleAnimations} />

        <Route path='/app/table/basicTable' component={BasicTables} />
        <Route path='/app/table/advancedTable' component={AdvancedTables} />
        <Route path='/app/table/asynchronousTable' component={AsynchronousTable} />

        <Route path='/app/form/basicForm' component={BasicForm} />

        <Route path='/app/chart/echarts' component={Echarts}/>
        <Route path='/app/chart/recharts' component={Recharts}/>

        <Route path='/app/auth/basic' component={BasicAuth}/>
        <Route path='/app/auth/routerEnter'
               component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)}
        />

        <Route path='/app/cssModule' component={CssModule}/>

        <Route path='/app/extension/queryParams'
               render={ props => {
                 const regExp = /\?\S*/g;  // 匹配?及其以后字符串
                 const queryParams = window.location.hash.match(regExp);  // 去除?的参数

                 const {params} = props.match;
                 Object.keys(params).forEach(key => {
                   params[key] = params[key] && params[key].replace(regExp, '');
                 });

                 props.match.params = {...params};
                 const merge = {...props, query: queryParams ? queryString.parse(queryParams[0]) : {}};

                 return <QueryParams {...merge}/>
               }}
        />

        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default Routers;
