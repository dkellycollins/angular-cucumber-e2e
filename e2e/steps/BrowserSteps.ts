import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import * as assert from 'assert';
import { ScenarioContext } from '../support/ScenarioContext';

Given(/^the application is at the url "([^"]*)"$/, navigateTo);
When(/^I navigate to "([^"]*)"$/, navigateTo);
When(/^I enter "([^"]*)" into the input$/, enterText);
When(/^I click the add button$/, clickAddButton);
Then(/^the page title is "([^"]*)"$/, assertPageTitle);

async function navigateTo(this: ScenarioContext, url: string) {
  await this.navigateTo(url);
}

async function assertPageTitle(this: ScenarioContext, expectedTitle) {
  const actualTitle = await this.getTitle();
  assert.equal(actualTitle, expectedTitle, `Expected title ${expectedTitle}, got ${actualTitle}`);
}

async function enterText(this: ScenarioContext, text: string): Promise<void> {
  await element(by.css('input')).sendKeys(text);
}

async function clickAddButton(this: ScenarioContext): Promise<void> {
  await element(by.buttonText('add')).click();
  this.refreshElements();
}
