import {Actions, ActionTypes} from '../../actions/search/search-court-sessions.actions';
import {CourtSession} from '../../../shared/models/court-session.model';

export interface SearchCourtSessionsState {
  loading: boolean;
  error: {};
  query: string;
  entities: CourtSession []
}

export const searchCourtSessionsInitialState: SearchCourtSessionsState = {
  loading: false,
  error: null,
  query: '',
  entities: []
}


export function searchCourtSessionsReducer(state = searchCourtSessionsInitialState, action: Actions): SearchCourtSessionsState {
  switch (action.type) {
    case ActionTypes.SEARCH_COURT_SESSIONS:
      return {...state, ...{loading: true, error: null, query: action.payload}};
    case ActionTypes.SEARCH_COURT_SESSIONS_SUCCESS:
      return {...state, ...{
        loading: false,
        error: null,
        entities: action.payload
      }};
    case ActionTypes.SEARCH_COURT_SESSIONS_FAILED:
      return {...state, ...{ loading: false, error: action.payload, entities: []}};
    default:
      return state
  }
}

export const getSearchCourtSessionsEntities = (state: SearchCourtSessionsState) => state.entities;
export const getSearchCourtSessionsQuery = (state: SearchCourtSessionsState) => state.query;
export const getSearchCourtSessionsLoading = (state: SearchCourtSessionsState) => state.loading;
export const getSearchCourtSessionsError = (state: SearchCourtSessionsState) => state.error;
