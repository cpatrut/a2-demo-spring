import { browser, element, by } from 'protractor';

export class TicketsAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tk-root h1')).getText();
  }
}
