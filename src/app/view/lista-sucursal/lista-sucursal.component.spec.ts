import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursalComponent } from './lista-sucursal.component';

describe('ListaSucursalComponent', () => {
  let component: ListaSucursalComponent;
  let fixture: ComponentFixture<ListaSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
