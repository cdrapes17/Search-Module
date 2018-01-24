import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourtSessionComponent} from './court-session.component';
import {CoreModule} from '../../../core.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {MyDatePickerModule} from 'mydatepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {RouterModule} from '@angular/router';
import {CourtSessionResultsListComponent} from './court-session-results-list/court-session-results-list.component';
import {SearchService} from '../../services/search.service';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {CourtSessionService} from '../../../court-session/services/court-session.service';
import {CaseFileService} from '../../../case-file/services/case-file.service';
import {AuthModule} from '../../../auth/auth.module';

describe('CourtSessionComponent', () => {
  let component: CourtSessionComponent;
  let fixture: ComponentFixture<CourtSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        AppRoutingModule,
        FormsModule,
        AuthModule,
        CommonModule,
        CoreModule,
        SharedModule,
        MyDatePickerModule,
        ReactiveFormsModule,
        PipesModule,
        NgxDatatableModule,
        RouterModule
      ],
      declarations: [
        CourtSessionComponent,
        CourtSessionResultsListComponent
      ],
      providers: [
        SearchService,
        CourtSessionService,
        CaseFileService,
        {provide: APP_BASE_HREF, useValue: '/'}

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
