import axios from "axios";
import { get } from "./tools";
import * as config from "./config";

export const getBBCNews = () => get({url: config.NEWS_BBC});

export const npmDependencies = () =>
  axios.get('./npm.json')
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });

export const weibo = () =>
  axios.get('./weibo.json')
    .then(res => res.data)
    .catch(err => {
    console.log(err);
  });
