import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoliviaComponent } from './bolivia.component';

describe('BoliviaComponent', () => {
  let component: BoliviaComponent;
  let fixture: ComponentFixture<BoliviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoliviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
