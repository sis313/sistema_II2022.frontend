import { TestBed } from '@angular/core/testing';

import { TiposNegocioService } from './tipos-negocio.service';

describe('TiposNegocioService', () => {
  let service: TiposNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
