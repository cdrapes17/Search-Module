import { CaseFileService } from './../../../case-file/services/case-file.service';
import { CourtSessionService } from './../../../court-session/services/court-session.service';
import { HttpService } from './../../../shared/services/http.service';
import { SearchService } from './../../services/search.service';
import { AuthModule } from './../../../auth/auth.module';
import { CoreModule } from './../../../core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {SharedModule} from '../../../shared/shared.module';


describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        CoreModule.provideStoreModule(),
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        AppRoutingModule,
        PipesModule,
        CoreModule,
        AuthModule
      ],
      declarations: [
        SideBarComponent
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
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
