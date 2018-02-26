import * as appTypes from './app.const';

export const searchCharacter = value => ({
  type: appTypes.SEARCH_VALUE_CHANGED,
  payload: { value },
});

export const returnResult = result => ({
  type: appTypes.SEARCH_RESULTS_FULFILLED,
  payload: { result },
});

export const catchError = value => ({
  type: appTypes.SEARCH_RESULTS_ERRORED,
});
