import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursalComponent } from './editar-sucursal.component';

describe('EditarSucursalComponent', () => {
  let component: EditarSucursalComponent;
  let fixture: ComponentFixture<EditarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
