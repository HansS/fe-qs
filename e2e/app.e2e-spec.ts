import { QuestionsAotPage } from './app.po';

describe('questions-aot App', function() {
  let page: QuestionsAotPage;

  beforeEach(() => {
    page = new QuestionsAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
