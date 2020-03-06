import { combineReducers } from "redux";
import * as constants from "./constants";

const handleDataDefaultState ={
  isFetching: true,
  data: {}
};

const httpDataDefaultState ={};

const handleData = (state = handleDataDefaultState, action) => {
  switch (action.type) {
    case constants.REQUEST_DATA:
      return {...state, isFetching: true};
    case constants.RECEIVE_DATA:
      return {...state, isFetching: false, data: action.data};
    default:
      return {...state};
  }
};

const httpData = (state = httpDataDefaultState, action) => {
  switch (action.type) {
    case constants.RECEIVE_DATA:
    case constants.REQUEST_DATA:
      return {
        ...state,
        [action.category]: handleData(state[action.category], action)
      };
    default:
      return {...state};
  }
};

const reducer = combineReducers({
  httpDataReducer: httpData
});

export default reducer;
