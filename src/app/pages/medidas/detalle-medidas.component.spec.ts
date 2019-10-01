import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMedidasComponent } from './detalle-medidas.component';

describe('DetalleMedidasComponent', () => {
  let component: DetalleMedidasComponent;
  let fixture: ComponentFixture<DetalleMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
