import axios from "axios";
import { get } from "./tools";
import * as config from "./config";

export const getBBCNews = () => get({url: config.NEWS_BBC});

export const npmDependencies = () => {
  axios.get('./npm.json').then(res => {
    return res.data;
  }).catch(error => {
    console.log(error);
  })
};

export const weibo = () => {
  axios.get('./weibo.json').then(res => {
    return res.data;
  }).catch(error => {
    console.log(error);
  })
};
