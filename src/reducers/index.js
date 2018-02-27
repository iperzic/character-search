import { combineReducers } from 'redux';

import app from './app';
import characters from './characters';

export default combineReducers({
  app,
  characters,
});
