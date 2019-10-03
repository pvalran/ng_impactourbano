import { FilemanagerModule } from './filemanager.module';

describe('FilemanagerModule', () => {
  let filemanagerModule: FilemanagerModule;

  beforeEach(() => {
    filemanagerModule = new FilemanagerModule();
  });

  it('should create an instance', () => {
    expect(filemanagerModule).toBeTruthy();
  });
});
