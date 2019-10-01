import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMedidasComponent } from './listado-medidas.component';

describe('ListadoMedidasComponent', () => {
  let component: ListadoMedidasComponent;
  let fixture: ComponentFixture<ListadoMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
