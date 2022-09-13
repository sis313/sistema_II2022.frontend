import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionErrorComponent } from './verificacion-error.component';

describe('VerificacionErrorComponent', () => {
  let component: VerificacionErrorComponent;
  let fixture: ComponentFixture<VerificacionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
