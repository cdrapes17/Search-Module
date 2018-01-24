import { CaseFileService } from './../../../case-file/services/case-file.service';
import { environment } from 'environments/environment';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SearchService } from 'app/search/services/search.service';
import { AtLeastOneFieldValidator, convertDateToAlfrescoFormat, convertObjectToQueryParams, convertParamsToObject, convertToDateObject, isValidDateFormat, mapParamsKeysToFormControls, matches, triggerClick, WildCardCheckMinLength, WildCardCheckValidator, WildcardNotUsedMoreThanOnce, WildLimitCheckValidator } from '../../../shared/utils';
import { CaseModel } from 'app/shared/models/search-results.model';
import { CaseFile } from 'app/shared/models/casefile.model';
import { Helpers } from '../../../shared/helpers';
import { IMyDpOptions } from 'mydatepicker';
import { fromEvent } from 'rxjs/observable/fromEvent';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/distinctUntilChanged';
import { MyCaseFilesService } from 'app/my-cases/services/my-cases.service';


@Component({
  selector: 'app-archived-case-file',
  templateUrl: './archived-case-file.component.html',
  styleUrls: ['./archived-case-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class ArchivedCaseFileComponent implements OnInit, OnDestroy, AfterViewInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  public ArchiveCaseForm: FormGroup;
  archivedCaseFiles$: Observable<CaseFile[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  querySubscription$;
  caseFileEntitiesSubscription$;
  initialSearchSubscription$;
  datePickerInputSubscription$;
  query$: Observable<string>;
  datePickerInput$;
  @ViewChild('target') target: ElementRef;
  @ViewChild('focusedElement') caseReferenceFocused: ElementRef;
  submitted = false;
  reset$ = false;

  linkedCaseFiles: CaseFile[];
  linkedDocuments$: Observable<Document[]>;
  linkedDocumentCaseFile$: Observable<CaseFile>;
  caseFileToLink$: Observable<CaseFile>;

  modifyArchivedCasesFiles = (caseFile: CaseFile) => {
    return {
      ...caseFile, ...{
        dateOfBirth: convertToDateObject(caseFile.dateOfBirth),
        commenceDate: convertToDateObject(caseFile.commenceDate),
        icon: '<i class="fa fa-folder-open" title="Open case" aria-hidden="true"></i>',
        favIcon: '<i class="fa fa-star" title="Add case to favourites" aria-hidden="true"></i>',
      }
    }
  };

  constructor(private _fb: FormBuilder,
    private searchService: SearchService,
    private _route: ActivatedRoute,
    private _router: Router,
    private titleService: Title,
    private caseFileService: CaseFileService,
    private myCasesService: MyCaseFilesService) {
  }

  ngOnInit() {
    this.titleService.setTitle(environment.STORE_UI_SEARCH_ARCHIVED_CASE_FILE);
    this.ArchiveCaseForm = this._fb.group({
      caseReference: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      surname: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      forename: ['', [WildCardCheckMinLength(), WildcardNotUsedMoreThanOnce()]],
      dateOfBirth: ['', [isValidDateFormat]],
      archived: [true],
    }, {
        validator: Validators.compose([AtLeastOneFieldValidator, WildCardCheckValidator, WildLimitCheckValidator])
      }
    );

    this.ArchiveCaseForm
      .valueChanges
      .takeWhile(() => this.reset$ === false)
      .subscribe(() => this.submitted = false);

    this.loading$ = this.searchService.getArchivedCaseFileLoading();
    this.error$ = this.searchService.getArchivedCaseFileError();
    this.query$ = this.searchService.getArchivedCaseFileQuery();
    this.archivedCaseFiles$ = this.searchService.getArchivedCaseFileEntities()
      .map(archivedCaseFiles => Helpers.map(Helpers.stringify(archivedCaseFiles['results']), this.modifyArchivedCasesFiles));
    this.initialSearchSubscription$ = this.initialSearch();
    this.querySubscription$ = this.query$
      .subscribe(query => {
        let params = convertParamsToObject(query);

        if (params !== null) {
          params = Object.assign({}, params, {
            dateOfBirth: params.dateOfBirth ? params.dateOfBirth.split('-').reverse().join('/') : ''
          });
          this.ArchiveCaseForm = mapParamsKeysToFormControls(params, this.ArchiveCaseForm);
        }
      });

    this.linkedDocuments$ = this.caseFileService.getLinkedDocumentsToMove();
    this.linkedDocumentCaseFile$ = this.caseFileService.getCaseFilesFromStore();
    this.caseFileToLink$ = this.caseFileService.getCaseFileToLinkFromStore();
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
    this.datePickerInputSubscription$.unsubscribe();
    this.initialSearchSubscription$.unsubscribe();
  }

  addToMyCases(caseFile) {
    this.myCasesService.addToMyCases(caseFile);
  }

  sendCaseFilesToBeLinkedToDocumentsToStore(caseFiles: CaseFile[]) {
    this.caseFileService.putCaseFilesToBeLinkedToDocumentsInStore(caseFiles)
  }

  searchForArchivedCases(payload, isValid: boolean) {
    this.ArchiveCaseForm.markAsTouched();
    this.submitted = true;
    if (isValid) {
      payload = {
        ...payload, ...{
          dateOfBirth: convertDateToAlfrescoFormat(payload.dateOfBirth.formatted || payload.dateOfBirth)
        }
      }
      this.searchService.doArchivedSearchCaseFiles(convertObjectToQueryParams(payload));
    }
  }

  initialSearch() {
    return this._route.queryParams
      .combineLatest(this.archivedCaseFiles$)
      .take(1)
      .takeWhile(([params, archivedCaseFiles]) => archivedCaseFiles.length !== 1 && params.hasOwnProperty('archived'))
      .do(([params]) => this.ArchiveCaseForm = mapParamsKeysToFormControls(params, this.ArchiveCaseForm))
      .debounceTime(50)
      .subscribe(() => triggerClick(this.target))
  }

  convert(query) {
    return convertParamsToObject(query, ['archived', ' ']);
  }

  reset() {
    this.submitted = false;
    this.ArchiveCaseForm.controls['caseReference'].setValue('');
    this.ArchiveCaseForm.controls['surname'].setValue('');
    this.ArchiveCaseForm.controls['dateOfBirth'].setValue('');
    this.ArchiveCaseForm.controls['forename'].setValue('');
    this.searchService.doArchivedSearchCaseFiles('');
    this.reset$ = false;
    setTimeout(() => this.submitted = false, 0);
  }

  ngAfterViewInit(): void {

    this.datePickerInput$ = fromEvent(document.getElementsByClassName('selection')[0], 'input');
    this.datePickerInputSubscription$ = this.datePickerInput$
      .distinctUntilChanged()
      .map((event: Event) => event.target['value'])
      .filter(value => value === '' || matches(value, /^[0-9]{2,2}\/[0-9]{2,2}\/\d{4,4}$/))
      .subscribe(value => this.ArchiveCaseForm.controls['dateOfBirth'].setValue(value));
    document.getElementsByClassName('selection')[0].setAttribute('tabindex', '520');
    this.caseReferenceFocused.nativeElement.focus();
  }


}
