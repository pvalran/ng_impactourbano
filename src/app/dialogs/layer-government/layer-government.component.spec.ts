import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerGovernmentComponent } from './layer-government.component';

describe('LayerGovernmentComponent', () => {
  let component: LayerGovernmentComponent;
  let fixture: ComponentFixture<LayerGovernmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerGovernmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
