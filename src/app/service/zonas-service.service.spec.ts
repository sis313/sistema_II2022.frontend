import { TestBed } from '@angular/core/testing';

import { ZonasServiceService } from './zonas-service.service';

describe('ZonasServiceService', () => {
  let service: ZonasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
