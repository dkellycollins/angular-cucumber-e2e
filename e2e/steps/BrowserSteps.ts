import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import * as assert from 'assert';

Given(/^the application is at the url "(.*)"$/, navigateTo);
When(/^I navigate to "(.*)"$/, navigateTo);
Then(/^the page title is "(.*)"$/, assertPageTitle)

function navigateTo(url: string) {
  browser.get(url);
}

async function assertPageTitle(expectedTitle) {
  const actualTitle = await browser.getTitle();

  assert.equal(actualTitle, expectedTitle, `Expected title ${expectedTitle}, got ${actualTitle}`);
}
