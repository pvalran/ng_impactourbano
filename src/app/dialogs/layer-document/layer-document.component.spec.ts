import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerDocumentComponent } from './layer-document.component';

describe('LayerDocumentComponent', () => {
  let component: LayerDocumentComponent;
  let fixture: ComponentFixture<LayerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
