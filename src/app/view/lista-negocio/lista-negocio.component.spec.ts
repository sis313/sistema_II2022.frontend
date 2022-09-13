import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNegocioComponent } from './lista-negocio.component';

describe('ListaNegocioComponent', () => {
  let component: ListaNegocioComponent;
  let fixture: ComponentFixture<ListaNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
