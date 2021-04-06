import * as Api from "../axios";
import { setConfig } from "redux-alita";

const store = setConfig(Api);

export default store;
