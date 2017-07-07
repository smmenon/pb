import { PberpPage } from './app.po';

describe('pberp App', () => {
  let page: PberpPage;

  beforeEach(() => {
    page = new PberpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
