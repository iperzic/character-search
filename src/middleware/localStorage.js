import * as appTypes from '../actions/app.const';

const localStorageMiddleware = saveState => store => next => (action) => {
  next(action);

  if (action.type === appTypes.CHARACTER_BOOKMARK) {
    const state = store.getState().characters;
    const data = {
      byId: state.bookmarks.reduce((a, c) => ({
        ...a,
        [c]: state.byId[c],
      }), {}),
      search: [],
      bookmarks: state.bookmarks,
    };

    saveState('characters', data);
  }
};

export default localStorageMiddleware;
