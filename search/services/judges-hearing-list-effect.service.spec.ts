import {inject, TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {CoreModule} from '../../core.module';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import {JudgesHearingListEffectService} from './judges-hearing-list-effect.service';
import {HttpService} from '../../shared/services/http.service';
import {ToastModule} from 'ng2-toastr';
import {SharedModule} from '../../shared/shared.module';
import {SearchService} from './search.service';
import {CourtSessionService} from '../../court-session/services/court-session.service';
import {CaseFileService} from '../../case-file/services/case-file.service';


describe('JudgesHearingListEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        SharedModule,
        ToastModule.forRoot(),
        AppRoutingModule,
      ],
      providers: [
        SearchService,
        CourtSessionService,
        CaseFileService,
        JudgesHearingListEffectService,
        Actions,
        {
          provide: HttpService,
          useValue: jasmine.createSpyObj('httpService', ['search'])
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should be created', inject([JudgesHearingListEffectService], (service: JudgesHearingListEffectService) => {
    expect(service).toBeTruthy();
  }));
});
