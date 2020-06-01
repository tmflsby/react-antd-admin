import Loadable from "react-loadable";
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
import Visitor from "./extension/Visitor";
import MultipleMenu from "./extension/MultipleMenu";

// 按需加载富文本配置
const Wysiwyg = Loadable({
  loader: () => import('../components/ui/Wysiwyg'),
  loading: Loading
});

export default {
  Buttons, Icons, Spins, BasicTables, AdvancedTables, AsynchronousTable, BasicForm,
  Echarts, Recharts, Dashboard, Modals, Notifications, TabsCustom, Banners, Drags,
  Gallery, BasicAnimations, ExampleAnimations, BasicAuth, RouterEnter, CssModule,
  Map, QueryParams, Wysiwyg, Visitor, MultipleMenu
};
