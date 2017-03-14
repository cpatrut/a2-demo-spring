import { TicketsAppPage } from './app.po';

describe('tickets-app App', () => {
  let page: TicketsAppPage;

  beforeEach(() => {
    page = new TicketsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tk works!');
  });
});
