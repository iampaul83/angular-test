import { Ng2ComponentPage } from './app.po';

describe('ng2-component App', () => {
  let page: Ng2ComponentPage;

  beforeEach(() => {
    page = new Ng2ComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
