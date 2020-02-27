import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import * as constants from "./constants";

const handleDataDefaultState = fromJS({
  isFetching: true,
  data: {}
});

const httpDataDefaultState = fromJS({
  auth: {
    data: {}
  }
});

const handleData = (state = handleDataDefaultState, action) => {
  switch (action.type) {
    case constants.REQUEST_DATA:
      return state.merge({
        isFetching: false
      });
    case constants.RECEIVE_DATA:
      return state.merge({
        isFetching: false,
        data: action.data
      });
    default:
      return state;
  }
};

const httpData = (state = httpDataDefaultState, action) => {
  switch (action.type) {
    case constants.RECEIVE_DATA:
      return state.merge({

      });
    case constants.REQUEST_DATA:
      return state.merge({
        [action.category]: handleData(state[action.category], action)
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  httpDataReducer: httpData
});

export default reducer;
