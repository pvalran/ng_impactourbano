import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionImpactoUrbanoComponent } from './edicion-impacto-urbano.component';

describe('EdicionImpactoUrbanoComponent', () => {
  let component: EdicionImpactoUrbanoComponent;
  let fixture: ComponentFixture<EdicionImpactoUrbanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionImpactoUrbanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionImpactoUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
