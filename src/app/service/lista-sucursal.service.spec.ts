import { TestBed } from '@angular/core/testing';

import { ListaSucursalService } from './lista-sucursal.service';

describe('ListaSucursalService', () => {
  let service: ListaSucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
