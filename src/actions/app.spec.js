import * as actions from './app';
import * as appTypes from './app.const';

describe('actions', () => {
  describe('#searchCharacter(value)', () => {
    it('should change query using the provided parameter', () => {
      const value = 'myName';
      const expectedAction = {
        type: appTypes.SEARCH_VALUE_CHANGED,
        payload: {
          value,
        },
      };

      expect(actions.searchCharacter(value)).toMatchObject(expectedAction);
    });
  });

  describe('#returnResult(result)', () => {
    it('should return data fetched', () => {
      const data = { data: {} };
      const expectedAction = {
        type: appTypes.SEARCH_RESULTS_FULFILLED,
        payload: {
          data: data.data,
        },
      };

      expect(actions.returnResult(data)).toMatchObject(expectedAction);
    });
  });

  describe('#catchError(error)', () => {
    it('should catch error thrown', () => {
      const error = {};
      const expectedAction = {
        type: appTypes.SEARCH_RESULTS_ERRORED,
        payload: {
          error,
        },
      };

      expect(actions.catchError(error)).toMatchObject(expectedAction);
    });
  });

  describe('#toggleCharacterBookmark(id)', () => {
    it('should toggle character bookmark status', () => {
      const id = 123;
      const expectedAction = {
        type: appTypes.CHARACTER_BOOKMARK,
        payload: {
          id,
        },
      };

      expect(actions.toggleCharacterBookmark(id)).toMatchObject(expectedAction);
    });
  });

  describe('#changePage(offset)', () => {
    it('should change page offset', () => {
      const offset = 20;
      const expectedAction = {
        type: appTypes.CHANGE_PAGE,
        payload: {
          offset,
        },
      };

      expect(actions.changePage(offset)).toMatchObject(expectedAction);
    });
  });
});
