import {Action} from '@ngrx/store';
import {type} from '../../../shared/utils';





export const ActionTypes = {
  SEARCH_JUDGES_HEARING_LIST_FILE: type('[SEARCH JUDGES HEARING LIST] Search case file'),
  SEARCH_JUDGES_HEARING_LIST_SUCCESS: type('[SEARCH JUDGES HEARING LIST] Search case file success'),
  SEARCH_JUDGES_HEARING_LIST_FAILED: type('[SEARCH JUDGES HEARING LIST] Search case file failed'),
};


export class JudgesHearingListFileAction implements Action {
  type = ActionTypes.SEARCH_JUDGES_HEARING_LIST_FILE;

  constructor(public payload: string) {
  }
}


export class JudgesHearingListFileSuccessAction implements Action {

  type = ActionTypes.SEARCH_JUDGES_HEARING_LIST_SUCCESS;

  constructor(public payload: any) {
  }
}


export class JudgesHearingListFileFailedAction implements Action {

  type = ActionTypes.SEARCH_JUDGES_HEARING_LIST_FAILED;

  constructor(public payload: any) {
  }
}


export type Actions = JudgesHearingListFileAction | JudgesHearingListFileSuccessAction | JudgesHearingListFileFailedAction ;
