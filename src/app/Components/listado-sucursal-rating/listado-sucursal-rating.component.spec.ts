import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSucursalRatingComponent } from './listado-sucursal-rating.component';

describe('ListadoSucursalRatingComponent', () => {
  let component: ListadoSucursalRatingComponent;
  let fixture: ComponentFixture<ListadoSucursalRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSucursalRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSucursalRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
