import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionexitosaComponent } from './verificacionexitosa.component';

describe('VerificacionexitosaComponent', () => {
  let component: VerificacionexitosaComponent;
  let fixture: ComponentFixture<VerificacionexitosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionexitosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionexitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
