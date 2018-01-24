import { CaseFileService } from './../../../../case-file/services/case-file.service';
import { CourtSessionService } from './../../../../court-session/services/court-session.service';
import { HttpService } from './../../../../shared/services/http.service';
import { SearchService } from './../../../services/search.service';
import { AuthModule } from './../../../../auth/auth.module';
import { CoreModule } from './../../../../core.module';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedCaseFileResultsListComponent } from './archived-case-file-results-list.component';
import {PipesModule} from '../../../../shared/pipes/pipes.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../../../app-routing.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';


describe('ArchivedCaseFileResultsListComponent', () => {
  let component: ArchivedCaseFileResultsListComponent;
  let fixture: ComponentFixture<ArchivedCaseFileResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PipesModule,
        SharedModule,
        AppRoutingModule,
        NgxDatatableModule,
        CoreModule,
        CommonModule,
        AuthModule,
        CoreModule.provideStoreModule(),
      ],
      declarations: [
        ArchivedCaseFileResultsListComponent
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
    fixture = TestBed.createComponent(ArchivedCaseFileResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
