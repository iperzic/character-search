import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import appReducer from './reducers/app';
import { searchCharacterEpic } from './epics/app';

const epicMiddleware = createEpicMiddleware(searchCharacterEpic);

export default createStore(
  appReducer,
  applyMiddleware(epicMiddleware)
);
