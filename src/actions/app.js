import * as appTypes from './app.const';

export const searchCharacter = value => ({
  type: appTypes.SEARCH_VALUE_CHANGED,
  payload: { value },
});

export const returnResult = result => ({
  type: appTypes.SEARCH_RESULTS_FULFILLED,
  payload: { data: result.data },
});

export const catchError = error => ({
  type: appTypes.SEARCH_RESULTS_ERRORED,
  payload: { error },
});

export const toggleCharacterBookmark = id => ({
  type: appTypes.CHARACTER_BOOKMARK,
  payload: { id },
});
