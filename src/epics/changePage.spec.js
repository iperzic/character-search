import configureStore from 'redux-mock-store';
import { ActionsObservable } from 'redux-observable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';

import * as appTypes from '../actions/app.const';


import changePageEpic from './changePage.js';
import testStore from "../test-support/testStore";

const store = configureStore()(testStore.createFreshStore());

const action$ = ActionsObservable.of(
  { type: appTypes.CHANGE_PAGE, payload: { offset: 20 } }
);

describe('changePageEpic Epic', () => {
  it('dispatches the correct actions when it is successful', (done) => {
    const mockResponse = {
      response: {
        data: {
          offset: 20,
          limit: 20,
          total: 40,
          count: 20,
          results: [{
            id: 123,
            name: 'Abyss',
            thumbnail: {
              path: 'some-fake-url',
              extension: 'jpg'
            }
          }]
        }
      }
    };

    const ajax = () => Observable.of(mockResponse);
    const expectedOutputActions = [{
      type: appTypes.SEARCH_RESULTS_FULFILLED,
      payload: { data: mockResponse.response.data }
    }];

    changePageEpic(action$, store, { ajax })
      .toArray()
      .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        }
      );
  });

  it('dispatches the correct actions when there is an error', (done) => {
    const ajax = () => Observable.throw('fetch failed');
    const expectedOutputActions = [{ type: appTypes.SEARCH_RESULTS_ERRORED, payload: { error: 'fetch failed' } }];

    changePageEpic(action$, store, { ajax })
      .toArray()
      .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        }
      );
  });
});
