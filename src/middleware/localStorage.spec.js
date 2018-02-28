import configureStore from 'redux-mock-store';

import * as appTypes from '../actions/app.const';

import testStore from "../test-support/testStore";
import localStorage from './localStorage';

const create = () => {
  const store = configureStore()(testStore.createFreshStore());
  const next = jest.fn();
  const mockSave = jest.fn();

  const invoke = (action) => localStorage(mockSave)(store)(next)(action);

  return { store, next, invoke, mockSave }
};

describe('localStorage', () => {
  it('passes through non-function action', () => {
    const { next, invoke } = create();
    const action = { type: appTypes.CHARACTER_BOOKMARK };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('calls the save function', () => {
    const { invoke, mockSave } = create();
    const action = { type: appTypes.CHARACTER_BOOKMARK };
    invoke(action);
    expect(mockSave).toHaveBeenCalledWith('characters', { bookmarks: [], byId: {}, search: [] });
  });
});
