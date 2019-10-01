import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOpinionComponent } from './detalle-opinion.component';

describe('DetalleOpinionComponent', () => {
  let component: DetalleOpinionComponent;
  let fixture: ComponentFixture<DetalleOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
