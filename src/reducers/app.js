import * as appTypes from '../actions/app.const';

const defaultState = {
  characters: {
    byId: {},
    search: [],
    bookmarks: [],
  },
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
    case appTypes.SEARCH_RESULTS_FULFILLED:
      return ({
        ...state,
        error: '',
        characters: {
          ...state.characters,
          byId: {
            ...state.characters.byId,
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
        }
      });
    case appTypes.SEARCH_RESULTS_ERRORED:
      return ({
        ...state,
        characters: [],
        error: action.payload.error,
      });
    case appTypes.CHARACTER_BOOKMARK:
      return ({
        ...state,
        characters: {
          ...state.characters,
          bookmarks: state.characters.bookmarks.includes(action.payload.id)
            ? state.characters.bookmarks.filter(b => b !== action.payload.id)
            : [...state.characters.bookmarks, action.payload.id],
        }
      });
    default:
      return state;
  }
};
