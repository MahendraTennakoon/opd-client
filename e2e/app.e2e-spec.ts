import { OpdClientPage } from './app.po';

describe('opd-client App', () => {
  let page: OpdClientPage;

  beforeEach(() => {
    page = new OpdClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
