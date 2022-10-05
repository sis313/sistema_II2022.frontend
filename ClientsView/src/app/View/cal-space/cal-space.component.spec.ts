import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalSpaceComponent } from './cal-space.component';

describe('CalSpaceComponent', () => {
  let component: CalSpaceComponent;
  let fixture: ComponentFixture<CalSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
