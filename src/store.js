import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers/';
import { searchCharacterEpic } from './epics/app';

import localStorageMiddleware from './middleware/localStorage';

const epicMiddleware = createEpicMiddleware(searchCharacterEpic);

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
