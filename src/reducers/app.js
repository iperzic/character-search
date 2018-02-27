import * as appTypes from '../actions/app.const';

const defaultState = {
  characters: [],
  searchValue: '',
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
        characters: action.payload.result.response.data.results.map(c => ({
          id: c.id,
          name: c.name,
          image: `${c.thumbnail.path}.${c.thumbnail.extension}`,
          isBookmark: false
        })),
      });
    default:
      return state;
  }
};
