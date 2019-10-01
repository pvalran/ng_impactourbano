import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionMedidasComponent } from './edicion-medidas.component';

describe('EdicionMedidasComponent', () => {
  let component: EdicionMedidasComponent;
  let fixture: ComponentFixture<EdicionMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
