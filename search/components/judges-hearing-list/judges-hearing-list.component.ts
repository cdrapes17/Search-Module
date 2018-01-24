import { MyCasesComponent } from './../../../my-cases/components/my-cases/my-cases.component';
import {Title} from '@angular/platform-browser';
import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AtLeastOneFieldValidator, convertDateToAlfrescoFormat, convertObjectToQueryParams, convertParamsToObject, convertToDateObject, isValidDateFormat, mapParamsKeysToFormControls, matches, triggerClick} from '../../../shared/utils';
import {SearchService} from '../../services/search.service';
import {JudgesHearingModel} from '../../../shared/models/judges-hearing.model';
import {Helpers} from '../../../shared/helpers';
import {environment} from 'environments/environment';
import {CourtHouse} from '../../../shared/models/courthouse.model';
import {IMyDpOptions} from 'mydatepicker';
import {fromEvent} from 'rxjs/observable/fromEvent';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/distinctUntilChanged';
import { MyCaseFilesService } from 'app/my-cases/services/my-cases.service';

@Component({
  selector: 'app-judges-hearing-list',
  templateUrl: './judges-hearing-list.component.html',
  styleUrls: ['./judges-hearing-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class JudgesHearingListComponent implements OnInit, OnDestroy, AfterViewInit {

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  judgesHearingLists$: Observable<JudgesHearingModel[]>;
  datePickerInput$;
  loading$: Observable<boolean>;
  error$: Observable<{}>;
  query$: Observable<string>;
  courtHouses$: Observable<CourtHouse[]>;
  courtRooms$: Observable<string[]>;
  querySubscription$;
  initialSearchSubscription$;
  datePickerInputSubscription$;
  @ViewChild('target') target: ElementRef;
  @ViewChild('focusedElement') courthouseFocused: ElementRef;
  submitted = false;
  reset$ = false;
  public HearingListForm: FormGroup;
  modifyJudgesHearingLists = (judgesHearingModel: JudgesHearingModel) => {
    return {
      ...judgesHearingModel, ...{
        courtHearingDate: convertToDateObject(judgesHearingModel.courtHearingDate),
        dateOfBirth: convertToDateObject(judgesHearingModel.dateOfBirth),
        icon: '<i class="fa fa-folder-open" title="Open case" aria-hidden="true"></i>',
        favIcon: '<i class="fa fa-star" title="Add case to favourites" aria-hidden="true"></i>',
      }
    }
  };
  constructor(private _fb: FormBuilder,
              private searchService: SearchService,
              private route: ActivatedRoute,
              private titleService: Title,
              private myCasesService: MyCaseFilesService) {
  }

  ngOnInit() {
    this.titleService.setTitle(environment.STORE_UI_SEARCH_JUDGES_HEARING_LIST);

    this.HearingListForm = this._fb.group({
      courthouse: [''],
      courtroom: [''],
      courtHearingDate: ['', [isValidDateFormat]],
      courtHearingTime: ['']
    }, {
      validator: AtLeastOneFieldValidator
    });
    this.HearingListForm
      .valueChanges
      .takeWhile(() => this.reset$ === false)
      .subscribe(() => this.submitted = false);
    this.loading$ = this.searchService.getJudgesHearingFileLoading();
    this.error$ = this.searchService.getJudgesHearingFileError();
    this.query$ = this.searchService.getJudgesHearingFileQuery();
    this.courtHouses$ = this.searchService.getCourtHousesEntities();
    this.courtRooms$ = this.searchService.getCourtRoomsEntities();
    this.judgesHearingLists$ = this.searchService.getJudgesHearingFileEntities()
      .map(judgesHearingLists => Helpers.map(Helpers.stringify(judgesHearingLists['results']), this.modifyJudgesHearingLists));
    this.initialSearchSubscription$ = this.initialSearch();
    this.querySubscription$ = this.query$
      .subscribe(query => {
        let params = convertParamsToObject(query);

        if (params !== null) {
          params = Object.assign({}, params, {
            courtHearingDate: params.courtHearingDate ? params.courtHearingDate.split('-').reverse().join('/') : ''
          });
          this.HearingListForm = mapParamsKeysToFormControls(params, this.HearingListForm);
        }
      });
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
    this.datePickerInputSubscription$.unsubscribe();
    this.initialSearchSubscription$.unsubscribe();
  }

  searchForJudgesHearingList(payload, isValid: boolean) {
    this.submitted = true;
    this.HearingListForm.markAsTouched();
    if (isValid) {
        payload = Object.assign({}, payload, {
          courtHearingDate: convertDateToAlfrescoFormat(payload.courtHearingDate.formatted || payload.courtHearingDate)
        })
      this.searchService.doSearchJudgesHearingFile(convertObjectToQueryParams(payload));
    }
  }

  initialSearch() {
    return this.route.queryParams
      .combineLatest(this.judgesHearingLists$)
      .take(1)
      .takeWhile(([params, judgesHearingLists]) => judgesHearingLists.length !== 1 && Object.keys(params).length >= 1)
      .do(([params]) => this.HearingListForm = mapParamsKeysToFormControls(params, this.HearingListForm))
      .subscribe(() => triggerClick(this.target))
  }

  addToMyCases(caseFile) {
    this.myCasesService.addToMyCases(caseFile);
  }

  convert(query) {
    return convertParamsToObject(query, []);
  }

  reset() {
    this.HearingListForm.controls['courthouse'].setValue('');
    this.HearingListForm.controls['courtroom'].setValue('');
    this.HearingListForm.controls['courtHearingDate'].setValue('');
    this.HearingListForm.controls['courtHearingTime'].setValue('');
    this.searchService.doSearchJudgesHearingFile('');
    this.reset$ = false;
    setTimeout(() => this.submitted = false, 0);
  }

  ngAfterViewInit(): void {
    this.datePickerInput$ = fromEvent(document.getElementsByClassName('selection')[0], 'input');
    this.datePickerInputSubscription$ = this.datePickerInput$
      .distinctUntilChanged()
      .map((event: Event) => event.target['value'])
      .filter(value => value === '' || matches(value, /^[0-9]{2,2}\/[0-9]{2,2}\/\d{4,4}$/))
      .subscribe(value => this.HearingListForm.controls['courtHearingDate'].setValue(value));
    document.getElementsByClassName('selection')[0].setAttribute('tabindex', '410');
    this.courthouseFocused.nativeElement.focus();
  }


}




