import { ComponentFixture, TestBed } from '@angular/core/testing';



import { EnvioRecuperacionComponent } from './envio-recuperacion.component';
// CommonJS
describe('EnvioRecuperacionComponent', () => {
  let component: EnvioRecuperacionComponent;
  let fixture: ComponentFixture<EnvioRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioRecuperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
