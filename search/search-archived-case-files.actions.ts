import { Action } from '@ngrx/store';

import { type } from '../../../shared/utils';

export const ActionTypes = {
  SEARCH_ARCHIVED_CASE_FILE: type('[SEARCH ARCHIVED CASE] Search archived case file'),
  SEARCH_ARCHIVED_CASE_FILE_SUCCESS: type('[SEARCH ARCHIVED CASE] Search archived case file success'),
  SEARCH_ARCHIVED_CASE_FILE_FAILED: type('[SEARCH ARCHIVED CASE] Search archived case file failed')
};


export class SearchArchivedCaseFileAction implements Action {
  type = ActionTypes.SEARCH_ARCHIVED_CASE_FILE;

  constructor(public payload: any) {
  }
}


export class SearchArchivedCaseFileSuccessAction implements Action {

  type = ActionTypes.SEARCH_ARCHIVED_CASE_FILE_SUCCESS;

  constructor(public payload) {
  }
}


export class SearchArchivedCaseFileFailedAction implements Action {

  type = ActionTypes.SEARCH_ARCHIVED_CASE_FILE_FAILED;

  constructor(public payload) {
  }
}

export type Actions = SearchArchivedCaseFileAction | SearchArchivedCaseFileFailedAction | SearchArchivedCaseFileSuccessAction;
