import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { setWorldConstructor } from 'cucumber';

export class ScenarioContext {

  public appDashboardHref: ElementFinder;
  public appDashboard: ElementFinder;
  public topHeroes: ElementArrayFinder;

  public appHeroesHref: ElementFinder;
  public appHeroes: ElementFinder;
  public allHeroes: ElementArrayFinder;
  public selectedHeroSubview: ElementFinder;

  public heroDetail: ElementFinder;

  public searchBox: ElementFinder;
  public searchResults: ElementArrayFinder;

  public async navigateTo(url) {
    await browser.get(url);
    this.refreshElements();
  }

  public async getTitle() {
    return await browser.getTitle();
  }

  public getHeroLiEltById(id: number) {
    let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(by.xpath('../..'));
  }

  public refreshElements() {
    const navElts = element.all(by.css('app-root nav a'));

    this.appDashboardHref = navElts.get(0),
    this.appDashboard = element(by.css('app-root app-dashboard')),
    this.topHeroes = element.all(by.css('app-root app-dashboard > div h4')),

    this.appHeroesHref = navElts.get(1),
    this.appHeroes = element(by.css('app-root app-heroes')),
    this.allHeroes = element.all(by.css('app-root app-heroes li')),
    this.selectedHeroSubview = element(by.css('app-root app-heroes > div:last-child')),

    this.heroDetail = element(by.css('app-root app-hero-detail > div')),

    this.searchBox = element(by.css('#search-box')),
    this.searchResults = element.all(by.css('.search-result li'))
  }
}

setWorldConstructor(ScenarioContext);
