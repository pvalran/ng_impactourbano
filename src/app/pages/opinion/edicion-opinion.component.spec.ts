import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionOpinionComponent } from './edicion-opinion.component';

describe('EdicionOpinionComponent', () => {
  let component: EdicionOpinionComponent;
  let fixture: ComponentFixture<EdicionOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
