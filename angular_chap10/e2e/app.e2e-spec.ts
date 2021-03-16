import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  // let expectedMsg = 'Hello Angular';

  beforeEach(function () {
    browser.get('');
  });
  
  it('遷移のテスト', () => {
    expect(browser.getTitle().toString()).toEqual('Angular QuickStart');
    expect(element(by.css('h2')).getText().toString()).toEqual('メインページ');

    element(by.linkText('Exampleページ')).click();
    expect(element(by.css('h2')).getText().toString()).toEqual('Example');
  })

  // it('should display: ' + expectedMsg, function () {
  //   expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  // });

});
