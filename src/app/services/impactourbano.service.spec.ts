import { TestBed } from '@angular/core/testing';

import { ImpactourbanoService } from './impactourbano.service';

describe('ImpactourbanoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpactourbanoService = TestBed.get(ImpactourbanoService);
    expect(service).toBeTruthy();
  });
});
