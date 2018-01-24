import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import {CoreModule} from '../../core.module';


describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.provideStoreModule()
      ],
      providers: [
        SearchService,

      ]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
