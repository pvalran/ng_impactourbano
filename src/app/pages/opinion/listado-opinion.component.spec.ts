import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOpinionComponent } from './listado-opinion.component';

describe('ListadoOpinionComponent', () => {
  let component: ListadoOpinionComponent;
  let fixture: ComponentFixture<ListadoOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
