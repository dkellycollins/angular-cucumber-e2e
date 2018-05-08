import { ElementFinder, by, ElementArrayFinder } from "protractor";

export class Hero {
  id: number;
  name: string;

  // Factory methods
  // Hero from string formatted as '<id> <name>'.
  static fromString(s: string): Hero {
    return {
      id: +s.substr(0, s.indexOf(' ')),
      name: s.substr(s.indexOf(' ') + 1),
    };
  }

  static fromRow(row: {[column: string]: string}): Hero {
    return {
      id: +row.id,
      name: row.name
    };
  }

  // Hero from hero list <li> element.
  static async fromLi(li: ElementFinder): Promise<Hero> {
      let stringsFromA = await li.all(by.css('a')).getText();
      let strings = stringsFromA[0].split(' ');
      return { id: +strings[0], name: strings[1] };
  }

  // Hero id and name from the given detail element.
  static async fromDetail(detail: ElementFinder): Promise<Hero> {
    // Get hero id from the first <div>
    let _id = await detail.all(by.css('div')).first().getText();
    // Get name from the h2
    let _name = await detail.element(by.css('h2')).getText();
    return {
        id: +_id.substr(_id.indexOf(' ') + 1),
        name: _name.substr(0, _name.lastIndexOf(' '))
    };
  }

  static async fromArray(allHeroes: ElementArrayFinder): Promise<Hero[]> {
    let promisedHeroes = await allHeroes.map(Hero.fromLi);
    // The cast is necessary to get around issuing with the signature of Promise.all()
    return <Promise<any>> Promise.all(promisedHeroes);
  }
}
