import { MedidasModule } from './medidas.module';

describe('MedidasModule', () => {
  let medidasModule: MedidasModule;

  beforeEach(() => {
    medidasModule = new MedidasModule();
  });

  it('should create an instance', () => {
    expect(medidasModule).toBeTruthy();
  });
});
