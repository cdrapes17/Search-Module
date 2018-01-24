import { AuthModule } from './../../auth/auth.module';
import { CaseFileService } from './../../case-file/services/case-file.service';
import { CourtSessionService } from './../../court-session/services/court-session.service';
import { SearchService } from './search.service';
import {Actions} from '@ngrx/effects';
import {ToastModule} from 'ng2-toastr';
import {APP_BASE_HREF} from '@angular/common';
import {inject, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../core.module';
import {AppRoutingModule} from '../../app-routing.module';

import {HttpService} from '../../shared/services/http.service';
import {SearchCourtSessionsEffectService} from './search-court-sessions-effect.service';
import {SharedModule} from '../../shared/shared.module';

describe('SearchCourtSessionsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        ToastModule.forRoot(),
        SharedModule,
        AppRoutingModule,
        CoreModule,
        AuthModule
      ],
      providers: [
        SearchCourtSessionsEffectService,
        Actions,
        {
          provide: HttpService,
          useValue: jasmine.createSpyObj('httpService', ['search'])
        },
        {provide: APP_BASE_HREF, useValue: '/'},
        SearchService,
        HttpService,
        CourtSessionService,
        CaseFileService,
      ]
    });
  });

  it('should be created', inject([SearchCourtSessionsEffectService], (service: SearchCourtSessionsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
