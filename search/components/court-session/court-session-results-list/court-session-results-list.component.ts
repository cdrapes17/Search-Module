import { DatatableComponent } from '@swimlane/ngx-datatable';
import {Router} from '@angular/router';
import {AfterViewInit, Component, Input, ViewEncapsulation, AfterViewChecked, ChangeDetectorRef, ViewChild} from '@angular/core';
import {CourtSession} from '../../../../shared/models/court-session.model';
import {Helpers} from '../../../../shared/helpers';
import {calculateLongestWidthColumn, changeDateFormat, convertCamelCaseToSpaces, findCorrespondingBodyCol, findTheLongestStringInSelectedColumn, mapHeaderElement, setDataIndexOnEachBodyColumn, setDataIndexOnEachHeaderColumn, setEachColumnToBeWidestWidth, toSentenceCase} from '../../../../shared/utils';
import {fromEvent} from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-court-session-results-list',
  templateUrl: './court-session-results-list.component.html',
  styleUrls: ['./court-session-results-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourtSessionResultsListComponent implements AfterViewInit, AfterViewChecked {

  courtSessionColumns = [
    {name: ' ', prop: 'icon'},
    {name: 'Courthouse', prop: 'courthouse'},
    {name: 'Courtroom', prop: 'courtroom'},
    {name: 'Date', prop: 'date'},
    {name: 'Time', prop: 'time'},
    {name: 'Activated', prop: 'activeStatus'}
  ];
  courtSessionSort: any[] = [
    {prop: 'date', dir: 'asc'},
    {prop: 'courtroom', dir: 'asc'},
  ];
  @Input() courtSessions: CourtSession[] = [];
  @Input() query = '';
  @Input() loading = false;
  @Input() error;

  colHeader$;
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
    if (event.type === 'click' && event.column.prop === 'icon') {
      const nodeRef = event.row.nodeId;
      return this.router.navigate([`/court-session/${nodeRef}`]);
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
