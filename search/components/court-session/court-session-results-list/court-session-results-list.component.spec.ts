import { AuthModule } from './../../../../auth/auth.module';

import { CaseFileService } from './../../../../case-file/services/case-file.service';
import { CourtSessionService } from './../../../../court-session/services/court-session.service';
import { HttpService } from './../../../../shared/services/http.service';
import { SearchService } from './../../../services/search.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourtSessionResultsListComponent} from './court-session-results-list.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PipesModule} from '../../../../shared/pipes/pipes.module';
import {AppRoutingModule} from '../../../../app-routing.module';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import { CoreModule } from 'app/core.module';

describe('CourtSessionResultsListComponent', () => {
  let component: CourtSessionResultsListComponent;
  let fixture: ComponentFixture<CourtSessionResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxDatatableModule,
        AppRoutingModule,
        SharedModule,
        PipesModule,
        CoreModule,
        CommonModule,
        AuthModule,
        CoreModule.provideStoreModule(),
      ],
      declarations: [
        CourtSessionResultsListComponent,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        SearchService,
        HttpService,
        CourtSessionService,
        CaseFileService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtSessionResultsListComponent);
    component = fixture.componentInstance;
    component.courtSessions = [
      {
        'courthouse': 'Aberystwyth Youth Court',
        'courtroom': '3',
        'date': '2017-12-03T00:00:00.000Z',
        'time': 'All Day',
        'activeStatus': false,
        'activatedPreviously': true,
        'activatedBy': '',
        'nodeId': '5974dc84-6b77-476d-ae34-6fc85d3df5f9',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/5974dc84-6b77-476d-ae34-6fc85d3df5f9',
            'methods': [
              'GET'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/5974dc84-6b77-476d-ae34-6fc85d3df5f9/documents',
            'methods': [
              'GET'
            ]
          },
          'activate': {
            'rel': 'activate',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/5974dc84-6b77-476d-ae34-6fc85d3df5f9/activate',
            'methods': [
              'PATCH'
            ]
          },
          'share': {
            'rel': 'share',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
            'methods': [
              'POST'
            ]
          }
        },
      },
      {
        'courthouse': 'Aberystwyth Youth Court',
        'courtroom': '43',
        'date': '2017-12-01T00:00:00.000Z',
        'time': 'All Day',
        'activeStatus': false,
        'activatedPreviously': true,
        'activatedBy': '',
        'nodeId': '92949ab0-c37b-42e5-b1ac-c917388283ac',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/92949ab0-c37b-42e5-b1ac-c917388283ac',
            'methods': [
              'GET'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/92949ab0-c37b-42e5-b1ac-c917388283ac/documents',
            'methods': [
              'GET'
            ]
          },
          'activate': {
            'rel': 'activate',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/92949ab0-c37b-42e5-b1ac-c917388283ac/activate',
            'methods': [
              'PATCH'
            ]
          },
          'share': {
            'rel': 'share',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
            'methods': [
              'POST'
            ]
          }
        },
      },
      {
        'courthouse': 'Aberystwyth Youth Court',
        'courtroom': '3',
        'date': '2017-11-15T00:00:00.000Z',
        'time': 'PM',
        'activeStatus': false,
        'activatedPreviously': false,
        'activatedBy': null,
        'nodeId': '37461e22-a388-40c6-9f15-83358e3431f8',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/37461e22-a388-40c6-9f15-83358e3431f8',
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/37461e22-a388-40c6-9f15-83358e3431f8/documents',
            'methods': [
              'GET',
              'POST'
            ]
          },
          'activate': {
            'rel': 'activate',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/37461e22-a388-40c6-9f15-83358e3431f8/activate',
            'methods': [
              'PATCH'
            ]
          },
          'share': {
            'rel': 'share',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
            'methods': [
              'POST'
            ]
          }
        },
      }
    ]
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
