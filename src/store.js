import { createStore } from 'redux';
import appReducer from './reducers/app';

export default createStore(
  appReducer,
);
