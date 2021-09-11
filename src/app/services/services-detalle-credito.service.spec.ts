import { TestBed } from '@angular/core/testing';

import { ServicesDetalleCreditoService } from './services-detalle-credito.service';

describe('ServicesDetalleCreditoService', () => {
  let service: ServicesDetalleCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDetalleCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
