import { TestBed } from '@angular/core/testing';

import { StorelistService } from './storelist.service';

describe('StorelistService', () => {
  let service: StorelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
