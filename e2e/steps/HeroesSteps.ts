import { Given, When, Then, TableDefinition } from 'cucumber';
import * as assert from 'assert';
import { ScenarioContext } from '../support/ScenarioContext';
import { Hero } from '../support/Hero';
import { timeout } from 'rxjs/operators';

Given(/^the heroes page is active$/, clickAppHeroes);
When(/^I click the heroes link$/, clickAppHeroes);
When(/^I click the link for the hero "([^"]*)"$/, clickHeroLink);
Then(/^the heroes component is present$/, assertAppHeroesIsActive);
Then(/^the hero detail component is present$/, assertHeroDetailIsActive);
Then(/^the hero detail component shows the following$/, assertHeroDetailContent);
Then(/^the heroes page shows the hero "([^"]*)"$/, assertHeroIsDisplayed);

async function clickAppHeroes(this: ScenarioContext) {
  await this.appHeroesHref.click();
  this.refreshElements();
}

async function clickHeroLink(this: ScenarioContext, id: string) {
  const idNum = parseInt(id, 10);
  await this.getHeroLiEltById(idNum).click();
  this.refreshElements();
}

async function assertAppHeroesIsActive(this: ScenarioContext) {
  const isPresent = await this.appHeroes.isPresent();
  assert.ok(isPresent, 'Expected appHeroes to be present');
}

async function assertHeroDetailIsActive(this: ScenarioContext) {
  const isPresent = await this.heroDetail.isPresent();
  assert.ok(isPresent, 'Expected heroDetail to be present');
}

async function assertHeroDetailContent(this: ScenarioContext, table: TableDefinition) {
  const expectedHero = Hero.fromRow(table.hashes()[0]);
  const actualHero = await Hero.fromDetail(this.heroDetail);

  assert.deepEqual(expectedHero, actualHero, `Expected hero ${JSON.stringify(expectedHero)}, got ${JSON.stringify(actualHero)}`);
}

async function assertHeroIsDisplayed(this: ScenarioContext, heroName: string): Promise<void> {
  const heros = await Hero.fromArray(this.allHeroes);
  const actualHero = heros.find(h => h.name === heroName);
  assert.ok(actualHero, `Expected hero ${heroName} to be displayed`);
}

