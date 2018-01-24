import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CourtSession} from '../../../shared/models/court-session.model';
import {AtLeastOneFieldValidator, convertDateToAlfrescoFormat, convertObjectToQueryParams, convertParamsToObject, convertToDateObject, isValidDateFormat, mapParamsKeysToFormControls, matches, stringToBoolean, triggerClick} from '../../../shared/utils';
import {Helpers} from '../../../shared/helpers';
import {CourtHouse} from '../../../shared/models/courthouse.model';
import {IMyDpOptions} from 'mydatepicker';
import {fromEvent} from 'rxjs/observable/fromEvent';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-court-session',
  templateUrl: './court-session.component.html',
  styleUrls: ['./court-session.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourtSessionComponent implements OnInit, OnDestroy, AfterViewInit {

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  courtHouses$: Observable<CourtHouse[]>;
  courtRooms$: Observable<string[]>;
  courtSessions$: Observable<CourtSession[]>;
  loading$: Observable<boolean>;
  error$: Observable<{}>;
  query$: Observable<string>;
  querySubscription$;
  courtSessionsEntitiesSubscription$;
  initialSearchSubscription$;
  datePickerInputSubscription$;
  datePickerInput$;
  @ViewChild('target') target: ElementRef;
  @ViewChild('focusedElement') courthouseFocused: ElementRef;
  submitted = false;
  reset$ = false;
  public SearchCourtSessionsForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private searchService: SearchService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.courtHouses$ = this.searchService.getCourtHousesEntities();
    this.courtRooms$ = this.searchService.getCourtRoomsEntities();

    this.SearchCourtSessionsForm = this._fb.group({
      courthouse: ['', []],
      courtroom: ['', []],
      date: ['', [isValidDateFormat]],
      time: ['', []]
    }, {
        validator: Validators.compose([AtLeastOneFieldValidator])
      });


    this.loading$ = this.searchService.getCourtSessionLoading();
    this.error$ = this.searchService.getCourtSessionError();
    this.query$ = this.searchService.getCourtSessionQuery();

    this.courtSessions$ = this.searchService.getCourtSessionEntities()
      .map(courtSessions => Helpers.map(Helpers.stringify(courtSessions), this.modifyCourtSessions));

    this.initialSearchSubscription$ = this.initialSearch();

    this.SearchCourtSessionsForm
      .valueChanges
      .subscribe(() => this.submitted = false);

    this.querySubscription$ = this.query$
      .map(query => convertParamsToObject(query))
      .takeWhile(params => params !== null)
      .subscribe(params => {
        params = Object.assign({}, params, {
          date: params.date ? params.date.split('-').reverse().join('/') : ''
        })
        this.SearchCourtSessionsForm = mapParamsKeysToFormControls(params, this.SearchCourtSessionsForm);
      });
  }

  ngOnDestroy(): void {
    this.datePickerInputSubscription$.unsubscribe();
    this.querySubscription$.unsubscribe();
    this.initialSearchSubscription$.unsubscribe();
  }

  searchCourtSessions(payload, isValid: boolean) {
    this.SearchCourtSessionsForm.markAsTouched();
    this.submitted = true;
    if (isValid) {
      payload = {
        ...payload, ...{
          date: convertDateToAlfrescoFormat(payload.date.formatted || payload.date)
        }
      }
      this.searchService.doSearchCourtSessions(convertObjectToQueryParams(payload));
    }
  }

  initialSearch() {
    return this.route.queryParams
      .combineLatest(this.courtSessions$)
      .take(1)
      .takeWhile(([params, courtSessions]) => Object.keys(params).length >= 1 && courtSessions.length !== 1)
      .do(([params]) => this.SearchCourtSessionsForm = mapParamsKeysToFormControls(params, this.SearchCourtSessionsForm))
      .debounceTime(50)
      .subscribe(() => triggerClick(this.target))
  }

  modifyCourtSessions = (courtSession: CourtSession) => {
    const isActive = stringToBoolean(courtSession.activeStatus)
    return {
      ...courtSession, ...{
        activeStatus: isActive ? 'Yes' : 'No',
        date: convertToDateObject(courtSession.date),
        icon: '<i class="fa fa-gavel" title="Open court session" aria-hidden="true"></i>'
      }
    }
  };

  convert(query) {
    return convertParamsToObject(query, []);
  }

  reset() {
    this.submitted = false;
    this.SearchCourtSessionsForm.controls['courthouse'].setValue('');
    this.SearchCourtSessionsForm.controls['courtroom'].setValue('');
    this.SearchCourtSessionsForm.controls['date'].setValue('');
    this.SearchCourtSessionsForm.controls['time'].setValue('');
    this.searchService.doSearchCourtSessions('');
    this.reset$ = false;
    setTimeout(() => this.submitted = false, 0);
  }

  ngAfterViewInit(): void {
    this.datePickerInput$ = fromEvent(document.getElementsByClassName('selection')[0], 'input');
    this.datePickerInputSubscription$ = this.datePickerInput$
      .distinctUntilChanged()
      .map((event: Event) => event.target['value'])
      .filter(value => value === '' || matches(value, /^[0-9]{2,2}\/[0-9]{2,2}\/\d{4,4}$/))
      .subscribe(value => this.SearchCourtSessionsForm.controls['date'].setValue(value));
    document.getElementsByClassName('selection')[0].setAttribute('tabindex', '620');
    this.courthouseFocused.nativeElement.focus();
  }

}
