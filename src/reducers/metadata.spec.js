import metadataReducer from './metadata';
import * as appTypes from '../actions/app.const';

import TestStore from '../test-support/testStore';

describe('metadata reducer', () => {
  let expectedDefaultState = TestStore.createMetadataStore();

  it('should return the initial state', () => {
    const action = undefined;

    const state = metadataReducer(action, {});

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const action = {
      type: appTypes.SEARCH_VALUE_CHANGED,
    };
    expectedDefaultState = TestStore.createMetadataStore();

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const offset = 20;
    const total = 40;
    const count = 20;
    const action = {
      type: appTypes.SEARCH_RESULTS_FULFILLED,
      payload: { data: { offset, total, count } }
    };
    expectedDefaultState = TestStore.createMetadataStore(offset, count, total);

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_RESULTS_ERRORED', () => {
    const action = {
      type: appTypes.SEARCH_RESULTS_ERRORED,
    };
    expectedDefaultState = TestStore.createMetadataStore();

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle CHANGE_PAGE', () => {
    const offset = 20;
    const action = {
      type: appTypes.CHANGE_PAGE,
      payload: { offset },
    };
    expectedDefaultState = TestStore.createMetadataStore(offset);

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedDefaultState);
  });
});
