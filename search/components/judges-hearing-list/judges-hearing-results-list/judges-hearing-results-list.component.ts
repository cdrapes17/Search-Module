import { DatatableComponent } from '@swimlane/ngx-datatable';
import {Router} from '@angular/router';
import { AfterViewInit, Component, Input, ViewEncapsulation, Output, EventEmitter, AfterViewChecked, ViewChild, ChangeDetectorRef } from '@angular/core';
import {Helpers} from '../../../../shared/helpers';
import {calculateLongestWidthColumn, changeDateFormat, convertCamelCaseToSpaces, findCorrespondingBodyCol, findTheLongestStringInSelectedColumn, mapHeaderElement, setDataIndexOnEachBodyColumn, setDataIndexOnEachHeaderColumn, setEachColumnToBeWidestWidth, toSentenceCase} from '../../../../shared/utils';
import {fromEvent} from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-judges-hearing-results-list',
  templateUrl: './judges-hearing-results-list.component.html',
  styleUrls: ['./judges-hearing-results-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JudgesHearingResultsListComponent implements AfterViewInit, AfterViewChecked {

  judgesHearingColumns = [
    {name: ' ', prop: 'icon'},
    {name: 'Case reference', prop: 'caseReference'},
    {name: 'Surname', prop: 'surname'},
    {name: 'Forename(s)', prop: 'forenames'},
    {name: 'Date of birth', prop: 'dateOfBirth'},
    {name: 'Courthouse', prop: 'courthouse'},
    {name: 'Courtroom', prop: 'courtroom'},
    {name: 'Hearing date', prop: 'courtHearingDate'},
    {name: 'Time', prop: 'courtHearingTime'},
    {name: ' ', prop: 'favIcon'},
  ];
  JudgesHearingSort: any[] = [
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
  judgesHearings = [];
  @Input()
  query = '';
  @Input()
  error;
  @Input()
  loading = false;
  @Output()
  addToMyCasesEmitter = new EventEmitter;
  colHeader$
  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;

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

  onActivate(event) {
    if (event.type === 'click' && (event.column.prop === 'icon' || event.column.prop === 'favIcon')) {
      const nodeId = event.row.nodeId;
      const caseFile = event.row;
      const href = event.row._links.mycases.href;
      event.column.prop === 'icon' ? this.router.navigate([`/case-file/${nodeId}`]) : this.addToMyCasesEmitter.emit(caseFile);
    }
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
