import * as constants from "./constants";
import * as http from "../axios";

const requestData = category => ({
  type: constants.REQUEST_DATA,
  category
});

export const receiveData = (data, category) => ({
  type: constants.RECEIVE_DATA,
  data,
  category
});

/**
 * 请求数据调用方法
 * @param funcName      请求接口的函数名
 * @param params        请求接口的参数
 * @param stateName
 */
export const fetchData = ({ funcName, params, stateName }) => {
  return (dispatch) => {
    !stateName && (stateName = funcName);
    dispatch(requestData(stateName));
    return http[funcName](params).then(res => {
      dispatch(receiveData(res, stateName));
    });
  };
};
