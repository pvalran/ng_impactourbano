import { TestBed, async, inject } from '@angular/core/testing';

import { ConsultaGuard } from './consulta.guard';

describe('ConsultaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaGuard]
    });
  });

  it('should ...', inject([ConsultaGuard], (guard: ConsultaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
