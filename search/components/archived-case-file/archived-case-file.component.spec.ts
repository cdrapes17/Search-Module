import {MyDatePickerModule} from 'mydatepicker';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../../core.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {PipesModule} from '../../../shared/pipes/pipes.module';

import {SearchService} from '../../services/search.service';

import {ArchivedCaseFileComponent} from './archived-case-file.component';
import {ArchivedCaseFileResultsListComponent} from './archived-case-file-results-list/archived-case-file-results-list.component';
import {CaseFileService} from '../../../case-file/services/case-file.service';
import {MyCaseFilesService} from '../../../my-cases/services/my-cases.service';
import {SharedModule} from '../../../shared/shared.module';
import {MaintenanceComponent} from '../../../shared/components/maintenance/maintenance.component';
import {AuthModule} from '../../../auth/auth.module';
import {CourtSessionService} from '../../../court-session/services/court-session.service';


describe('ArchivedCaseFileComponent', () => {
  let component: ArchivedCaseFileComponent;
  let fixture: ComponentFixture<ArchivedCaseFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        AppRoutingModule,
        CoreModule,
        FormsModule,
        CommonModule,
        AuthModule,
        SharedModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        PipesModule,
        NgxDatatableModule,
      ],
      declarations: [
        ArchivedCaseFileComponent,
        ArchivedCaseFileResultsListComponent
      ],
      providers: [
        SearchService,
        MyCaseFilesService,
        CourtSessionService,
        CaseFileService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedCaseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Check whether the component is created
  it('arhived case file component should be created', () => {
    expect(component).toBeTruthy();
  });
  // Check whether an instance of the form is created
  it('arhived case file should have a form instance', async(() => {
    expect(component.ArchiveCaseForm).toBeTruthy();
  }));

// ***********************************Check Wildcard Restrictions Happy path*******************************

// Wildcards can only be used once in a field & at least one field is does not contain a wildcard.
// Case Reference happy path with different field combinations
// 1st combination caseRef used as the wild card entry in combination with other input fields

//  Wildcard = Case Reference ; validation field = forename
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string -Validation field used forename ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
//  Wildcard = Case Reference ; validation field = date of Birth
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('26/12/2017');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('16/04/2009');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));

  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('01/01/2008');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
