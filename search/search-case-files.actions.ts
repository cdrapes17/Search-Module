import { Action } from '@ngrx/store';

import { type } from '../../../shared/utils';

export const ActionTypes = {
  SEARCH_CASE_FILES: type('[SEARCH CASE]  file'),
  SEARCH_CASE_FILES_SUCCESS: type('[SEARCH CASE] Search case file success'),
  SEARCH_CASE_FILE_FAILED: type('[SEARCH CASE] Search case file failed'),
  ADD_CASE_FILES_TO_BE_LINKED_TO_DOCUMENTS_TO_STORE: type('[Add Case Files To Store] Add case files to be linked to documents to store.')
};


export class SearchCaseFileAction implements Action {
  type = ActionTypes.SEARCH_CASE_FILES;

  constructor(public payload: string) {
  }
}


export class SearchCaseFilesSuccessAction implements Action {

  type = ActionTypes.SEARCH_CASE_FILES_SUCCESS;

  constructor(public payload: any) {
  }
}


export class SearchCaseFilesFailedAction implements Action {

  type = ActionTypes.SEARCH_CASE_FILE_FAILED;

  constructor(public payload) {
  }
}

export class AddCaseFilesToBeLinkedToDocumentsToStoreAction implements Action {
  type = ActionTypes.ADD_CASE_FILES_TO_BE_LINKED_TO_DOCUMENTS_TO_STORE;

  constructor(public payload) {
  }
}

export type Actions = SearchCaseFileAction | SearchCaseFilesFailedAction | SearchCaseFilesSuccessAction | AddCaseFilesToBeLinkedToDocumentsToStoreAction;
