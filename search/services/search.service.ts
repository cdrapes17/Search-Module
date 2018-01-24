import { of } from 'rxjs/observable/of';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {ApplicationState} from '../../store/index';
import {Observable} from 'rxjs/Observable';
import {SearchCaseFileAction} from '../../store/actions/search/search-case-files.actions';
import {getArchivedSearchCaseFilesEntitiesSelector, getArchivedSearchCaseFilesErrorSelector, getArchivedSearchCaseFilesLoadingSelector, getArchivedSearchCaseFilesQuerySelector, getCourtHousesEntitiesSelector, getCourtRoomsEntitiesSelector, getJudgesHearingListEntitiesSelector, getJudgesHearingListErrorSelector, getJudgesHearingListLoadingSelector, getJudgesHearingListQuerySelector, getSearchCaseFilesEntitiesSelector, getSearchCaseFilesErrorSelector, getSearchCaseFilesLoadingSelector, getSearchCaseFilesQuerySelector, getSearchCourtSessionEntitiesSelector, getSearchCourtSessionErrorSelector, getSearchCourtSessionLoadingSelector, getSearchCourtSessionQuerySelector} from '../../store/selectors';
import {SearchArchivedCaseFileAction} from 'app/store/actions/search/search-archived-case-files.actions';
import {JudgesHearingListFileAction} from '../../store/actions/search/search-judges-hearing-lists.actions';
import {CourtHouse} from '../../shared/models/courthouse.model';
import {SearchCourtSessionsAction} from '../../store/actions/search/search-court-sessions.actions';
import { LocalStorageService } from 'app/shared/services/local-storage.service';

@Injectable()
export class SearchService {

  constructor(private store?: Store<ApplicationState>) {
  }

  // case file methods
  getCaseFileQuery(): Observable<string> {
    return this.store.select(getSearchCaseFilesQuerySelector);
  }

  getCourtSessionQuery(): Observable<string> {
    return this.store.select(getSearchCourtSessionQuerySelector);
  }

  getCourtSessionLoading(): Observable<boolean> {
    return this.store.select(getSearchCourtSessionLoadingSelector);
  }

  getCourtSessionError(): Observable<{}> {
    return this.store.select(getSearchCourtSessionErrorSelector);
  }

  getCourtSessionEntities(): Observable<{}> {
    return this.store.select(getSearchCourtSessionEntitiesSelector);
  }

  doSearchCaseFiles(query: string) {
    this.store.dispatch(new SearchCaseFileAction(query));
  }

  doSearchCourtSessions(query: string) {
    this.store.dispatch(new SearchCourtSessionsAction(query));
  }

  getCaseFileEntities(): Observable<any> {
    return this.store.select(getSearchCaseFilesEntitiesSelector);
  }

  getCaseFileLoading(): Observable<boolean> {
    return this.store.select(getSearchCaseFilesLoadingSelector);
  }

  getCaseFileError(): Observable<{}> {
    return this.store.select(getSearchCaseFilesErrorSelector);
  }

  // archived case methods
  getArchivedCaseFileQuery(): Observable<string> {
    return this.store.select(getArchivedSearchCaseFilesQuerySelector);
  }

  doArchivedSearchCaseFiles(query: string) {
    this.store.dispatch(new SearchArchivedCaseFileAction(query));
  }

  getArchivedCaseFileEntities(): Observable<any> {
    return this.store.select(getArchivedSearchCaseFilesEntitiesSelector);
  }

  getArchivedCaseFileLoading(): Observable<any> {
    return this.store.select(getArchivedSearchCaseFilesLoadingSelector);
  }

  getArchivedCaseFileError(): Observable<any> {
    return this.store.select(getArchivedSearchCaseFilesErrorSelector);
  }

  // judges hearing methods

  getJudgesHearingFileQuery(): Observable<string> {
    return this.store.select(getJudgesHearingListQuerySelector);
  }

  doSearchJudgesHearingFile(query: string) {
    this.store.dispatch(new JudgesHearingListFileAction(query));
  }

  getJudgesHearingFileEntities(): Observable<any> {
    return this.store.select(getJudgesHearingListEntitiesSelector);
  }

  getJudgesHearingFileLoading(): Observable<boolean> {
    return this.store.select(getJudgesHearingListLoadingSelector);
  }

  getJudgesHearingFileError(): Observable<{}> {
    return this.store.select(getJudgesHearingListErrorSelector);
  }

  getCourtHousesEntities(): Observable<CourtHouse[]> {
    return of(LocalStorageService.getItem('courthouses'));
  }

  getCourtRoomsEntities(): Observable<string[]> {
    return of(LocalStorageService.getItem('courtrooms'));
  }


}
