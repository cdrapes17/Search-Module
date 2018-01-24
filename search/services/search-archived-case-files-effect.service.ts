import { CaseFileService } from 'app/case-file/services/case-file.service';
import {of} from 'rxjs/observable/of';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {search} from '@ngrx/router-store';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect, toPayload} from '@ngrx/effects';

import {HttpService} from 'app/shared/services/http.service';
import {LoginService} from '../../login/services/login.service';

import {Maybe} from '../../shared/maybe';
import {ApplicationState} from '../../store/index';
import {convertParamsToObject, handleHTTPErrors} from 'app/shared/utils';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {CaseModel} from 'app/shared/models/search-results.model';
import {ActionTypes, SearchArchivedCaseFileFailedAction, SearchArchivedCaseFileSuccessAction} from 'app/store/actions/search/search-archived-case-files.actions';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/combineLatest';
import {empty} from 'rxjs/observable/empty';

@Injectable()
export class ArchivedSearchEffectService {

  @Effect()
  searchCaseFile$: Observable<SearchArchivedCaseFileSuccessAction> = combineLatest(this.actions$, this.loginService.links())
    .filter(([actions, links]) => actions.type === ActionTypes.SEARCH_ARCHIVED_CASE_FILE)
    .map(([actions, links]) => [actions.payload, links])
    .switchMap(([archiveCaseFileQuery, links]) => {
      if (archiveCaseFileQuery === '') {
        this.store.dispatch(new SearchArchivedCaseFileSuccessAction({hasMoreItems: false, numItems: 0, results: []}));
        return empty();
      }
      return this.httpService.search(Maybe.of(links).pluck(['casefiles', 'href']).join(), archiveCaseFileQuery)
        .map((cases: CaseModel[]) => new SearchArchivedCaseFileSuccessAction(cases))
        .catch((error: Response) => this.handleSearchArchivedCaseFilesErrors(this.toastr, this.loginService, error));
    });

  @Effect()
  searchSingleArchivedCaseFile$: Observable<Action> = combineLatest(this.actions$, this.caseFileService.getLinkedDocumentsToMove())
    .filter(([actions, linkedDocuments]) => actions.type === ActionTypes.SEARCH_ARCHIVED_CASE_FILE_SUCCESS)
    .map(([actions, linkedDocuments]) => [actions.payload, linkedDocuments])
    .filter(([archiveCaseFiles, linkedDocuments]) => archiveCaseFiles['numItems'] === 1 && !linkedDocuments.length)
    .delay(50)
    .do(([archiveCaseFiles, linkedDocuments]) => this.router.navigate([`/case-file/${archiveCaseFiles['results'][0].nodeId}`]))
    .switchMap(() => empty());


  @Effect()
  searchUpdateURL$: Observable<Action> = this.actions$
  // Note: we listen to the SEARCH
  // so when user deletes the search query (and thus empty query is present)
  // we also remove the query from the url.
    .ofType(ActionTypes.SEARCH_ARCHIVED_CASE_FILE)
    .debounceTime(100)
    .map(toPayload)
    .switchMap((q: string) => of(search(q ? convertParamsToObject(q, []) : {})));


  constructor(private actions$: Actions,
              private httpService: HttpService,
              private toastr: ToastsManager,
              private loginService: LoginService,
              private store: Store<ApplicationState>,
              private router: Router,
              private caseFileService: CaseFileService) {
  }


  handleSearchArchivedCaseFilesErrors(toastr, login, error: Response) {
    const errors = {
      showToastr: false,
      action: SearchArchivedCaseFileFailedAction
    }
    return handleHTTPErrors(error, errors, toastr, login)
  }

}
