import { CaseFileService } from 'app/case-file/services/case-file.service';
import {inject, TestBed} from '@angular/core/testing';

import {ArchivedSearchEffectService} from './search-archived-case-files-effect.service';
import {CoreModule} from '../../core.module';
import {Actions} from '@ngrx/effects';
import {HttpService} from '../../shared/services/http.service';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {ToastModule} from 'ng2-toastr';
import {SharedModule} from '../../shared/shared.module';
import {SearchService} from './search.service';
import {CourtSessionService} from '../../court-session/services/court-session.service';

describe('ArchivedSearchEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        ToastModule.forRoot(),
        SharedModule,
        AppRoutingModule,
      ],
      providers: [
        ArchivedSearchEffectService,
        CaseFileService,
        SearchService,
        CourtSessionService,
        Actions,
        {
          provide: HttpService,
          useValue: jasmine.createSpyObj('httpService', ['search'])
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should be created', inject([ArchivedSearchEffectService], (service: ArchivedSearchEffectService) => {
    expect(service).toBeTruthy();
  }));
});
