import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import reducers from './reducers/';
import searchCharacterEpic from './epics/searchCharacter';
import changePageEpic from './epics/changePage';

import localStorageMiddleware from './middleware/localStorage';

const rootEpic = (...args) => combineEpics(
  searchCharacterEpic,
  changePageEpic,
)(...args, { ajax });

const epicMiddleware = createEpicMiddleware(rootEpic);

const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    console.error('Failed to save state to local storage');
  }
};

export default createStore(
  reducers,
  { characters: loadState('characters') },
  applyMiddleware(localStorageMiddleware(saveState), epicMiddleware)
);
