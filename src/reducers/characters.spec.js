import characterReducer from './characters'
import * as appTypes from '../actions/app.const';

import TestStore from '../test-support/testStore';

describe('character reducer', () => {
  it('should return the initial state', () => {
    const action = undefined;
    const expectedDefaultState = TestStore.createCharacterStore();

    const state = characterReducer(action, {});

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle SEARCH_RESULTS_FULFILLED', () => {
    const char = { id: 1233, name: 'kikiriki', thumbnail: { path: 'some-path', extension: 'jpeg' } };
    const action = {
      type: appTypes.SEARCH_RESULTS_FULFILLED,
      payload: { data: { results: [char] } }
    };
    const expectedState = TestStore.createCharacterStore({
      [char.id]: {
        id: char.id,
        name: char.name,
        image: `${char.thumbnail.path}.${char.thumbnail.extension}`
      }
    }, [char.id], undefined);

    const state = characterReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEARCH_RESULTS_ERRORED', () => {
    const action = {
      type: appTypes.SEARCH_RESULTS_ERRORED,
    };
    const expectedState = TestStore.createCharacterStore();

    const state = characterReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CHARACTER_BOOKMARK', () => {
    const id = 123;
    const action = {
      type: appTypes.CHARACTER_BOOKMARK,
      payload: { id }
    };
    const expectedState = TestStore.createCharacterStore(undefined, undefined, [id]);

    const state = characterReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
