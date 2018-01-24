import {APP_BASE_HREF} from '@angular/common';
import {PipesModule} from './../../shared/pipes/pipes.module';
import {AppRoutingModule} from './../../app-routing.module';
import {SideBarComponent} from './../components/side-bar/side-bar.component';
import {LoginMockService} from './../../login/services/login-mock.service';
import {LoginService} from './../../login/services/login.service';
import {CoreModule} from './../../core.module';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchContainerComponent} from 'app/search/container/search.container.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthModule} from '../../auth/auth.module';
import {SearchService} from '../services/search.service';
import {CourtSessionService} from '../../court-session/services/court-session.service';
import {CaseFileService} from '../../case-file/services/case-file.service';


describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        PipesModule,
        SharedModule,
        CoreModule,
        AuthModule,
        CoreModule.provideStoreModule()
      ],
      declarations: [SearchContainerComponent,
        SideBarComponent
      ],
      providers: [
        SearchService,
        CourtSessionService,
        CaseFileService,
        {
          provide: LoginService,
          useClass: LoginMockService
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
