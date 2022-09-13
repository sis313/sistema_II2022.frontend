import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminComponent } from './update-business.component';

describe('UpdateAdminComponent', () => {
  let component: UpdateAdminComponent;
  let fixture: ComponentFixture<UpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
