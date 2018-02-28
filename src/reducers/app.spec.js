import appReducer from './app';
import * as appTypes from '../actions/app.const';

import TestStore from '../test-support/testStore';

describe('app reducer', () => {
  let expectedDefaultState = TestStore.createAppStore();

  it('should return the initial state', () => {
    const action = undefined;

    const state = appReducer(action, {});

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const value = 'test';
    const action = {
      type: appTypes.SEARCH_VALUE_CHANGED,
      payload: { value },
    };
    expectedDefaultState = TestStore.createAppStore(value);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_RESULTS_ERRORED', () => {
    const error = 'some error';
    const action = {
      type: appTypes.SEARCH_RESULTS_ERRORED,
      payload: { error },
    };
    expectedDefaultState = TestStore.createAppStore(undefined, error);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });
});
