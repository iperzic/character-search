import { _if } from 'rxjs/observable/if';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import * as appTypes from '../actions/app.const';
import * as appActions from '../actions/app';

const searchCharacterEpic = (actions$, store, { getJSON }) =>
  actions$.ofType(appTypes.SEARCH_VALUE_CHANGED)
    .debounceTime(500)
    .switchMap(action =>
      _if(() => action.payload.value, getJSON(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${action.payload.value}&orderBy=name&apikey=1ce341e7e5ba09cd56cacb4b3ca1b9ba`)
        .map(appActions.returnResult)
        .catch(appActions.catchError))
    );

export default searchCharacterEpic;
