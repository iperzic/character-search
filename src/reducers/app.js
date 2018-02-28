import * as appTypes from '../actions/app.const';

const defaultState = {
  searchValue: '',
  error: '',
  loading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case appTypes.SEARCH_VALUE_CHANGED:
      return ({
        ...state,
        searchValue: action.payload.value,
      });
    case appTypes.SEARCH_RESULTS_FULFILLED:
      return ({
        ...state,
        loading: false,
      });
    case appTypes.SEARCH_RESULTS_ERRORED:
      return ({
        ...state,
        error: action.payload.error,
        loading: false,
      });
    case appTypes.CHARACTERS_REQUESTED:
      return ({
        ...state,
        loading: true,
      });
    default:
      return state;
  }
};
