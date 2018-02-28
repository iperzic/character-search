import metadataReducer from './metadata';
import * as appTypes from '../actions/app.const';

import TestStore from '../test-support/testStore';

describe('metadata reducer', () => {
  it('should return the initial state', () => {
    const action = undefined;

    const state = metadataReducer(action, {});

    const expectedDefaultState = TestStore.createMetadataStore();

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const action = {
      type: appTypes.SEARCH_VALUE_CHANGED,
    };
    const expectedState = TestStore.createMetadataStore();

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEARCH_VALUE_CHANGED', () => {
    const offset = 20;
    const total = 40;
    const count = 20;
    const action = {
      type: appTypes.SEARCH_RESULTS_FULFILLED,
      payload: { data: { offset, total, count } }
    };
    const expectedState = TestStore.createMetadataStore(offset, count, total);

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEARCH_RESULTS_ERRORED', () => {
    const action = {
      type: appTypes.SEARCH_RESULTS_ERRORED,
    };
    const expectedState = TestStore.createMetadataStore();

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CHANGE_PAGE', () => {
    const offset = 20;
    const action = {
      type: appTypes.CHANGE_PAGE,
      payload: { offset },
    };
    const expectedState = TestStore.createMetadataStore(offset);

    const state = metadataReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
