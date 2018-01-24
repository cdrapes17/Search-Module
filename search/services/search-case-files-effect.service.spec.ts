import { CaseFileService } from './../../case-file/services/case-file.service';
import {TestBed, inject} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../core.module';
import {AuthModule} from '../../auth/auth.module';
import {APP_BASE_HREF} from '@angular/common';
import {EffectsRunner} from '@ngrx/effects/testing';
import {HttpService} from '../../shared/services/http.service';
import {SearchCaseFilesEffectService} from './search-case-files-effect.service';
import {SearchService} from './search.service';
import {CourtSessionService} from '../../court-session/services/court-session.service';


describe('SearchCaseFilesEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        AuthModule,
        CoreModule,
        RouterModule,
        AppRoutingModule
      ],
      providers: [
        SearchCaseFilesEffectService,
        Actions,
        SearchService,
        CaseFileService,
        CourtSessionService,
        EffectsRunner,
        CaseFileService,
        {
          provide: HttpService,
          useValue: jasmine.createSpyObj('httpService', ['search'])
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should be created', inject([SearchCaseFilesEffectService], (service: SearchCaseFilesEffectService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return SEARCH_CASE_FILE_ACTION', () => {
  //   let runner, searchEffectService, httpService;
  //   runner = TestBed.get(EffectsRunner);
  //   searchEffectService = TestBed.get(searchEffectService);
  //   httpService = TestBed.get(HttpService);
  //
  //   httpService.search.and.returnValue(Observable.of({}));
  //
  //   const expectedResults = new SearchCaseFilesSuccessAction({});
  //
  //   runner.queue(new SearchCaseFileAction({
  //
  //   }));
  //
  //   searchEffectService.searchCaseFile$
  //     .subscribe(result => {
  //       expect(result).toEqual(expectedResults)
  //     })
  //
  // })
});
