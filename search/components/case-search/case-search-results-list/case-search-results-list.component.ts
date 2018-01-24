import { DatatableComponent } from '@swimlane/ngx-datatable';
import {partial} from 'lodash/fp';
import {CaseFileDocument} from 'app/shared/models/document.model';
import {Helpers} from './../../../../shared/helpers';
import {CaseFile} from 'app/shared/models/casefile.model';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';
import {checkCaseFileNotLinkedToDocument, getRowClass, isLinkedDocumentInCaseFile} from 'app/shared/utils';
import {calculateLongestWidthColumn, changeDateFormat, convertCamelCaseToSpaces, findCorrespondingBodyCol, findTheLongestStringInSelectedColumn, mapHeaderElement, setDataIndexOnEachBodyColumn, setDataIndexOnEachHeaderColumn, setEachColumnToBeWidestWidth, toSentenceCase} from '../../../../shared/utils';
import {fromEvent} from 'rxjs/observable/fromEvent';


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-case-search-results-list',
  templateUrl: './case-search-results-list.component.html',
  styleUrls: ['./case-search-results-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ResultsListComponent implements AfterViewInit, AfterViewChecked {


  columns = [
    {name: ' ', prop: 'icon'},
    {name: 'Case reference', prop: 'caseReference'},
    {name: 'Surname', prop: 'surname'},
    {name: 'Forename(s)', prop: 'forenames'},
    {name: 'Date of birth', prop: 'dateOfBirth'},
    {name: ' ', prop: 'favIcon'},
  ];
  public partial = Helpers.partial;

  // selectionType can now be varied
  linking = false;
  selectionType = 'single';
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

  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;
  @Input() caseFiles = [];
  @Input() error;
  @Input() query = '';
  @Input() loading = false;
  @Input() linkedDocuments: CaseFileDocument[] = [];
  @Input() caseFileToLink: CaseFile = null;
  @Input() openCaseFiles: CaseFile[] = [];
  @Output() caseFilesToLinkToDocumentsEmitter = new EventEmitter;
  @Output() addToMyCasesEmitter = new EventEmitter;

  selected = [];
  colHeader$;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
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
      // pluck
      const nodeId = event.row.nodeId;
      const caseFile = event.row;
      const href = event.row._links.mycases.href;
      event.column.prop === 'icon' ? this.router.navigate([`/case-file/${nodeId}`]) : this.addToMyCasesEmitter.emit(caseFile);
    }
  }

  checkActiveCaseFileNotLinkedToDocument(linkedDocuments, event) {
    return checkCaseFileNotLinkedToDocument(linkedDocuments, event);
  }

  getActiveCaseFileRowClass(linkedDocuments, isLinkedDocumentInCaseFile, row) {
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
