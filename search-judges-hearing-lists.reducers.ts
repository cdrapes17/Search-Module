import { ActionTypes, Actions } from './../../actions/search/search-judges-hearing-lists.actions';
import {JudgesHearingModel} from '../../../shared/models/judges-hearing.model';

export interface SearchJudgesHearingListsState {
  loading: boolean;
  error: {};
  query: string;
  entities: {
    hasMoreItems: boolean,
    numItems: number,
    results: JudgesHearingModel[]
  };
}

export const judgesHearingListInitialState: SearchJudgesHearingListsState = {
  loading: false,
  error: null,
  query: '',
  entities: {
    hasMoreItems: false,
    numItems: 0,
    results: []
  }
}

export function searchJudgesHearingListFileReducer(state = judgesHearingListInitialState, action: Actions): SearchJudgesHearingListsState {
  switch (action.type) {
    case ActionTypes.SEARCH_JUDGES_HEARING_LIST_FILE:
      return {...state, ...{loading: true, error: null, query: action.payload}};
    case ActionTypes.SEARCH_JUDGES_HEARING_LIST_SUCCESS:
      return {...state, ...{loading: false, error: null, entities: action.payload}};
    case ActionTypes.SEARCH_JUDGES_HEARING_LIST_FAILED:
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

export const getSearchJudgesHearlingListEntities = (state: SearchJudgesHearingListsState) => state.entities;
export const getSearchJudgesHearlingListQuery = (state: SearchJudgesHearingListsState) => state.query;
export const getSearchJudgesHearlingListLoading = (state: SearchJudgesHearingListsState) => state.loading;
export const getSearchJudgesHearlingListError = (state: SearchJudgesHearingListsState) => state.error;
