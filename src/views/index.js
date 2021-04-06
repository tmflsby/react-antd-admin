import Loadable from "react-loadable";
import Dashboard from "../views/dashboard/Dashboard";
import Buttons from "../views/ui/Buttons";
import Icons from "../views/ui/Icons";
import Spins from "../views/ui/Spins";
import Modals from "../views/ui/Modals";
import Notifications from "../views/ui/Notifications";
import TabsCustom from "../views/ui/Tabs";
import Banners from "../views/ui/banners";
import Drags from "../views/ui/Draggable";
import Gallery from "../views/ui/Gallery";
import Map from "../views/ui/map/Map";
import BasicAnimations from "../views/animation/BasicAnimations";
import ExampleAnimations from "../views/animation/ExampleAnimations";
import BasicTables from "../views/tables/BasicTables";
import AdvancedTables from "../views/tables/AdvancedTables";
import AsynchronousTable from "../views/tables/AsynchronousTable";
import BasicForm from "../views/forms/BasicForm";
import Echarts from "../views/charts/Echarts";
import Recharts from "../views/charts/Recharts";
import BasicAuth from "../views/auth/Basic";
import RouterEnter from "../views/auth/RouterEnter";
import CssModule from "../views/cssModule";
import QueryParams from "../views/extension/QueryParams";
import Visitor from "../views/extension/Visitor";
import MultipleMenu from "../views/extension/MultipleMenu";
import Sub1 from "../views/smenu/SmenuSub1";
import Sub2 from "../views/smenu/SmenuSub2";
import Loading from "../components/Loading";


// 按需加载富文本配置
const Wysiwyg = Loadable({
  loader: () => import('../views/ui/Wysiwyg'),
  loading: Loading
});

export default {
  Dashboard,
  Buttons,
  Icons,
  Spins,
  Modals,
  Notifications,
  TabsCustom,
  Banners,
  Drags,
  Gallery,
  Map,
  BasicAnimations,
  ExampleAnimations,
  BasicTables,
  AdvancedTables,
  AsynchronousTable,
  BasicForm,
  Echarts,
  Recharts,
  BasicAuth,
  RouterEnter,
  CssModule,
  QueryParams,
  Visitor,
  MultipleMenu,
  Sub1,
  Sub2,
  Wysiwyg
};
