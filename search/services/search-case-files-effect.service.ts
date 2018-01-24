import { CaseFileService } from './../../case-file/services/case-file.service';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Action, Store } from '@ngrx/store';
import {go, search} from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Maybe } from '../../shared/maybe';
import { ApplicationState } from '../../store/index';
import { HttpService } from '../../shared/services/http.service';
import { LoginService } from '../../login/services/login.service';
import { convertParamsToObject, handleHTTPErrors } from '../../shared/utils';
import { ActionTypes, SearchCaseFilesFailedAction, SearchCaseFilesSuccessAction } from '../../store/actions/search/search-case-files.actions';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/combineLatest';
import { empty } from 'rxjs/observable/empty';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Injectable()
export class SearchCaseFilesEffectService {
  @Effect()
  searchCaseFile$: Observable<SearchCaseFilesSuccessAction> = combineLatest(this.actions$, this.loginService.links())
    .filter(([actions, links]) => actions.type === ActionTypes.SEARCH_CASE_FILES)
    .map(([actions, links]) => [actions.payload, links])
    .switchMap(([caseFilesQuery, links]) => {
      if (caseFilesQuery === '') {
        this.store.dispatch(new SearchCaseFilesSuccessAction({ hasMoreItems: false, numItems: 0, results: [] }));
        return empty();
      }
      return this.httpService.search(Maybe.of(links).pluck(['casefiles', 'href']).join(), caseFilesQuery)
        .map((caseFiles) => new SearchCaseFilesSuccessAction(caseFiles))
        .catch((error: Response) => this.handleSearchCaseFilesErrors(this.toastr, this.loginService, error));
    });

  @Effect()
  searchUpdateURL$: Observable<Action> = this.actions$
    // Note: we listen to the SEARCH
    // so when user deletes the search query (and thus empty query is present)
    // we also remove the query from the url.
    .ofType(ActionTypes.SEARCH_CASE_FILES)
    .debounceTime(100)
    .map(toPayload)
    .switchMap((caseFilesQuery: string) => of(search(caseFilesQuery ? convertParamsToObject(caseFilesQuery, []) : {})));

  @Effect()
  searchSingleCaseFile$: Observable<Action> = combineLatest(this.actions$, this.caseFileService.getLinkedDocumentsToMove())
    .filter(([actions, linkedDocuments]) => actions.type === ActionTypes.SEARCH_CASE_FILES_SUCCESS)
    .map(([actions, linkedDocuments]) => [actions.payload, linkedDocuments])
    .filter(([caseFiles, linkedDocuments]) => caseFiles['numItems'] === 1 && !linkedDocuments.length)
    .delay(50)
    .switchMap(([caseFiles, linkedDocuments]) => {
      return of(go([`case-file/${caseFiles['results'][0].nodeId}`]))});

  constructor(private actions$: Actions,
    private httpService: HttpService,
    private toastr: ToastsManager,
    private loginService: LoginService,
    private store: Store<ApplicationState>,
    private router: Router,
    private caseFileService: CaseFileService) {
  }

  handleSearchCaseFilesErrors(toastr, login, error: Response) {
    const errors = {
      showToastr: false,
      action: SearchCaseFilesFailedAction
    }
    return handleHTTPErrors(error, errors, toastr, login)
  }
}
