import * as appTypes from '../actions/app.const';

const defaultState = {
  count: 0,
  offset: 0,
  total: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case appTypes.SEARCH_VALUE_CHANGED:
      return ({
        ...state,
        ...defaultState,
      });
    case appTypes.SEARCH_RESULTS_FULFILLED:
      return ({
        ...state,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        total: action.payload.data.total,
      });
    case appTypes.SEARCH_RESULTS_ERRORED:
      return ({
        ...state,
        ...defaultState,
      });
    case appTypes.CHANGE_PAGE:
      return ({
        ...state,
        offset: action.payload.offset,
      });
    default:
      return state;
  }
};
