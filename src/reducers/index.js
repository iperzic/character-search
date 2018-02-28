import { combineReducers } from 'redux';

import app from './app';
import characters from './characters';
import metadata from './metadata';

export default combineReducers({
  app,
  characters,
  metadata,
});
