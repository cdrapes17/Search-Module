import {SearchCaseFilesState, searchCaseFileInitialState} from './search-case-files.reducer';
import {searchCourtSessionsInitialState, SearchCourtSessionsState} from './search-court-sessions.reducer';
import {SearchJudgesHearingListsState, judgesHearingListInitialState} from './search-judges-hearing-lists.reducers';
import {SearchArchivedCaseFilesState, archivedCaseFileInitialState} from 'app/store/reducers/search/search-archived-case-files.reducer';

export interface SearchState {
  caseFiles: SearchCaseFilesState;
  judgesHearingFiles: SearchJudgesHearingListsState;
  archivedCaseFiles: SearchArchivedCaseFilesState;
  courtSessions: SearchCourtSessionsState;
}


export const searchInitialState: SearchState = {
  caseFiles: searchCaseFileInitialState,
  judgesHearingFiles: judgesHearingListInitialState,
  archivedCaseFiles: archivedCaseFileInitialState,
  courtSessions: searchCourtSessionsInitialState,
};


export const getSearchCaseFile = (state: SearchState) => state.caseFiles;
export const getJudgesHearingListFile = (state: SearchState) => state.judgesHearingFiles;
export const getArchivedSearchCaseFile = (state: SearchState) => state.archivedCaseFiles;
export const getSearchCourtSessions = (state: SearchState) => state.courtSessions;
