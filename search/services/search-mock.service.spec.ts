import {inject, TestBed} from '@angular/core/testing';

import {SearchMockService} from './search-mock.service';

describe('SearchMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchMockService]
    });
  });

  it('should be created', inject([SearchMockService], (service: SearchMockService) => {
    expect(service).toBeTruthy();
  }));
});
