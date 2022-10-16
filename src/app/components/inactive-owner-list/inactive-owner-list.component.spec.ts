import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveOwnerListComponent } from './inactive-owner-list.component';

describe('InactiveOwnerListComponent', () => {
  let component: InactiveOwnerListComponent;
  let fixture: ComponentFixture<InactiveOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveOwnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
