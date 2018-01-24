import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchContainerComponent} from './container/search.container.component';
import {CourtSessionComponent} from './components/court-session/court-session.component';
import {SearchCaseFilesComponent} from 'app/search/components/case-search/case-search.component';
import {ArchivedCaseFileComponent} from './components/archived-case-file/archived-case-file.component';
import {JudgesHearingListComponent} from 'app/search/components/judges-hearing-list/judges-hearing-list.component';

const searchRoutes: Routes = [{
  path: '',
  component: SearchContainerComponent,
  children: [
    {
      path: '',
      redirectTo: 'case-file',
      pathMatch: 'full'
    },
    {
      path: 'case-file',
      component: SearchCaseFilesComponent,
    },
    {
      path: 'judge-hearing-list',
      component: JudgesHearingListComponent,
    },
    {
      path: 'archived-case-file',
      component: ArchivedCaseFileComponent,
    },
    {
      path: 'court-session',
      component: CourtSessionComponent
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  declarations: []
})
export class SearchRoutingModule {
}
