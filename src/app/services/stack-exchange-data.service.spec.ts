import { TestBed, inject } from '@angular/core/testing';

import { StackExchangeDataService } from './stack-exchange-data.service';

describe('StackExchangeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackExchangeDataService]
    });
  });

  it('should be created', inject([StackExchangeDataService], (service: StackExchangeDataService) => {
    expect(service).toBeTruthy();
  }));
});