//  Wildcard = Case Reference ; validation field = surname
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used surname ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used surname ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));

  // Combination using Surname as the wild card entry in combination with other input fields
  //  Wildcard = Surname ; validation field = forename
  it('wildcards can only be used once in a field - Surname - valid * at the end of string -Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('abc*');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the start of string -Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the middle of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = Surname ; validation field = date of Birth
  it('wildcards can only be used once in a field - Surname - valid * at the end of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('abc*');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('26/12/2017');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the start of string - Validation field used date of Birth ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('16/04/2009');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the middle of string - Validation field used date of Birth ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*c');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('01/01/2008');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// Wildcard = Surname ; validation field = caseReference
  it('wildcards can only be used once in a field - Surname - valid * at the end of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('abc*');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used caseReference ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used caseReference ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*c');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // Combination  using forename as the wild card entry in combination with other input fields
  //  Wildcard = forename ; validation field = surname
  it('wildcards can only be used once in a field - Forename- valid * at the end of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename- valid a * at the start of string - Validation field used surname ', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('ab*c');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = forename ; validation field = case Reference
  it('wildcards can only be used once in a field - Forename- valid * at the end of string -  Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the start of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('ab*c');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = forename ; validation field = date of Birth
  it('wildcards can only be used once in a field - Forename- valid * at the end of string -  Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('13/02/2015');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the start of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('12/06/2001');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used date of Birth', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('ab*c');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('10/09/2003');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // ***********************************Check Wild Card must have at least three characters and one field filled to be Validated HAPPY PATH*******************************
  //  Wildcard = Case Reference with minimum three characters  ; validation field = forename
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid * at the end of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the start of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the middle of string - Validation field used forename ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = Case Reference with minimum three characters  ; validation field = surname
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid * at the end of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the start of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the middle of string - Validation field used surname', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
//  Wildcard = Surname with minimum three characters  ; validation field = forename
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('abc*');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid a * at the start of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid a * at the middle of string - Validation field used forename', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// Wildcard = Surname with minimum three characters ; validation field = caseReference
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of the string - Validation field used Case Reference ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('abc*');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of the string - Validation field used Case Reference ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters -Surname - valid * at the end of the string - Validation field used Case Reference  ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*c');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = forename with minimum three characters ; validation field = surname
  it('wildcards can only be used once in a field with minimum three characters- Forename- valid * at the end of string - Validation field used surname ', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename- valid a * at the start of string -  Validation field used  surname ', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters- Forename - valid a * at the middle of string -  Validation field used  surname  ', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('ab*c');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  //  Wildcard = forename with minimum three characters ; validation field = case Reference
  it('wildcards can only be used once in a field with minimum three characters - Forename- valid * at the end of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename - valid a * at the start of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename - valid a * at the middle of string - Validation field used caseReference', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('ab*c');
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // ***********************************Checking Form Fields Combinations Without Wild Cards Happy Path*******************************
  // Validation field = Case Reference
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field case Reference ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('L23456');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('');
    component.ArchiveCaseForm.controls['surname'].setValue('');
    component.ArchiveCaseForm.controls['forename'].setValue('');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // Validation field = Surname
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field surname ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('');
    component.ArchiveCaseForm.controls['surname'].setValue('marc');
    component.ArchiveCaseForm.controls['forename'].setValue('');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // Validation field = forename
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field forename ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('');
    component.ArchiveCaseForm.controls['surname'].setValue('');
    component.ArchiveCaseForm.controls['forename'].setValue('marc');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // Validation field = date of Birth
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field date of Birth ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('12/07/2004');
    component.ArchiveCaseForm.controls['surname'].setValue('');
    component.ArchiveCaseForm.controls['forename'].setValue('');
    expect(component.ArchiveCaseForm.valid).toBeTruthy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('case search component should not submit a form if no values are entered', async(() => {
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// ***********************************SAD PATH **********************************************
  // *****************************WILD CARDS SAD PATH********************************
//  When a query is submitted with a wild card , at least one field must be completed
  it('When a query is submitted with a wild card at least one field must be completed - not valid since no other field is submitted', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('abc*');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // failure since wild cards are used twice in the same field
  it('wildcards can only be used once in a field - Case Reference - not valid a * twice in the string', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*ab*c');
    component.ArchiveCaseForm.controls['surname'].setValue('abc');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // failure since wild cards are used twice in the same field
  it('wildcards can only be used once in a field - Case Reference - not valid a * twice in the string', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*ab*c');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('16/04/2006');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // failure wild cards used in more than one field
  it('the query must have only one wild card field submission, not valid since * is used in two fields ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // failure since wild cards are used twice even though others conditions are met
  it('wildcards can only be used in only one field , not valid since * is used in two fields ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('michael')
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// two wild cards at different positions in two fields
  it('wildcards can only be used once in a field not valid a * is used in two fields ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // wild cards are only allowed to be used once
  it('wildcards can only be used once in a field not valid a * is used in two fields ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('ab*c');
    component.ArchiveCaseForm.controls['forename'].setValue('abc*');
    component.ArchiveCaseForm.controls['surname'].setValue('derek');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
// At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('*abc');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // wild cards only work with minimum three characters excluding the *
  it('the wild card field must have minimum of three characters ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('ab*');
    component.ArchiveCaseForm.controls['forename'].setValue('roger');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // wild cards only work with minimum three characters excluding the *
  it('the wild card field must have minimum of three characters ', async(() => {
    component.ArchiveCaseForm.controls['surname'].setValue('a*b');
    component.ArchiveCaseForm.controls['forename'].setValue('roger');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  it('at least one field must be completed without a wildcard', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('*abc');
    component.ArchiveCaseForm.controls['forename'].setValue('*abc');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
  // Form fields = empty  ;  Form should be invalid
  it('When a query is submitted at least one field must be submitted ', async(() => {
    component.ArchiveCaseForm.controls['caseReference'].setValue('');
    component.ArchiveCaseForm.controls['dateOfBirth'].setValue('');
    component.ArchiveCaseForm.controls['surname'].setValue('');
    component.ArchiveCaseForm.controls['forename'].setValue('');
    expect(component.ArchiveCaseForm.valid).toBeFalsy();
    component.searchForArchivedCases(component.ArchiveCaseForm.value, component.ArchiveCaseForm.valid);
  }));
});

