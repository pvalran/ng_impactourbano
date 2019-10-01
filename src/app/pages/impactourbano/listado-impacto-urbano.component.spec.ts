import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoImpactoUrbanoComponent } from './listado-impacto-urbano.component';

describe('ListadoImpactoUrbanoComponent', () => {
  let component: ListadoImpactoUrbanoComponent;
  let fixture: ComponentFixture<ListadoImpactoUrbanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoImpactoUrbanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoImpactoUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
