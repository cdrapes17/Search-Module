import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';
import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {search} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {ApplicationState} from '../../store/index';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {ActionTypes, JudgesHearingListFileFailedAction, JudgesHearingListFileSuccessAction} from '../../store/actions/search/search-judges-hearing-lists.actions';

import {Maybe} from '../../shared/maybe';
import {convertParamsToObject, handleHTTPErrors} from '../../shared/utils';

import {HttpService} from '../../shared/services/http.service';
import {LoginService} from '../../login/services/login.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/combineLatest';
import {empty} from 'rxjs/observable/empty';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Injectable()
export class JudgesHearingListEffectService {

  @Effect()
  searchJudgesHearingLists$: Observable<JudgesHearingListFileSuccessAction> = combineLatest(this.actions$, this.loginService.links())
    .filter(([actions, links]) => actions.type === ActionTypes.SEARCH_JUDGES_HEARING_LIST_FILE)
    .map(([actions, links]) => [actions.payload, links])
    .switchMap(([judgesHearingFilesQuery, links]) => {
      if (judgesHearingFilesQuery === '') {
        this.store.dispatch(new JudgesHearingListFileSuccessAction({hasMoreItems: false, numItems: 0, results: []}));
        return empty();
      }
      return this.httpService.search(Maybe.of(links).pluck(['casefiles-by-hearing', 'href']).join(), judgesHearingFilesQuery)
        .map((judgesHearingFiles) => new JudgesHearingListFileSuccessAction(judgesHearingFiles))
        .catch((error: Response) => this.handleSearchJudgesHearingListsErrors(this.toastr, this.loginService, error));
    });

  @Effect()
  searchUpdateURL$: Observable<Action> = this.actions$
  // Note: we listen to the SEARCH
  // so when user deletes the search query (and thus empty query is present)
  // we also remove the query from the url.
    .ofType(ActionTypes.SEARCH_JUDGES_HEARING_LIST_FILE)
    .debounceTime(100)
    .map(toPayload)
    .switchMap((q: string) => of(search(q ? convertParamsToObject(q, []) : {})));

  @Effect()
  searchSingleJudgesHearingFile$: Observable<Action> = this.actions$
    .ofType(ActionTypes.SEARCH_JUDGES_HEARING_LIST_SUCCESS)
    .map(toPayload)
    .filter(judgesHearingFiles => judgesHearingFiles['numItems'] === 1)
    .delay(50)
    .do((judgesHearingFiles) => this.router.navigate([`/case-file/${judgesHearingFiles['results'][0].nodeId}`]))
    .switchMap(() => empty());

  constructor(private actions$: Actions,
              private httpService: HttpService,
              private toastr: ToastsManager,
              private loginService: LoginService,
              private store: Store<ApplicationState>,
              private router: Router) {
  }


  handleSearchJudgesHearingListsErrors(toastr, login, error: Response) {
    const errors = {
      showToastr: false,
      action: JudgesHearingListFileFailedAction
    }
    return handleHTTPErrors(error, errors, toastr, login)
  }
}

