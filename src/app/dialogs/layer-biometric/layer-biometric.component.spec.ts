import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBiometricComponent } from './layer-biometric.component';

describe('LayerBiometricComponent', () => {
  let component: LayerBiometricComponent;
  let fixture: ComponentFixture<LayerBiometricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerBiometricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerBiometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
