import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionErrorComponent } from './recuperacion-error.component';

describe('RecuperacionErrorComponent', () => {
  let component: RecuperacionErrorComponent;
  let fixture: ComponentFixture<RecuperacionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperacionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
