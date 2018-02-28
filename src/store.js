import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import reducers from './reducers/';
import { searchCharacterEpic, changePageEpic } from './epics/app';

import localStorageMiddleware from './middleware/localStorage';

const epicMiddleware = createEpicMiddleware(combineEpics(searchCharacterEpic, changePageEpic));

const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export default createStore(
  reducers,
  { characters: loadState('characters') },
  applyMiddleware(localStorageMiddleware, epicMiddleware)
);
