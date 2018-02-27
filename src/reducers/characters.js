import * as appTypes from '../actions/app.const';

const defaultState = {
  byId: {},
  search: [],
  bookmarks: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case appTypes.SEARCH_RESULTS_FULFILLED:
      return ({
        ...state,
        byId: {
          ...state.byId,
          ...action.payload.data.results.reduce((a, c) => ({
            ...a,
            [c.id]: {
              id: c.id,
              name: c.name,
              image: `${c.thumbnail.path}.${c.thumbnail.extension}`,
            },
          }), {}),
        },
        search: action.payload.data.results.map(c => c.id),
      });
    case appTypes.SEARCH_RESULTS_ERRORED:
      return ({
        ...state,
        search: [],
      });
    case appTypes.CHARACTER_BOOKMARK:
      return ({
        ...state,
        bookmarks: state.bookmarks.includes(action.payload.id)
          ? state.bookmarks.filter(b => b !== action.payload.id)
          : [...state.bookmarks, action.payload.id],
      });
    default:
      return state;
  }
};
