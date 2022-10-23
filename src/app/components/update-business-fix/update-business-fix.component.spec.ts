import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessFixComponent } from './update-business-fix.component';

describe('UpdateBusinessFixComponent', () => {
  let component: UpdateBusinessFixComponent;
  let fixture: ComponentFixture<UpdateBusinessFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusinessFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
