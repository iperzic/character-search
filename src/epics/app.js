import { ajax } from 'rxjs/observable/dom/ajax';

import * as appTypes from '../actions/app.const';

import * as appActions from '../actions/app';

export const searchCharacterEpic = (actions$) =>
  actions$.ofType(appTypes.SEARCH_VALUE_CHANGED)
    .debounceTime(500)
    .switchMap(action =>
      ajax(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${action.payload.value}&orderBy=name&apikey=1ce341e7e5ba09cd56cacb4b3ca1b9ba`)
        .map(appActions.returnResult)
        .catch(appActions.catchError)
    );