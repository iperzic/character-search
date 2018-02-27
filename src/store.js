import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers/';
import { searchCharacterEpic } from './epics/app';

const epicMiddleware = createEpicMiddleware(searchCharacterEpic);

export default createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);
