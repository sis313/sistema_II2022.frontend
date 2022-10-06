import { TestBed } from '@angular/core/testing';

import { OwnerlistService } from './ownerlist.service';

describe('OwnerlistService', () => {
  let service: OwnerlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
