import { HttpService } from './../../../../shared/services/http.service';
import { CourtSessionService } from './../../../../court-session/services/court-session.service';
import { CaseFileService } from './../../../../case-file/services/case-file.service';
import { SearchService } from './../../../services/search.service';
import { AuthModule } from './../../../../auth/auth.module';
import { CoreModule } from './../../../../core.module';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultsListComponent} from './case-search-results-list.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PipesModule} from '../../../../shared/pipes/pipes.module';
import {AppRoutingModule} from '../../../../app-routing.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxDatatableModule,
        PipesModule,
        SharedModule,
        AppRoutingModule,
        CoreModule,
        CommonModule,
        AuthModule,
        CoreModule.provideStoreModule(),
      ],
      declarations: [
        ResultsListComponent
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
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    component.caseFiles = [
      {
        'caseReference': '12346699999',
        'surname': 'Spinks',
        'forenames': 'Paul',
        'dateOfBirth': '2019-10-13',
        'courtHouse': 'Bodmin Magistrates\' Court',
        'archiveStatus': 'Live',
        'commenceDate': null,
        'retPeriod': '',
        'nodeId': '58a24e52-7943-42b5-b17f-62b49a4a39e9',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/58a24e52-7943-42b5-b17f-62b49a4a39e9',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/58a24e52-7943-42b5-b17f-62b49a4a39e9/documents',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'archive': {
            'rel': 'archive',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/58a24e52-7943-42b5-b17f-62b49a4a39e9/archive',
            'media': null,
            'methods': [
              'PUT'
            ]
          },
          'hearings': {
            'rel': 'hearings',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/58a24e52-7943-42b5-b17f-62b49a4a39e9/hearings',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'associations': {
            'rel': 'associations',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/58a24e52-7943-42b5-b17f-62b49a4a39e9/associations',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'mycases': {
            'rel': 'mycases',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/mycases/58a24e52-7943-42b5-b17f-62b49a4a39e9',
            'media': null,
            'methods': [
              'POST',
              'DELETE'
            ]
          }
        }
      },
      {
        'caseReference': '1234_hyder',
        'surname': 'spinks',
        'forenames': 'paul',
        'dateOfBirth': null,
        'courtHouse': 'AIT Asylum and Immigration Tribunal Hearing Centre',
        'archiveStatus': 'Live',
        'commenceDate': null,
        'retPeriod': '',
        'nodeId': '6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea/documents',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'archive': {
            'rel': 'archive',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea/archive',
            'media': null,
            'methods': [
              'PUT'
            ]
          },
          'hearings': {
            'rel': 'hearings',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea/hearings',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'associations': {
            'rel': 'associations',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea/associations',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'mycases': {
            'rel': 'mycases',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/mycases/6bff93cf-865b-4f4c-8f03-0ae4d2bb75ea',
            'media': null,
            'methods': [
              'POST',
              'DELETE'
            ]
          }
        }
      },
      {
        'caseReference': '1234454566',
        'surname': 'Spinks',
        'forenames': 'Paul',
        'dateOfBirth': '1970-01-23',
        'courtHouse': 'Birmingham Magistrates\' Court',
        'archiveStatus': 'Live',
        'commenceDate': null,
        'retPeriod': '',
        'nodeId': '5f65a8d2-3cda-4788-b2a2-68633d69e45e',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/5f65a8d2-3cda-4788-b2a2-68633d69e45e',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/5f65a8d2-3cda-4788-b2a2-68633d69e45e/documents',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'archive': {
            'rel': 'archive',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/5f65a8d2-3cda-4788-b2a2-68633d69e45e/archive',
            'media': null,
            'methods': [
              'PUT'
            ]
          },
          'hearings': {
            'rel': 'hearings',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/5f65a8d2-3cda-4788-b2a2-68633d69e45e/hearings',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'associations': {
            'rel': 'associations',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/5f65a8d2-3cda-4788-b2a2-68633d69e45e/associations',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'mycases': {
            'rel': 'mycases',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/mycases/5f65a8d2-3cda-4788-b2a2-68633d69e45e',
            'media': null,
            'methods': [
              'POST',
              'DELETE'
            ]
          }
        }
      },
      {
        'caseReference': '10ABC123TestgHyderBaby',
        'surname': 'Spinks',
        'forenames': 'BigKuda',
        'dateOfBirth': '1989-01-30',
        'courtHouse': 'Birmingham Magistrates\' Court',
        'archiveStatus': 'Live',
        'commenceDate': null,
        'retPeriod': '',
        'nodeId': '42b22183-cb6e-4009-8f15-0475eaff413e',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/42b22183-cb6e-4009-8f15-0475eaff413e',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/42b22183-cb6e-4009-8f15-0475eaff413e/documents',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'archive': {
            'rel': 'archive',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/42b22183-cb6e-4009-8f15-0475eaff413e/archive',
            'media': null,
            'methods': [
              'PUT'
            ]
          },
          'hearings': {
            'rel': 'hearings',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/42b22183-cb6e-4009-8f15-0475eaff413e/hearings',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'associations': {
            'rel': 'associations',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/42b22183-cb6e-4009-8f15-0475eaff413e/associations',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'mycases': {
            'rel': 'mycases',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/mycases/42b22183-cb6e-4009-8f15-0475eaff413e',
            'media': null,
            'methods': [
              'POST',
              'DELETE'
            ]
          }
        },
        'documents': {
          'entities': {
            'hasMoreItems': false,
            'numItems': 0,
            'results': [
              {
                'fileName': 'RACI_Print.pdf',
                'receivedDate': '2017-04-12',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3 years',
                'nodeId': '36efcfc6-7639-44d9-be1c-a816ce25bc84',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/36efcfc6-7639-44d9-be1c-a816ce25bc84',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/36efcfc6-7639-44d9-be1c-a816ce25bc84/download/RACI_Print.pdf',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/36efcfc6-7639-44d9-be1c-a816ce25bc84/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/36efcfc6-7639-44d9-be1c-a816ce25bc84/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'CALLOW and LIFW 45GD5445614 Initial Details Pros Case 13-04-2016.pdf',
                'receivedDate': '2017-04-28',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3',
                'nodeId': '21b68b98-9e3a-4e98-80cb-cf9d31164eb4',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/21b68b98-9e3a-4e98-80cb-cf9d31164eb4',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/21b68b98-9e3a-4e98-80cb-cf9d31164eb4/download/CALLOW%20and%20LIFW%2045GD5445614%20Initial%20Details%20Pros%20Case%2013-04-2016.pdf',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/21b68b98-9e3a-4e98-80cb-cf9d31164eb4/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/21b68b98-9e3a-4e98-80cb-cf9d31164eb4/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test - File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': 'e68957e7-adea-4fde-bb3d-70babccb0a44',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e68957e7-adea-4fde-bb3d-70babccb0a44',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e68957e7-adea-4fde-bb3d-70babccb0a44/download/Test%20-%20File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e68957e7-adea-4fde-bb3d-70babccb0a44/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test & File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '18080db2-a81a-4c41-b876-7112eb31dec3',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/18080db2-a81a-4c41-b876-7112eb31dec3',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/18080db2-a81a-4c41-b876-7112eb31dec3/download/Test%20&%20File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/18080db2-a81a-4c41-b876-7112eb31dec3/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test.File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '29b6785f-2ac1-4055-b4f5-7cd769c1bbf3',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/29b6785f-2ac1-4055-b4f5-7cd769c1bbf3',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/29b6785f-2ac1-4055-b4f5-7cd769c1bbf3/download/Test.File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/29b6785f-2ac1-4055-b4f5-7cd769c1bbf3/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test;File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '9e9c3919-1de4-42ec-b15b-ddb01feb0473',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9e9c3919-1de4-42ec-b15b-ddb01feb0473',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9e9c3919-1de4-42ec-b15b-ddb01feb0473/download/Test;File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9e9c3919-1de4-42ec-b15b-ddb01feb0473/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test@File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': 'd9cdbee2-60b6-4255-9b04-3c12b65ff65e',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/d9cdbee2-60b6-4255-9b04-3c12b65ff65e',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/d9cdbee2-60b6-4255-9b04-3c12b65ff65e/download/Test@File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/d9cdbee2-60b6-4255-9b04-3c12b65ff65e/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test[]File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': 'e42fec39-d8aa-4ce4-916e-ee2fafb75e6c',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e42fec39-d8aa-4ce4-916e-ee2fafb75e6c',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e42fec39-d8aa-4ce4-916e-ee2fafb75e6c/download/Test%5B%5DFile.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/e42fec39-d8aa-4ce4-916e-ee2fafb75e6c/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test^File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': 'fec0080d-41ec-44cb-ba2e-67344880dcef',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/fec0080d-41ec-44cb-ba2e-67344880dcef',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/fec0080d-41ec-44cb-ba2e-67344880dcef/download/Test%5EFile.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/fec0080d-41ec-44cb-ba2e-67344880dcef/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test{}File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': 'c130b627-2a95-4e2a-aa65-c7845d12fa6a',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/c130b627-2a95-4e2a-aa65-c7845d12fa6a',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/c130b627-2a95-4e2a-aa65-c7845d12fa6a/download/Test%7B%7DFile.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/c130b627-2a95-4e2a-aa65-c7845d12fa6a/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test~File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '7b92b6c5-d219-417b-8a8f-cdbc7bc71c29',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/7b92b6c5-d219-417b-8a8f-cdbc7bc71c29',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/7b92b6c5-d219-417b-8a8f-cdbc7bc71c29/download/Test~File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/7b92b6c5-d219-417b-8a8f-cdbc7bc71c29/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test=File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '9eb9bd63-2f8e-4f18-912d-1011fed7cc05',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9eb9bd63-2f8e-4f18-912d-1011fed7cc05',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9eb9bd63-2f8e-4f18-912d-1011fed7cc05/download/Test=File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/9eb9bd63-2f8e-4f18-912d-1011fed7cc05/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Test\'File.docx',
                'receivedDate': '2017-06-09',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'retentionPeriod': '3 years',
                'nodeId': '3c3a969b-53fa-4afc-8318-a5857068d98d',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3c3a969b-53fa-4afc-8318-a5857068d98d',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3c3a969b-53fa-4afc-8318-a5857068d98d/download/Test\'File.docx',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3c3a969b-53fa-4afc-8318-a5857068d98d/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'hyderseniorbedeveloper.pdf',
                'receivedDate': '2017-08-03',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3 years',
                'nodeId': '6d9cc836-ea1a-41ce-ad56-d8b85ed59f2f',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/6d9cc836-ea1a-41ce-ad56-d8b85ed59f2f',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/6d9cc836-ea1a-41ce-ad56-d8b85ed59f2f/download/hyderseniorbedeveloper.pdf',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/6d9cc836-ea1a-41ce-ad56-d8b85ed59f2f/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/6d9cc836-ea1a-41ce-ad56-d8b85ed59f2f/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'hyder66666.jpg',
                'receivedDate': '2017-08-16',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'image/jpeg',
                'retentionPeriod': '3 years',
                'nodeId': '901a1358-63a7-4e65-996e-8aabd4740a56',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/901a1358-63a7-4e65-996e-8aabd4740a56',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/901a1358-63a7-4e65-996e-8aabd4740a56/download/hyder66666.jpg',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/901a1358-63a7-4e65-996e-8aabd4740a56/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'dd',
                'receivedDate': '2017-09-07',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3 years',
                'nodeId': '064c49be-99a3-42e8-a86b-e32e6454d68c',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/064c49be-99a3-42e8-a86b-e32e6454d68c',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/064c49be-99a3-42e8-a86b-e32e6454d68c/download/dd',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/064c49be-99a3-42e8-a86b-e32e6454d68c/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/064c49be-99a3-42e8-a86b-e32e6454d68c/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'TC1-IDPC1-QA Tests (1).pdf',
                'receivedDate': '2017-11-17',
                'courthouse': null,
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3 years',
                'nodeId': 'ac259fa2-5ea4-4ab7-9aee-3997963daf50',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/ac259fa2-5ea4-4ab7-9aee-3997963daf50',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/ac259fa2-5ea4-4ab7-9aee-3997963daf50/download/TC1-IDPC1-QA%20Tests%20(1).pdf',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/ac259fa2-5ea4-4ab7-9aee-3997963daf50/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/ac259fa2-5ea4-4ab7-9aee-3997963daf50/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              },
              {
                'fileName': 'Less Web Development Essentials.pdf',
                'receivedDate': '2017-11-21',
                'courthouse': 'www.it-ebooks.info',
                'caseDetails': null,
                'mimeType': 'application/pdf',
                'retentionPeriod': '3 years',
                'nodeId': '3ba9bf88-250e-48fb-b532-c7873fe01e4c',
                '_links': {
                  'self': {
                    'rel': 'self',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3ba9bf88-250e-48fb-b532-c7873fe01e4c',
                    'media': null,
                    'methods': [
                      'GET',
                      'PUT',
                      'DELETE'
                    ]
                  },
                  'download': {
                    'rel': 'download',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3ba9bf88-250e-48fb-b532-c7873fe01e4c/download/Less%20Web%20Development%20Essentials.pdf',
                    'media': null,
                    'methods': [
                      'GET'
                    ]
                  },
                  'split': {
                    'rel': 'split',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3ba9bf88-250e-48fb-b532-c7873fe01e4c/split',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'associations': {
                    'rel': 'associations',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/documents/3ba9bf88-250e-48fb-b532-c7873fe01e4c/associations',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  },
                  'share': {
                    'rel': 'share',
                    'href': 'https://demo.courtstore.justice.gov.uk/api/service/courtsessions/share',
                    'media': null,
                    'methods': [
                      'POST'
                    ]
                  }
                }
              }
            ]
          },
          'loading': false,
          'error': null
        }
      },
      {
        'caseReference': '12AB11111111',
        'surname': 'Spinks4',
        'forenames': 'Paul',
        'dateOfBirth': '2018-06-02',
        'courtHouse': 'Birmingham Magistrates\' Court',
        'archiveStatus': 'Live',
        'commenceDate': null,
        'retPeriod': '',
        'nodeId': '2280c548-8ac8-4401-a056-8b4a22221dd9',
        '_links': {
          'self': {
            'rel': 'self',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/2280c548-8ac8-4401-a056-8b4a22221dd9',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'documents': {
            'rel': 'documents',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/2280c548-8ac8-4401-a056-8b4a22221dd9/documents',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'archive': {
            'rel': 'archive',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/2280c548-8ac8-4401-a056-8b4a22221dd9/archive',
            'media': null,
            'methods': [
              'PUT'
            ]
          },
          'hearings': {
            'rel': 'hearings',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/2280c548-8ac8-4401-a056-8b4a22221dd9/hearings',
            'media': null,
            'methods': [
              'GET',
              'PUT'
            ]
          },
          'associations': {
            'rel': 'associations',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/casefiles/2280c548-8ac8-4401-a056-8b4a22221dd9/associations',
            'media': null,
            'methods': [
              'GET',
              'POST'
            ]
          },
          'mycases': {
            'rel': 'mycases',
            'href': 'https://demo.courtstore.justice.gov.uk/api/service/mycases/2280c548-8ac8-4401-a056-8b4a22221dd9',
            'media': null,
            'methods': [
              'POST',
              'DELETE'
            ]
          }
        }
      }
    ];
    component.error = {}
    component.loading = false;
    component.query = '';
    component.linkedDocuments = [];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should render the datatable');
  it('should display the datatable with 3 results')
  it('should show error is no results are found')
});
