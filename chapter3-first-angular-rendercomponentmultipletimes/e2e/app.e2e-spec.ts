import { Chapter1ArrayPage } from './app.po';

describe('chapter1-array App', () => {
  let page: Chapter1ArrayPage;

  beforeEach(() => {
    page = new Chapter1ArrayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
