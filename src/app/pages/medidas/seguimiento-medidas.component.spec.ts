import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoMedidasComponent } from './seguimiento-medidas.component';

describe('SeguimientoMedidasComponent', () => {
  let component: SeguimientoMedidasComponent;
  let fixture: ComponentFixture<SeguimientoMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
