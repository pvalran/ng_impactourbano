import { OpinionModule } from './opinion.module';

describe('OpinionModule', () => {
  let opinionModule: OpinionModule;

  beforeEach(() => {
    opinionModule = new OpinionModule();
  });

  it('should create an instance', () => {
    expect(opinionModule).toBeTruthy();
  });
});
