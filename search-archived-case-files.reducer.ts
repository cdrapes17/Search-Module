import { Actions, ActionTypes } from '../../actions/search/search-archived-case-files.actions';
import { CaseModel } from 'app/shared/models/search-results.model';

export interface SearchArchivedCaseFilesState {
  loading: boolean;
  error: {};
  query: string;
  entities: {
    hasMoreItems: boolean,
    numItems: number,
    results: CaseModel[]
  };
}

export const archivedCaseFileInitialState: SearchArchivedCaseFilesState = {
  loading: false,
  error: null,
  query: '',
  entities: {
    hasMoreItems: false,
    numItems: 0 ,
    results: []
  }
}


export function searchArchivedCaseFileReducer(state = archivedCaseFileInitialState, action: Actions): SearchArchivedCaseFilesState {
  switch (action.type) {
    case ActionTypes.SEARCH_ARCHIVED_CASE_FILE:
      return { ...state, ...{ loading: true, error: null, query: action.payload } };
    case ActionTypes.SEARCH_ARCHIVED_CASE_FILE_SUCCESS:
      return { ...state, ...{ loading: false, error: null, entities: action.payload } };
    case ActionTypes.SEARCH_ARCHIVED_CASE_FILE_FAILED:
      return {
        ...state, ...{
          loading: false,
          error: action.payload,
          entities: {
            hasMoreItems: false,
            numItems: 0,
            results: []
          }
        }
      };
    default:
      return state
  }
}

export const getArchivedSearchCaseFileEntities = (state: SearchArchivedCaseFilesState) => state.entities;
export const getArchivedSearchCaseFileQuery = (state: SearchArchivedCaseFilesState) => state.query;
export const getArchivedSearchCaseFileLoading = (state: SearchArchivedCaseFilesState) => state.loading;
export const getArchivedSearchCaseFileError = (state: SearchArchivedCaseFilesState) => state.error;
