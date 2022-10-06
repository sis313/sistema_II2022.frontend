import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRatingsMenuComponent } from './listado-ratings-menu.component';

describe('ListadoRatingsMenuComponent', () => {
  let component: ListadoRatingsMenuComponent;
  let fixture: ComponentFixture<ListadoRatingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRatingsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRatingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
