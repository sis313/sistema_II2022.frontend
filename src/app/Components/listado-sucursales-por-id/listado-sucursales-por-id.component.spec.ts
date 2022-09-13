import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSucursalesPorIDComponent } from './listado-sucursales-por-id.component';

describe('ListadoSucursalesPorIDComponent', () => {
  let component: ListadoSucursalesPorIDComponent;
  let fixture: ComponentFixture<ListadoSucursalesPorIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSucursalesPorIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSucursalesPorIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
