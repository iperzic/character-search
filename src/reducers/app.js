import * as appTypes from '../actions/app.const';

const defaultState = {
  searchValue: '',
  error: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case appTypes.SEARCH_VALUE_CHANGED:
      return ({
        ...state,
        searchValue: action.payload.value,
      });
    case appTypes.SEARCH_RESULTS_ERRORED:
      return ({
        ...state,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
