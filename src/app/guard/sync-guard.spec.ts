import { TestBed, async, inject } from '@angular/core/testing';

import { SyncGuardGuard } from './sync-guard.guard';

describe('SyncGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyncGuardGuard]
    });
  });

  it('should ...', inject([SyncGuardGuard], (guard: SyncGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
