import appReducer from './app';
import * as appTypes from '../actions/app.const';

import TestStore from '../test-support/testStore';

describe('app reducer', () => {
  it('should return the initial state', () => {
    const action = undefined;

    const state = appReducer(action, {});

    const expectedDefaultState = TestStore.createAppStore();

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const value = 'test';
    const action = {
      type: appTypes.SEARCH_VALUE_CHANGED,
      payload: { value },
    };
    const expectedState = TestStore.createAppStore(value);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEARCH_RESULTS_FULFILLED', () => {
    const action = {
      type: appTypes.SEARCH_RESULTS_FULFILLED
    };
    const expectedState = TestStore.createAppStore(undefined, undefined, false);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEARCH_RESULTS_ERRORED', () => {
    const error = 'some error';
    const action = {
      type: appTypes.SEARCH_RESULTS_ERRORED,
      payload: { error },
    };
    const expectedState = TestStore.createAppStore(undefined, error);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CHARACTERS_REQUESTED', () => {
    const action = {
      type: appTypes.CHARACTERS_REQUESTED
    };
    const expectedState = TestStore.createAppStore(undefined, undefined, true);

    const state = appReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
