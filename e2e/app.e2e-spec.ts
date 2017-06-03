import { AngulatTestPage } from './app.po';

describe('angulat-test App', () => {
  let page: AngulatTestPage;

  beforeEach(() => {
    page = new AngulatTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
