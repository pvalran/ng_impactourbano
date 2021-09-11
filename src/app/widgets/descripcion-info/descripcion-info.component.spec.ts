import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionInfoComponent } from './descripcion-info.component';

describe('DescripcionInfoComponent', () => {
  let component: DescripcionInfoComponent;
  let fixture: ComponentFixture<DescripcionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
