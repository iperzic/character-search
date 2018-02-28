import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import * as appTypes from '../actions/app.const';
import * as appActions from '../actions/app';

const changePageEpic = (actions$, store, { getJSON }) =>
  actions$.ofType(appTypes.CHANGE_PAGE)
    .switchMap(action => getJSON(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${store.getState().app.searchValue}&offset=${action.payload.offset}orderBy=name&apikey=1ce341e7e5ba09cd56cacb4b3ca1b9ba`)
      .map(appActions.returnResult)
      .catch((err) => of(appActions.catchError(err)))
    );

export default changePageEpic;
