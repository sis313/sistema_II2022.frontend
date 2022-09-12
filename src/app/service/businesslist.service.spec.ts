import { TestBed } from '@angular/core/testing';

import { BusinesslistService } from './businesslist.service';

describe('BusinesslistService', () => {
  let service: BusinesslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
