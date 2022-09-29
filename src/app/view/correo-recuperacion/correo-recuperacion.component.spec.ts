import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoRecuperacionComponent } from './correo-recuperacion.component';

describe('CorreoRecuperacionComponent', () => {
  let component: CorreoRecuperacionComponent;
  let fixture: ComponentFixture<CorreoRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoRecuperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
