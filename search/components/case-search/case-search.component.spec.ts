import {MyDatePickerModule} from 'mydatepicker';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../../core.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {PipesModule} from '../../../shared/pipes/pipes.module';

import {SearchService} from '../../services/search.service';

import {SearchCaseFilesComponent} from './case-search.component';
import {ResultsListComponent} from './case-search-results-list/case-search-results-list.component';
import {CaseFileService} from '../../../case-file/services/case-file.service';
import {MyCaseFilesService} from '../../../my-cases/services/my-cases.service';
import {SharedModule} from '../../../shared/shared.module';
import {AuthModule} from '../../../auth/auth.module';
import {CourtSessionService} from '../../../court-session/services/court-session.service';


describe('SearchCaseFilesComponent', () => {
  let component: SearchCaseFilesComponent;
  let fixture: ComponentFixture<SearchCaseFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule(),
        AppRoutingModule,
        FormsModule,
        CoreModule,
        AuthModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        PipesModule,
        NgxDatatableModule,
      ],
      declarations: [
        SearchCaseFilesComponent,
        ResultsListComponent
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
    fixture = TestBed.createComponent(SearchCaseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// Check whether the component is created
  it('case search component should be created', () => {
    expect(component).toBeTruthy();
  });
  // Check whether an instance of the form is created
  it('case search component should have a form instance', async(() => {
    expect(component.SearchCaseFilesForm).toBeTruthy();
  }));
// ***********************************Check Wildcard Restrictions Happy path*******************************

// Wildcards can only be used once in a field & at least one field is does not contain a wildcard.
// Case Reference happy path with different field combinations
// 1st combination caseRef used as the wild card entry in combination with other input fields

//  Wildcard = Case Reference ; validation field = forename
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string -Validation field used forename ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
//  Wildcard = Case Reference ; validation field = date of Birth
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('26/12/2017');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('16/04/2009');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));

  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('01/01/2008');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
//  Wildcard = Case Reference ; validation field = surname
  it('wildcards can only be used once in a field - Case Reference - valid * at the end of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used surname ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used surname ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));

  // Combination using Surname as the wild card entry in combination with other input fields
  //  Wildcard = Surname ; validation field = forename
  it('wildcards can only be used once in a field - Surname - valid * at the end of string -Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('abc*');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the start of string -Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the middle of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = Surname ; validation field = date of Birth
  it('wildcards can only be used once in a field - Surname - valid * at the end of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('abc*');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('26/12/2017');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the start of string - Validation field used date of Birth ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('16/04/2009');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Surname - valid a * at the middle of string - Validation field used date of Birth ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('01/01/2008');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// Wildcard = Surname ; validation field = caseReference
  it('wildcards can only be used once in a field - Surname - valid * at the end of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('abc*');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the start of string - Validation field used caseReference ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Case Reference - valid a * at the middle of string - Validation field used caseReference ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // Combination  using forename as the wild card entry in combination with other input fields
  //  Wildcard = forename ; validation field = surname
  it('wildcards can only be used once in a field - Forename- valid * at the end of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename- valid a * at the start of string - Validation field used surname ', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = forename ; validation field = case Reference
  it('wildcards can only be used once in a field - Forename- valid * at the end of string -  Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the start of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = forename ; validation field = date of Birth
  it('wildcards can only be used once in a field - Forename- valid * at the end of string -  Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('13/02/2015');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the start of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('12/06/2001');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field - Forename - valid a * at the middle of string - Validation field used date of Birth', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('10/09/2003');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // ***********************************Check Wild Card must have at least three characters and one field filled to be Validated HAPPY PATH*******************************
  //  Wildcard = Case Reference with minimum three characters  ; validation field = forename
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid * at the end of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the start of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the middle of string - Validation field used forename ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = Case Reference with minimum three characters  ; validation field = surname
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid * at the end of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the start of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Case Reference - valid a * at the middle of string - Validation field used surname', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
//  Wildcard = Surname with minimum three characters  ; validation field = forename
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('abc*');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid a * at the start of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid a * at the middle of string - Validation field used forename', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// Wildcard = Surname with minimum three characters ; validation field = caseReference
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of the string - Validation field used Case Reference ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('abc*');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Surname - valid * at the end of the string - Validation field used Case Reference ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters -Surname - valid * at the end of the string - Validation field used Case Reference  ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = forename with minimum three characters ; validation field = surname
  it('wildcards can only be used once in a field with minimum three characters- Forename- valid * at the end of string - Validation field used surname ', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename- valid a * at the start of string -  Validation field used  surname ', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters- Forename - valid a * at the middle of string -  Validation field used  surname  ', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  //  Wildcard = forename with minimum three characters ; validation field = case Reference
  it('wildcards can only be used once in a field with minimum three characters - Forename- valid * at the end of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename - valid a * at the start of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('wildcards can only be used once in a field with minimum three characters - Forename - valid a * at the middle of string - Validation field used caseReference', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // ***********************************Checking Form Fields Combinations Without Wild Cards Happy Path*******************************
  // Validation field = Case Reference
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field case Reference ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('L23456');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('');
    component.SearchCaseFilesForm.controls['surname'].setValue('');
    component.SearchCaseFilesForm.controls['forename'].setValue('');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // Validation field = Surname
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field surname ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('');
    component.SearchCaseFilesForm.controls['surname'].setValue('marc');
    component.SearchCaseFilesForm.controls['forename'].setValue('');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // Validation field = forename
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field forename ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('');
    component.SearchCaseFilesForm.controls['surname'].setValue('');
    component.SearchCaseFilesForm.controls['forename'].setValue('marc');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // Validation field = date of Birth
  it('When a query is submitted at least 1 field is completed without a wildcard - Input field date of Birth ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('12/07/2004');
    component.SearchCaseFilesForm.controls['surname'].setValue('');
    component.SearchCaseFilesForm.controls['forename'].setValue('');
    expect(component.SearchCaseFilesForm.valid).toBeTruthy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('case search component should not submit a form if no values are entered', async(() => {
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// ***********************************SAD PATH **********************************************
  // *****************************WILD CARDS SAD PATH********************************
//  When a query is submitted with a wild card , at least one field must be completed
  it('When a query is submitted with a wild card at least one field must be completed - not valid since no other field is submitted', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('abc*');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // failure since wild cards are used twice in the same field
  it('wildcards can only be used once in a field - Case Reference - not valid a * twice in the string', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*ab*c');
    component.SearchCaseFilesForm.controls['surname'].setValue('abc');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // failure since wild cards are used twice in the same field
  it('wildcards can only be used once in a field - Case Reference - not valid a * twice in the string', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*ab*c');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('16/04/2006');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // failure wild cards used in more than one field
  it('the query must have only one wild card field submission, not valid since * is used in two fields ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // failure since wild cards are used twice even though others conditions are met
  it('wildcards can only be used in only one field , not valid since * is used in two fields ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('michael')
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// two wild cards at different positions in two fields
  it('wildcards can only be used once in a field not valid a * is used in two fields ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // wild cards are only allowed to be used once
  it('wildcards can only be used once in a field not valid a * is used in two fields ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('ab*c');
    component.SearchCaseFilesForm.controls['forename'].setValue('abc*');
    component.SearchCaseFilesForm.controls['surname'].setValue('derek');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
// At least one field must be completed without a wildcard
  it('at least one field must be completed without a wildcard', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('*abc');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // wild cards only work with minimum three characters excluding the *
  it('the wild card field must have minimum of three characters ', async(() => {
    component.SearchCaseFilesForm.controls['surname'].setValue('a*b');
    component.SearchCaseFilesForm.controls['forename'].setValue('roger');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  it('at least one field must be completed without a wildcard', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('*abc');
    component.SearchCaseFilesForm.controls['forename'].setValue('*abc');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
  // Form fields = empty  ;  Form should be invalid
  it('When a query is submitted at least one field must be submitted ', async(() => {
    component.SearchCaseFilesForm.controls['caseReference'].setValue('');
    component.SearchCaseFilesForm.controls['dateOfBirth'].setValue('');
    component.SearchCaseFilesForm.controls['surname'].setValue('');
    component.SearchCaseFilesForm.controls['forename'].setValue('');
    expect(component.SearchCaseFilesForm.valid).toBeFalsy();
    component.searchForCases(component.SearchCaseFilesForm.value, component.SearchCaseFilesForm.valid);
  }));
});
