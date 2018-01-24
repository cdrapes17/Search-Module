import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, AfterViewChecked, ViewChild, ChangeDetectorRef } from '@angular/core';
import {partial} from 'lodash/fp';
import {Router} from '@angular/router';
import {changeDateFormat, checkCaseFileNotLinkedToDocument, convertCamelCaseToSpaces, getRowClass, isLinkedDocumentInCaseFile, mapHeaderElement, setDataIndexOnEachBodyColumn, setDataIndexOnEachHeaderColumn, toSentenceCase} from 'app/shared/utils';
import {CaseFileDocument} from 'app/shared/models/document.model';
import {CaseFile} from 'app/shared/models/casefile.model';
import {Helpers} from 'app/shared/helpers';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {calculateLongestWidthColumn, findCorrespondingBodyCol, findTheLongestStringInSelectedColumn, setEachColumnToBeWidestWidth} from '../../../../shared/utils';

@Component({
  selector: 'app-archived-case-file-results-list',
  templateUrl: './archived-case-file-results-list.component.html',
  styleUrls: ['./archived-case-file-results-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArchivedCaseFileResultsListComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public partial = Helpers.partial;

  columns = [
    {name: ' ', prop: 'icon'},
    {name: 'Case reference', prop: 'caseReference'},
    {name: 'Surname', prop: 'surname'},
    {name: 'Forename(s)', prop: 'forenames'},
    {name: 'Date of birth', prop: 'dateOfBirth'},
    {name: 'Commencement date', prop: 'commenceDate'},
    {name: 'Retention', prop: 'retPeriod'},
    {name: ' ', prop: 'favIcon'},
  ];
  sorts: any[] = [
    {
      prop: 'surname',
      dir: 'asc'
    },
    {
      prop: 'forenames',
      dir: 'asc'
    }
  ];
  @Input()
  archivedCaseFiles = [];
  @Input()
  query = {};
  @Input()
  error = {};
  @Input()
  loading = false;
  @Input()
  linkedDocuments: CaseFileDocument[] = [];
  @Input()
  caseFileToLink: CaseFile = null;
  @Input()
  openCaseFiles: CaseFile[] = [];
  @Output()
  caseFilesToLinkToDocumentsEmitter = new EventEmitter;
  @Output()
  addToMyCasesEmitter = new EventEmitter;
  selected = [];

  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;

  colHeader$;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {

    /*this.colHeader$ = fromEvent(
      document.querySelector('body'),
      'dblclick',
      e => ({event: e, delegate: e.target.closest( '.datatable-header .datatable-header-cell .resize-handle')})
    )
      .filter(({event, delegate}) => delegate !== null)
      .pluck('delegate')
      .do(setDataIndexOnEachHeaderColumn)
      .do(setDataIndexOnEachBodyColumn)
      .map(mapHeaderElement)
      .map(findCorrespondingBodyCol)
      .map(findTheLongestStringInSelectedColumn)
      .map(calculateLongestWidthColumn)
      .do(setEachColumnToBeWidestWidth)
      .subscribe()*/
  }

  onSelect({selected}) {
    if (this.linkedDocuments.length > 0) {
      this.caseFilesToLinkToDocumentsEmitter.emit(selected)
    }
  }

  onActivate(event) {
    if (event.type === 'click' && (event.column.prop === 'icon' || event.column.prop === 'favIcon')) {
      const nodeId = event.row.nodeId;
      const caseFile = event.row;
      const href = event.row._links.mycases.href;
      event.column.prop === 'icon' ? this.router.navigate([`/case-file/${nodeId}`]) : this.addToMyCasesEmitter.emit(caseFile);
    }
  }

  checkArchivedCaseFileNotLinkedToDocument(linkedDocuments, event) {
    return checkCaseFileNotLinkedToDocument(linkedDocuments, event);
  }

  getArchivedCaseFileRowClass(linkedDocuments, isLinkedDocumentInCaseFile, row) {
    return getRowClass(linkedDocuments, isLinkedDocumentInCaseFile, row);
  }

  isLinkedDocumentInCaseFile(linkedDocuments: CaseFileDocument[], row) {
    return isLinkedDocumentInCaseFile(linkedDocuments, row);
  }

  convertKey(key) {
    return Helpers.compose(toSentenceCase, convertCamelCaseToSpaces)(key)
  }

  convertValue(value) {
    if (Helpers.includes(value, '-')) {
      return changeDateFormat(value)
    }
    return value
  }

  ngAfterViewChecked() {
    // Check if the table size has changed,
    if (this.table && this.table.recalculate && (this.tableWrapper.nativeElement.clientWidth !== this.currentComponentWidth)) {
      this.currentComponentWidth = this.tableWrapper.nativeElement.clientWidth;
      this.table.recalculate();
      this.changeDetectorRef.detectChanges();
    }
  }

}
