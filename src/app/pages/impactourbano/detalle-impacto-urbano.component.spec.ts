import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleImpactoUrbanoComponent } from './detalle-impacto-urbano.component';

describe('DetalleImpactoUrbanoComponent', () => {
  let component: DetalleImpactoUrbanoComponent;
  let fixture: ComponentFixture<DetalleImpactoUrbanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleImpactoUrbanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleImpactoUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
