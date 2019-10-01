import { ImpactourbanoModule } from './impactourbano.module';

describe('ImpactourbanoModule', () => {
  let impactourbanoModule: ImpactourbanoModule;

  beforeEach(() => {
    impactourbanoModule = new ImpactourbanoModule();
  });

  it('should create an instance', () => {
    expect(impactourbanoModule).toBeTruthy();
  });
});
