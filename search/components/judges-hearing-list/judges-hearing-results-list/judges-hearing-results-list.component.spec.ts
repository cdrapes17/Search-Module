import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppRoutingModule} from '../../../../app-routing.module';
import {PipesModule} from '../../../../shared/pipes/pipes.module';
import {JudgesHearingResultsListComponent} from './judges-hearing-results-list.component';
import {SharedModule} from '../../../../shared/shared.module';
import {CoreModule} from '../../../../core.module';
import {AuthModule} from '../../../../auth/auth.module';
import {SearchService} from '../../../services/search.service';
import {CaseFileService} from '../../../../case-file/services/case-file.service';
import {CourtSessionService} from '../../../../court-session/services/court-session.service';

describe('JudgesHearingResultsListComponent', () => {
  let component: JudgesHearingResultsListComponent;
  let fixture: ComponentFixture<JudgesHearingResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PipesModule,
        AppRoutingModule,
        CoreModule.provideStoreModule(),
        CoreModule,
        CommonModule,
        AuthModule,
        SharedModule,
        NgxDatatableModule,
      ],
      declarations: [
        JudgesHearingResultsListComponent
      ],
      providers: [
        SearchService,
        CaseFileService,
        CourtSessionService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgesHearingResultsListComponent);
    component = fixture.componentInstance;
    component.error = {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
