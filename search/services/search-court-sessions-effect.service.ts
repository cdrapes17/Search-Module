import {of} from 'rxjs/observable/of';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {search} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect, toPayload} from '@ngrx/effects';

import {Maybe} from '../../shared/maybe';
import {ApplicationState} from '../../store/index';
import {convertParamsToObject, handleHTTPErrors} from '../../shared/utils';
import {HttpService} from '../../shared/services/http.service';
import {LoginService} from '../../login/services/login.service';
import {ActionTypes, SearchCourtSessionsFailedAction, SearchCourtSessionsSuccessAction} from '../../store/actions/search/search-court-sessions.actions';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/combineLatest';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {empty} from 'rxjs/observable/empty';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class SearchCourtSessionsEffectService {

  @Effect()
  searchCourtSessions$: Observable<SearchCourtSessionsSuccessAction> = combineLatest(this.actions$, this.loginService.links())
    .filter(([actions, links]) => actions.type === ActionTypes.SEARCH_COURT_SESSIONS)
    .map(([actions, links]) => [actions.payload, links])
    .switchMap(([courtSessionsQuery, links]) => {
      if (courtSessionsQuery === '') {
        this.store.dispatch(new SearchCourtSessionsSuccessAction([]));
        return empty();
      }
      return this.httpService.search(Maybe.of(links).pluck(['courtsessions', 'href']).join(), courtSessionsQuery)
        .map(courtSession => new SearchCourtSessionsSuccessAction(courtSession))
        .catch((error: Response) => this.handleSearchCourtSessionsErrors(this.toastr, this.loginService, error));
    });

  @Effect()
  searchCourtSessionsUpdateURL$: Observable<Action> = this.actions$
    .ofType(ActionTypes.SEARCH_COURT_SESSIONS)
    .debounceTime(100)
    .map(toPayload)
    .switchMap((q: string) => of(search(q ? convertParamsToObject(q, []) : {})));

  @Effect()
  searchSingleCaseFile$: Observable<Action> = this.actions$
    .ofType(ActionTypes.SEARCH_COURT_SESSIONS_SUCCESS)
    .map(toPayload)
    .filter(courtSession => courtSession.length === 1)
    .delay(50)
    .do((courtSessionFiles) => this.router.navigate([`/court-session/${courtSessionFiles[0].nodeId}`]))
    .switchMap(() => empty());

  constructor(private actions$: Actions,
              private httpService: HttpService,
              private toastr: ToastsManager,
              private store: Store<ApplicationState>,
              private loginService: LoginService,
              private router: Router) {
  }


  handleSearchCourtSessionsErrors(toastr, login, error: Response) {
    const errors = {
      showToastr: false,
      action: SearchCourtSessionsFailedAction
    }
    return handleHTTPErrors(error, errors, toastr, login)
  }

}
