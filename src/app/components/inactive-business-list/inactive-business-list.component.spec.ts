import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveBusinessListComponent } from './inactive-business-list.component';

describe('InactiveBusinessListComponent', () => {
  let component: InactiveBusinessListComponent;
  let fixture: ComponentFixture<InactiveBusinessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveBusinessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
