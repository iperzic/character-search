import * as appTypes from '../actions/app.const';

const saveState = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    console.error('Failed to save state to local storage');
  }
};

const localStorageMiddleware = store => next => (action) => {
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
