import { Action } from '@ngrx/store';
import { type } from '../../../shared/utils';

export const ActionTypes = {
  SEARCH_COURT_SESSIONS: type('[SEARCH COURT SESSIONS]  Search court sessions'),
  SEARCH_COURT_SESSIONS_SUCCESS: type('[SEARCH COURT SESSIONS] Search court sessions success'),
  SEARCH_COURT_SESSIONS_FAILED: type('[SEARCH COURT SESSIONS] Search court sessions failed')
};


export class SearchCourtSessionsAction implements Action {
  type = ActionTypes.SEARCH_COURT_SESSIONS;

  constructor(public payload: string) {
  }
}


export class SearchCourtSessionsSuccessAction implements Action {

  type = ActionTypes.SEARCH_COURT_SESSIONS_SUCCESS;

  constructor(public payload: any) {
  }
}


export class SearchCourtSessionsFailedAction implements Action {

  type = ActionTypes.SEARCH_COURT_SESSIONS_FAILED;

  constructor(public payload) {
  }
}

export type Actions = SearchCourtSessionsAction | SearchCourtSessionsFailedAction | SearchCourtSessionsSuccessAction;
