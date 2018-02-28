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
)(...args, { getJSON: ajax.getJSON });

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

export default createStore(
  reducers,
  { characters: loadState('characters') },
  applyMiddleware(localStorageMiddleware, epicMiddleware)
);
