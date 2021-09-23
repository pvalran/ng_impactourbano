import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionBranchComponent } from './edition-branch.component';

describe('EditionBranchComponent', () => {
  let component: EditionBranchComponent;
  let fixture: ComponentFixture<EditionBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
