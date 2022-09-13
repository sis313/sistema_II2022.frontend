import { TestBed } from '@angular/core/testing';

import { ListaNegocioService } from './lista-negocio.service';

describe('ListaNegocioService', () => {
  let service: ListaNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
