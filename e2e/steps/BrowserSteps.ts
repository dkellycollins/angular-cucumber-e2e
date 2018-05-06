import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import * as assert from 'assert';
import { ScenarioContext } from '../support/ScenarioContext';

Given(/^the application is at the url "(.*)"$/, navigateTo);
When(/^I navigate to "(.*)"$/, navigateTo);
Then(/^the page title is "(.*)"$/, assertPageTitle)

async function navigateTo(this: ScenarioContext, url: string) {
  await this.navigateTo(url);
}

async function assertPageTitle(this: ScenarioContext, expectedTitle) {
  const actualTitle = await this.getTitle();
  assert.equal(actualTitle, expectedTitle, `Expected title ${expectedTitle}, got ${actualTitle}`);
}
