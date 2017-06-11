import { AngularRecipesPage } from './app.po';

describe('angular-recipes App', () => {
  let page: AngularRecipesPage;

  beforeEach(() => {
    page = new AngularRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
