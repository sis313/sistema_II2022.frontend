import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStyleComponent } from './nav-style.component';

describe('NavStyleComponent', () => {
  let component: NavStyleComponent;
  let fixture: ComponentFixture<NavStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
