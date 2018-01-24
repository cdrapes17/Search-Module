import { MyCaseFilesService } from './../my-cases/services/my-cases.service';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyDatePickerModule} from 'mydatepicker';

import {PipesModule} from '../shared/pipes/pipes.module';
import {SearchRoutingModule} from './search-routing.module';

import {SearchService} from './services/search.service';
import {LoginService} from '../login/services/login.service';
import {CourtRoomsResolveService} from './services/court-rooms-resolve.service';
import {CourtHousesResolveService} from './services/court-houses-resolve.service';
import {SearchCaseFilesEffectService} from './services/search-case-files-effect.service';
import {JudgesHearingListEffectService} from './services/judges-hearing-list-effect.service';
import {ArchivedSearchEffectService} from './services/search-archived-case-files-effect.service';
import {SearchCourtSessionsEffectService} from './services/search-court-sessions-effect.service';


import {SideBarComponent} from './components/side-bar/side-bar.component';
import {SearchContainerComponent} from './container/search.container.component';
import {SearchCaseFilesComponent} from './components/case-search/case-search.component';
import {CourtSessionComponent} from './components/court-session/court-session.component';
import {ArchivedCaseFileComponent} from './components/archived-case-file/archived-case-file.component';
import {JudgesHearingListComponent} from 'app/search/components/judges-hearing-list/judges-hearing-list.component';
import {ResultsListComponent} from './components/case-search/case-search-results-list/case-search-results-list.component';
import {CourtSessionResultsListComponent} from './components/court-session/court-session-results-list/court-session-results-list.component';
import {JudgesHearingResultsListComponent} from './components/judges-hearing-list/judges-hearing-results-list/judges-hearing-results-list.component';
import {ArchivedCaseFileResultsListComponent} from './components/archived-case-file/archived-case-file-results-list/archived-case-file-results-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MyDatePickerModule,
    NgxDatatableModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    PipesModule.forRoot(),
    EffectsModule.run(SearchCaseFilesEffectService),
    EffectsModule.run(ArchivedSearchEffectService),
    EffectsModule.run(JudgesHearingListEffectService),
    EffectsModule.run(SearchCourtSessionsEffectService)
  ],
  declarations: [
    SideBarComponent,
    SearchCaseFilesComponent,
    ResultsListComponent,
    CourtSessionComponent,
    SearchContainerComponent,
    ArchivedCaseFileComponent,
    JudgesHearingListComponent,
    CourtSessionResultsListComponent,
    JudgesHearingResultsListComponent,
    ArchivedCaseFileResultsListComponent
  ],
  providers: [
    LoginService,
    SearchService,
    CourtRoomsResolveService,
    CourtHousesResolveService,
    MyCaseFilesService
  ]
})
export class SearchModule {
}
