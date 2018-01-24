import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {JudgesHearingListComponent} from './judges-hearing-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JudgesHearingResultsListComponent} from './judges-hearing-results-list/judges-hearing-results-list.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SearchService} from '../../services/search.service';
import {CoreModule} from '../../../core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {MyDatePickerModule} from 'mydatepicker';
import {SharedModule} from '../../../shared/shared.module';
import {MyCaseFilesService} from '../../../my-cases/services/my-cases.service';
import {AuthModule} from '../../../auth/auth.module';
import {CourtSessionService} from '../../../court-session/services/court-session.service';
import {CaseFileService} from '../../../case-file/services/case-file.service';


describe('JudgesHearingListComponent', () => {
  let component: JudgesHearingListComponent;
  let fixture: ComponentFixture<JudgesHearingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        AppRoutingModule,
        FormsModule,
        AuthModule,
        CoreModule,
        CommonModule,
        SharedModule,
        MyDatePickerModule,
        ReactiveFormsModule,
        PipesModule,
        NgxDatatableModule,
        RouterModule
      ],
      declarations: [
        JudgesHearingListComponent,
        JudgesHearingResultsListComponent
      ],
      providers: [
        SearchService,
        CaseFileService,
        CourtSessionService,
        MyCaseFilesService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(JudgesHearingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// Check whether the component is created
  it('judges hearing list component should be created', () => {
    expect(component).toBeTruthy();
  });
  // Check whether an instance of the form is created
  it('judges hearing list component  should have a form instance', async(() => {
    expect(component.HearingListForm).toBeTruthy();
  }));
  // *********************************** Happy path*******************************
  it('judges hearing list component should submit a form if a court house is entered', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('Birmingham Magistrates Court');
    expect(component.HearingListForm.valid).toBeTruthy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
  it('judges hearing list component should submit a form if a court house is entered', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('Birmingham Magistrates Court');
    component.HearingListForm.controls['courtroom'].setValue('1');
    expect(component.HearingListForm.valid).toBeTruthy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
  it('judges hearing list component should submit a form if a court house is entered', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('Accrington Youth Court');
    component.HearingListForm.controls['courtroom'].setValue('1');
    component.HearingListForm.controls['courtHearingTime'].setValue('AM');
    expect(component.HearingListForm.valid).toBeTruthy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
  it('judges hearing list component should submit a form if a court house is entered', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('Accrington Magistrates Court');
    component.HearingListForm.controls['courtroom'].setValue('1');
    component.HearingListForm.controls['courtHearingTime'].setValue('AM');
    expect(component.HearingListForm.valid).toBeTruthy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
  it('judges hearing list component should submit a form if a court house is entered', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('Accrington Magistrates Court');
    component.HearingListForm.controls['courtroom'].setValue('1');
    component.HearingListForm.controls['courtHearingTime'].setValue('AM');
    expect(component.HearingListForm.valid).toBeTruthy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
// ***********************************SAD PATH **********************************************
  it('When a query is submitted at least one field must be submitted', async(() => {
    component.HearingListForm.controls['courthouse'].setValue('');
    component.HearingListForm.controls['courtroom'].setValue('');
    component.HearingListForm.controls['courtHearingTime'].setValue('');
    component.HearingListForm.controls['courtHearingDate'].setValue('');
    expect(component.HearingListForm.valid).toBeFalsy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
  // failure of form submission due to wrong date format entered
  it('invalid date format should invalidate the form ', async(() => {
    component.HearingListForm.controls['courtHearingDate'].setValue('122-14-2017');
    expect(component.HearingListForm.valid).toBeFalsy();
    component.searchForJudgesHearingList(component.HearingListForm.value, component.HearingListForm.valid);
  }));
});
