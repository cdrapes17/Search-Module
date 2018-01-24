import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {SearchService} from '../../services/search.service';
import {CaseFileService} from './../../../case-file/services/case-file.service';

import {IMyDpOptions} from 'mydatepicker';
import {Helpers} from '../../../shared/helpers';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {environment} from 'environments/environment';
import {CaseFile} from '../../../shared/models/casefile.model';
import {AtLeastOneFieldValidator, convertDateToAlfrescoFormat, convertObjectToQueryParams, convertParamsToObject, convertToDateObject, isValidDateFormat, mapParamsKeysToFormControls, matches, triggerClick, WildCardCheckMinLength, WildCardCheckValidator, WildcardNotUsedMoreThanOnce, WildLimitCheckValidator} from '../../../shared/utils';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/distinctUntilChanged';
import {MyCaseFilesService} from 'app/my-cases/services/my-cases.service';


@Component({
  selector: 'app-case-search-form',
  templateUrl: './case-search.component.html',
  styleUrls: ['./case-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SearchCaseFilesComponent implements OnInit, OnDestroy, AfterViewInit {

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  loading$: Observable<boolean>;
  error$: Observable<{}>;
  query$: Observable<string>;
  querySubscription$;
  searchCaseFilesFormSubscription$;
  initialSearchSubscription$;
  datePickerInputSubscription$;
  datePickerInput$;
  @ViewChild('target') target: ElementRef;
  @ViewChild('focusedElement') caseReferenceFocused: ElementRef;
  submitted = false;
  reset$ = false;

  linkedCaseFiles: CaseFile[];
  linkedDocuments$: Observable<Document[]>;
  linkedDocumentCaseFile$: Observable<CaseFile>;
  caseFileToLink$: Observable<CaseFile>;
  caseFiles$

  public SearchCaseFilesForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private searchService: SearchService,
              private route: ActivatedRoute,
              private titleService: Title,
              private caseFileService: CaseFileService,
              private myCasesService: MyCaseFilesService) {
  }

  modifyCaseFiles = (caseFile: CaseFile) => {
    return {
      ...caseFile, ...{
        dateOfBirth: convertToDateObject(caseFile.dateOfBirth),
        icon: '<i class="fa fa-folder-open" title="Open case" aria-hidden="true"></i>',
        favIcon: '<i class="fa fa-star" title="Add case to favourites" aria-hidden="true"></i>',
      }
    }
  };

  ngOnInit() {
    this.titleService.setTitle(environment.STORE_UI_SEARCH_CASE_FILE);

    this.SearchCaseFilesForm = this._fb.group({
      caseReference: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      surname: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      forename: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      dateOfBirth: ['', [isValidDateFormat]],
      archived: [false]
    }, {
      validator: Validators.compose([AtLeastOneFieldValidator, WildCardCheckValidator, WildLimitCheckValidator])
    });


    this.searchCaseFilesFormSubscription$ = this.SearchCaseFilesForm
      .valueChanges
      .takeWhile(() => this.reset$ === false)
      .subscribe(() => this.submitted = false);

    this.loading$ = this.searchService.getCaseFileLoading();
    this.error$ = this.searchService.getCaseFileError();
    this.query$ = this.searchService.getCaseFileQuery();
    this.caseFiles$ = this.searchService.getCaseFileEntities()
      .map(caseFiles => Helpers.map(Helpers.stringify(caseFiles['results']), this.modifyCaseFiles))


    this.initialSearchSubscription$ = this.initialSearch();

    this.querySubscription$ = this.query$
      .map(query => convertParamsToObject(query))
      .takeWhile(params => params !== null)
      .subscribe(params => {
        params = Object.assign({}, params, {
          dateOfBirth: params.dateOfBirth ? params.dateOfBirth.split('-').reverse().join('/') : ''
        })
        this.SearchCaseFilesForm = mapParamsKeysToFormControls(params, this.SearchCaseFilesForm);
      });

    this.linkedDocuments$ = this.caseFileService.getLinkedDocumentsToMove();
    this.linkedDocumentCaseFile$ = this.caseFileService.getCaseFilesFromStore();
    this.caseFileToLink$ = this.caseFileService.getCaseFileToLinkFromStore();
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
    this.datePickerInputSubscription$.unsubscribe();
    this.initialSearchSubscription$.unsubscribe();
    this.searchCaseFilesFormSubscription$.unsubscribe();
  }

  sendCaseFilesToBeLinkedToDocumentsToStore(caseFiles: CaseFile[]) {
    this.caseFileService.putCaseFilesToBeLinkedToDocumentsInStore(caseFiles)
  }

  addToMyCases(caseFile) {
    this.myCasesService.addToMyCases(caseFile);
  }

  searchForCases(payload, isValid: boolean) {
    this.submitted = true;
    this.SearchCaseFilesForm.markAsTouched()
    if (isValid) {
      payload = {
        ...payload, ...{
          dateOfBirth: convertDateToAlfrescoFormat(payload.dateOfBirth.formatted || payload.dateOfBirth)
        }
      }
      this.searchService.doSearchCaseFiles(convertObjectToQueryParams(payload));
    }
  }

  initialSearch() {
    return this.route.queryParams
      .combineLatest(this.caseFiles$)
      .take(1)
      .takeWhile(([params, caseFiles]) => caseFiles.length !== 1 && params.hasOwnProperty('archived'))
      .do(([params, caseFiles]) => this.SearchCaseFilesForm = mapParamsKeysToFormControls(params, this.SearchCaseFilesForm))
      .debounceTime(50)
      .subscribe(() => triggerClick(this.target))
  }

  convert(query) {
    return convertParamsToObject(query, ['archived', ' ']);
  }

  reset() {
    this.submitted = false;
    this.SearchCaseFilesForm.controls['surname'].setValue('');
    this.SearchCaseFilesForm.controls['forename'].setValue('');
    this.SearchCaseFilesForm.controls['dateOfBirth'].setValue('');
    this.SearchCaseFilesForm.controls['caseReference'].setValue('');
    this.searchService.doSearchCaseFiles('');
    this.reset$ = false;
    setTimeout(() => this.submitted = false, 0);
  }

  ngAfterViewInit(): void {
    this.datePickerInput$ = fromEvent(document.getElementsByClassName('selection')[0], 'input');
    this.datePickerInputSubscription$ = this.datePickerInput$
      .distinctUntilChanged()
      .map((event: Event) => event.target['value'])
      .filter(value => value === '' || matches(value, /^[0-9]{2,2}\/[0-9]{2,2}\/\d{4,4}$/))
      .subscribe(value => this.SearchCaseFilesForm.controls['dateOfBirth'].setValue(value));
    document.getElementsByClassName('selection')[0].setAttribute('tabindex', '280');
    this.caseReferenceFocused.nativeElement.focus();
  }
}
