import {Actions, ActionTypes} from '../../actions/search/search-case-files.actions';
import {CaseModel} from '../../../shared/models/search-results.model';

export interface SearchCaseFilesState {
  loading: boolean;
  error: {};
  query: string;
  entities: {
    hasMoreItems: boolean,
    numItems: number,
    results: CaseModel []
  };
}

export const searchCaseFileInitialState: SearchCaseFilesState = {
  loading: false,
  error: null,
  query: '',
  entities: {
    hasMoreItems: false,
    numItems: 0,
    results: []
  }
}


export function searchCaseFileReducer(state = searchCaseFileInitialState, action: Actions): SearchCaseFilesState {
  switch (action.type) {
    case ActionTypes.SEARCH_CASE_FILES:
      return {...state, ...{loading: true, error: null, query: action.payload}};
    case ActionTypes.SEARCH_CASE_FILES_SUCCESS:
      return {...state, ...{loading: false, error: null, entities: action.payload}};
    case ActionTypes.SEARCH_CASE_FILE_FAILED:
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

export const getSearchCaseFileEntities = (state: SearchCaseFilesState) => state.entities;
export const getSearchCaseFileQuery = (state: SearchCaseFilesState) => state.query;
export const getSearchCaseFileLoading = (state: SearchCaseFilesState) => state.loading;
export const getSearchCaseFileError = (state: SearchCaseFilesState) => state.error;
